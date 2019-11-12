import Vue from "vue";
import VueRouter from "vue-router";
import alcohol from "./alcohol";
import cart from "./cart";
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/alcohol"
        },
        alcohol,
        cart,
        {
            path:"/mine",
            name:"mine",
            meta:{
                flag:true,
                requiredAuth:true,
            },
            component:()=>import("@pages/mine")
        },
        {
            path:"/login",
            name:"login",
            component:()=>import("@pages/login"),
            meta:{
                flag:false
            }
        },
        {
            path:"/sort",
            name:"sort",
            component:()=>import("@pages/sort"),
            meta:{
                flag:false
            }
        }
        
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path !="/login" && to.meta.requiredAuth){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}});
        }
    }else{
        next();
    }
})

export default router