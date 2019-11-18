
let state = {
    selectedAll:true,
    goodsList:[],
}

let actions = {

}
 let mutations = {
    handleChange(state){
        state.selectedAll = !state.selectedAll;
    },
    handleGoodsItemChange(state,index){
        state.goodsList[index].flag = !state.goodsList[index].flag;

        let stop = true;

        for(var i=0;i<state.goodsList.length;i++){
            if(!state.goodsList[i].flag){
                stop = false;
                break;
            }
        }

        state.selectedAll = stop;
    },
    handleReducer(state,index){
        if(state.goodsList[index].num<=1){
            state.goodsList[index].num = 1
        }else{
            state.goodsList[index].num--
        }

    },
    handleAdd(state,index){
        state.goodsList[index].num++
    },
    handleDelete(state,index){
        state.goodsList.splice(index,1);
        localStorage.setItem("cartlist",JSON.stringify(state.goodsList));
    }
 }

 let getters = {
    countPrice(){
        let sPrice = 0,sCount = 0;
        for(var i=0;i<state.goodsList.length;i++){
            if(state.goodsList[i].flag){
                sCount += state.goodsList[i].num;
                sPrice += (state.goodsList[i].num * state.goodsList[i].price)
            }
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

