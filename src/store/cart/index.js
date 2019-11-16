
let state = {
    selectedAll:true,
}

let actions = {

}
 let mutations = {
    handleChange(state){
        state.selectedAll = !state.selectedAll;
    }
 }

 let getters = {
    countPrice(){
        let sPrice = 0,sCount = 0;
        for(var i=0;i<state.goodsList.length;i++){
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

