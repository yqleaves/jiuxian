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
            path:"/detail",
            // path:"/detail/:brandId/:pname",
            component:_=>import("@pages/detail"),
            name:"detail",
            props:true
        },
        {
            path:"/mine",
            name:"mine",
            meta:{
                flag:false,
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
                flag:false,
                title:"选酒"
            }
        },
        {
            path:"/baijiu",
            name:"baijiu",
            component:()=>import("@pages/baijiu"),
            meta:{
                flag:false
            }
        },
        {
            path:"/putaojiu",
            name:"putaojiu",
            component:()=>import("@pages/putaojiu"),
            meta:{
                flag:false
            }
        },
        {
            path:"/zhengxianggou",
            name:"zhengxianggou",
            component:()=>import("@pages/zhengxianggou"),
            meta:{
                flag:false
            }
        },
        {
            path:"/yangjiu",
            name:"yangjiu",
            component:()=>import("@pages/yangjiu"),
            meta:{
                flag:false
            }
        },
        {
            path:"/laojiu",
            name:"laojiu",
            component:()=>import("@pages/laojiu"),
            meta:{
                flag:false
            }
        },
        {
            path:"/datan",
            name:"datan",
            component:()=>import("@pages/datan"),
            meta:{
                flag:false
            }
        },
        {
            path:"/search",
            name:"search",
            component:()=>import("@pages/search"),
            meta:{
                flag:false
            }
        },
        {
            path:"/city",
            name:"city",
            component:()=>import("@pages/city"),
            meta:{
                flag:false
            }
        },
        {
            path:"/clear",
            name:"clear",
            component:()=>import("@pages/clear"),
            meta:{
                flag:false
            }
        }
        
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path !="/login" && to.meta.requiredAuth){
        if(localStorage.getItem("Authorization")){
            next();
        }else{
            next({name:"login",params:{to:to.path}});
        }
    }else{
        next();
    }
})

export default router