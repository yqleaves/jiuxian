<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Scroll",
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            //上拉加载更多
            pullDownRefresh:true,
            pullUpLoad:true,
            click: true,
            tap:true,
            scrollX: true,
            // scrollY: true,
            bounce: true,
            probeType: 3,
            pullUpLoad: {
                threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
            }
        });
    },
    methods:{
        handlepullingDown(){
            this.scroll.on("pullingDown",()=>{
                console.log(123)
            })
        },
        // 上啦加载更多
        handlepullingUp(callback){
            this.scroll.on("pullingUp",()=>{
                callback();
                console.log(111)
            })
        },
        handlefinishPullUp(){
            // 通知下一次上拉加载
            this.scroll.finishPullUp();
            //重新计算better-scroll
            this.scroll.refresh();
        }
    },
    
}
</script>

<style lang="scss">
    .wrapper{
        height: 100%;
    }
</style>