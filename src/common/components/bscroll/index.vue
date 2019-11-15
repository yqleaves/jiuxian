<template>
    <div class="scroll-container">
       
        <div class="wrapper" ref="wrapper">
            <slot></slot>
        </div>
         <!-- <div class="scroll-loading" v-if="loadingFlag">
            <van-loading type="spinner" />
        </div> -->
    </div>
    
</template>

<script>

import BScroll from "better-scroll"
export default {
    name:"Scroll",
    data(){
        return {
            loadingFlag:false
        }
    },
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
            // scroll事件配置项
            probeType: 1,
            pullUpLoad: {
                threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
            }
        });
    },
    methods:{
        // handleScroll(){
        //     this.scroll.on("scroll",({y})=>{
        //         if(y>-50 && (!this.loadingFlag)){
        //             alert(1)
        //             this.loadingFlag = true;
        //         }
        //     })
        // },
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
    .wrapper,.scroll-container{
        height: 100%;
        overflow: auto;
    }
    .scroll-loading{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>