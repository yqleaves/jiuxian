let state = {
    num : 1,
}

let actions = {

}

let mutations = {
    handleNumReduce(state){
        if(state.num <= 1){
            state.num = 1
        }else{
            state.num--
        }
       
    },
    handleNumAdd(state){
        state.num++
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}