<template>
<Scroll ref="cleanScroll">
    <div class="clean-list">
        <ul>
            <li v-for="(item,index) in clearList" :key="index"><a href="">
                <div class="img-box">
                    <img :src="item.goods_thumb" alt="">
                    <!-- <p>已售馨</p> -->
                </div>
                <p class="name">{{item.goods_name}}</p>
                <p class="ad-text"></p>
                <div class="price-box">
                    <div class="price">
                        <p>￥{{item.cur_price}}</p>
                        <span class="oPrice">{{item.showCur_price == true ?'￥'+item.shop_price:""}}</span>
                    </div>
                    <div class="buy">点击购买</div>
                </div>
                </a></li>
        </ul>
    </div>
    </Scroll>
</template>

<script>
import {clearApi} from "@api/clear"
export default {
    name:"CleanList",
    data(){
        return{
            clearList:[]
        }
    },
    created(){
        this.handleCleanList(2);
    },
    methods:{
        async handleCleanList(pageNum){
            let data = await clearApi(pageNum);
            console.log(data);
            this.clearList = data.goodsCate.list;
            console.log(this.clearList)
        }
    },
    mounted(){
        // this.$refs.cleanScroll.handlepullingUp();
        this.$refs.cleanScroll.handlepullingUp(async ()=>{
        let n = parseInt((Math.random()*6)+1);
        //  let arr = [10,1,20,40,50,55,59]
        let data = await clearApi(n);
        console.log(n)
        this.clearList = [...this.clearList,...data.goodsCate.list];
        sessionStorage.setItem("clearList",JSON.stringify(data.goodsCate.list))
        this.$refs.cleanScroll.handlefinishPullUp();
        
     })
    }
}
</script>

<style lang="scss">
    .clean-list{
        width:100%; display: flex; background: #316def; 
    }
    .clean-list ul{
        width: 100%; height:100%; display: flex; justify-content: space-around; flex-wrap: wrap;
        align-content: flex-start; padding: 0 .03rem;
    }
    .clean-list ul li{
        width: 48%; height: 2.475rem; background: #fff; margin-bottom: .1rem;
    }
    .clean-list ul li a{
         display: flex; width:100%; height:100%; flex-direction: column;
     }
    .clean-list ul li a .img-box{
         width: 100%; height: 1.4rem; display: flex; justify-content: center; align-items: center;
        position: relative;
     }
    .clean-list ul li a .img-box img{
        width: 1.4rem; height:1.4rem; 
    }
    .clean-list ul li a .img-box p{
        position: absolute; width:1.235rem; height: .5rem; background: rgba(0,0,0,.5);color: #fff;
        display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: .18rem;
    }
    .clean-list ul li a .name{
        height: .3rem; text-align: center; color: #333;font-family: 华文细黑; 
        font-size: .12rem; margin: 2% 5%; overflow: hidden;
    }
    .clean-list ul li a .ad-text{
        height: .21rem; margin:0 5%; color: #ff0000; font-size: .12rem; line-height: .21rem;
    }
    .clean-list ul li a .price-box{
        height: .32rem; margin: 5% 5% 0; display: flex; justify-content: space-between; align-items: center;
    }
    .clean-list ul li a .price-box .price{
        height: 100%; display: flex; justify-content: space-between; align-items: center;
    }
    .clean-list ul li a .price-box .price p{
        color:#ff0000; font-weight: bold; font-size: .13rem;
    }
    .clean-list ul li a .price-box .price span{
        color:#7a7a7a; text-decoration: line-through; font-size: .11rem;
    }
    .clean-list ul li a .price-box .buy{
        color: #fff; text-align: center; font-size: .12rem; background: #ff0000;
        height: .24rem; width: .635rem; line-height: .24rem; border-radius: 3px;
    }
</style>