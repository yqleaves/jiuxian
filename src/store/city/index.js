import {cityApi} from "@api/city";
let state = {

}

let actions = {
    async handleAsyncGetCity({commit}){
        let data = await cityApi();
        console.log(data.length);
        commit("handelGetCity",data.data)
    }
}

let mutations = {
    handelGetCity(state,cities){
        console.log(cities);
        let cityList = [];

        // cityList = [
        //     {
                    // indexList:1,
                    // list:[{id:"",name:""}]
        //     }
        // ]

        // 城市列表
        for(var i=0;i<cities.length;i++){
            let letterFirst = cities[i].py.slice(0,1).toUppercase();
            if(isCityList(letterFirst)){
                cityList.push({index:letterFirst,list:[{id:cities[i].citycode,name:cities[i].cityname}]})
            }else{
                for(var j=0;j<cityList.length;j++){
                    if(cityList[j].index == letterFirst){
                        cityList[j].list.push({index:letterFirst,list:[{id:cities[i].citycode,name:cities[i].cityname}]})
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
        console.log(cityList)
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}