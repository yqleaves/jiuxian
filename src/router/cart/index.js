export default {
    path:"/cart",
    name:"cart",
    component:_=>import("@pages/cart"),
    meta:{
        flag:false,
        requiredAuth:false,
    }
}