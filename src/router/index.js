import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
        mode:"hash",
        routes:[
            {
                path:"/sort",
                component:_=>import("@pages/sort"),
                name:"sort",
                meta:{
                    flag:false
                }
            },
            
        ]
})

export default router;

