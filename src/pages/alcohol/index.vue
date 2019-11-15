<template>
   
    <div class="alcohol">
        
        <div class="content">
            <Head/>
            <Scroll ref="scroll">
            <Picture/>
            <Kind/>
            <div class="countdown">
                <h3>掌上秒拍</h3>
                <div class="tim">距结束
                    <van-count-down :time="time">
                    <template v-slot="timeData">
                        <span class="item">{{ timeData.hours }}</span>:
                        <span class="item">{{ timeData.minutes }}</span>:
                        <span class="item">{{ timeData.seconds }}</span>
                    </template>
                    </van-count-down>
                   
                </div>
                 <p>更多商品的你来抢！</p>
                    <b class="jx-sprite-icon"></b>
                
            </div>
            
            <Shop/>
            <List/>
            </Scroll>
        </div>
        
        <!-- <Loading/> -->
    </div>
   
</template>

<script>
import Head from "@/components/head"
import Picture from "@/components/picture"
import Kind from "@/components/kind"
import Shop from "@/components/shop"
import List from "@/components/list"
// import Loading from "@lib/loading"
import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
export default {
    name:"Alcohol",
    components:{
        Head,
        Picture,
        Kind,
        Shop,
        List,
        // Loading
    },
     data() {
        return {
        time: 30 * 60 * 60 * 1000
        };
    },
    created(){
        document.title = this.$route.meta.title;
        // let data = await shopList(1);
        // console.log(data);
    },
    mounted(){
        this.$refs.scroll.handlepullingDown();
        // this.$refs.yscroll.handlepullingUp();
       
    }
    

}
</script>

<style lang="scss" scoped>
    .alcohol{
        height: 100%; overflow: auto; width:100%; 
    }
    .content{
         overflow: auto; width: 100%; padding-bottom: .42rem;
    }
    .item {
        display: inline-block;
        width: .16rem;
        height: .16rem;
        margin-right: .05rem;
        color: #fff;
        font-size: .12rem;
        text-align: center;
        border-radius: 3px;
        background-color: #858585;
    }
    .countdown{
        width: 100%;
        height: .31rem;
        display: flex;
        justify-content: flex-start;
        padding: 0 .1rem;
    }
    .countdown h3{
        color: #666;
        font-size: .14rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        margin-right: .1rem;
    }
    .countdown .tim{
        font-size: .12rem;
        color:#666;
        margin-right: .05rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: .3rem;
    }
    .countdown p{
        width: 1.08rem;
        color: #999;
        font-size: .12rem;
        display: flex;
        align-items: center;
    }
    .jx-sprite-icon {
        width: .14rem;
        height: .13rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png) no-repeat;
        background-position: -88rem 0;
        background-size: 2rem .73rem;
        
       
    }
</style>