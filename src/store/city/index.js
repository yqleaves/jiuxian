import {cityApi} from "@api/city";

let state = {
    cityList: JSON.parse(sessionStorage.getItem("cityList")) || [],
    hotCity: JSON.parse(sessionStorage.getItem("hotCity")) || []
    // 
    // 
}

let actions = {
    async handleAsyncGetCity({commit}){
        let data = await cityApi();
        commit("handelGetCity",data.data.cities)
    }
}

let mutations = {
    handelGetCity(state,cities){
        let cityList = [];
        let hotCity = [];
        // cityList = [
        //     {
                    // indexList:1,
                    // list:[{id:"",name:""}]
        //     }
        // ]
        // 热门城市
        for(var i=0;i<cities.length;i++){
            if(cities[i].isHot){
                hotCity.push({id:cities[i].id,nm:cities[i].nm});
            }
        }
        console.log(hotCity)
        // 城市列表
        for(var i=0;i<cities.length;i++){
            let letterFirst = cities[i].py.slice(0,1).toUpperCase();
            if(isCityList(letterFirst)){
                cityList.push({index:letterFirst,list:[{id:cities[i].id,nm:cities[i].nm}]})
            }else{
                for(var j=0;j<cityList.length;j++){
                    if(cityList[j].index == letterFirst){
                        cityList[j].list.push({id:cities[i].id,nm:cities[i].nm})
                        break;
                    }
                }
            }
        }
        // 判断陈恒是是否在list中
        function isCityList(letterFirst){
            var bStop = true;
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index == letterFirst){
                    bStop = false;
                    break;
                }
            }
            return bStop;
        }
        

        // 字典排序
        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })

        state.cityList = cityList;
        state.hotCity = hotCity;
        console.log(state.cityList)
        sessionStorage.setItem("cityList",JSON.stringify(cityList));
        sessionStorage.setItem("hotCity",JSON.stringify(hotCity))
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}