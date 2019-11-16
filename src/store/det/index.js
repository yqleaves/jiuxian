
let state = {
    num : 1,
    goodsList:[]
}

let actions = {
    handleStorage({commit},params){
        commit("handlePushStorage",params)
    }
}

let mutations = {
    handlePushStorage(state,params){
        state.goodsList.push(params);
        localStorage.setItem("cartlist",JSON.stringify(state.goodsList))
    },
    handleNumReduce(state){
        if(state.num <= 1){
            state.num = 1
        }else{
            state.num--
        }
       
    },
    handleNumAdd(state){
        state.num+=1
    },
    
}
let getters = {
    countPrice(){
        let sPrice = 0,sCount = 0;
        for(var i=0;i<state.goodsList.length;i++){
            console.log(state.goodsList.length)
            sCount += state.goodsList[i].num;
            sPrice += (state.goodsList[i].num * state.goodsList[i].price)
        }
        return {
            sPrice,
            sCount
        }
    }
 }

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}