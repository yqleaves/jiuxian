export default {
    path:"/alcohol",
    name:"alcohol",
    component:_=>import("@pages/alcohol"),
    meta:{
        flag:true,
        requiredAuth:false,
    }
}