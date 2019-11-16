<template>
<!-- <Scroll ref="scroll"> -->
    <div class="list" >
        <!-- 爆款 -->
        <div class="title">
            爆款推荐
        </div>
              
            <div class="recommend">
                <li v-for="(item,index) in recommendList" :key="index">
                    <div class="icon">
                        <i v-for="(child,i) in item.promo" :key="i" :style="{'background':'child.backcolor'}">
                            {{child.name}}
                        </i>
                    </div>
                   
                    <router-link :to="'/detail?id='+item.commonProductInfo.brandId+'&name='+item.commonProductInfo.pname+
                    '&img='+item.commonProductInfo.imgPath+'&price='+item.commonProductInfo.actPrice" >
                        
                        <img :src="item.commonProductInfo.imgPath" alt="">
                        <span class="item-title">{{item.commonProductInfo.pname}}</span>
                        <span class="item-price">
                            <em>￥{{item.commonProductInfo.actPrice.toFixed(2)}}</em>
                            <b>￥{{item.commonProductInfo.jxPrice.toFixed(2)}}</b>
                        </span>
                    </router-link>
                </li>
            </div>
        
    </div>
<!-- </Scroll> -->
    <!-- </div> -->
</template>

<script>
// import BScroll from "better-scroll";
import {recommendListApi} from "@api/alcohol"
export default {
    name:"List",
    data(){
        return{
            recommendList:[],
        }
    },
    watch:{
        recommendList(){
            // this.$refs.scroll.handlefinishPullingUp();
            console.log("更新了")
        }
    },
    created(){
        this.handleRecommendList(1)
        // let data = await recommendListApi(1165);
        // console.log(data)
    },
    // activated(){
    //     console.log("执行了")
    // },
    methods:{
        async handleRecommendList(pageNum){
             let data = await recommendListApi(pageNum);
             
             this.recommendList = data.promoList;
            //  sessionStorage.setItem("this.recommendList",JSON.stringify(data.promoList));

            //  if(sessionStorage.getItem(this.recommendList)){
            //      this.recommendList = JSON.parse(sessionStorage.getItem(this.recommendList))
            //  }else{
            //      this.recommendList = data.promoList;
            //  }
        }
       
    },
    // mounted(){
        
    //     this.$refs.scroll.handlepullingUp(async ()=>{
    //     let n = parseInt((Math.random()*6)+1);
    //     //  let arr = [10,1,20,40,50,55,59]
    //     let data = await recommendListApi(n);
    //     console.log(n)
    //     this.recommendList = [...this.clearList,...data.promoList];
    //     sessionStorage.setItem("recommendList",JSON.stringify(data.promoList))
    //     this.$refs.scroll.handlefinishPullUp();
    //     })
    //     // this.$refs.scroll.handleScroll();
    // }
 
 
}
</script>


<style lang="scss" scoped>
    /* 爆款推荐 */
.title{
    width: 100%;
    height: .33rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: .12rem;
    border-bottom: 1px solid #f1f1f1;
}
.list{
    overflow: auto;
    height: 100%;
    width: 100%;
    background: #f5f5f5;
}
.recommend{
    // width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
}
.recommend li{
    width: 49%;
    background: #fff;
    height: 2.43rem;
    margin-bottom: .1rem;
    position: relative;
    padding: .2rem .1rem .05rem;
}
.recommend li a{
    display: flex;
    width: 100%;
    min-height: 2rem;
    flex-direction: column;
}
.recommend li .icon{
    width: 100%;
    height: .1rem;
    position: absolute;
    top: 4px;
    left: 3px;
    display: flex;
    justify-content: flex-start;
}
.recommend li i{
    background: #ff6266;
    // width: .54rem;
    height: .16rem;
    color: #fff;
    border-radius: 2px;
    font-size: .12rem;
    display: flex;
    justify-content: center;
    margin-right:.05rem;
    padding: 0 .04rem;
}
.recommend li i:nth-of-type(3){
    background: #c58cff;
}
.recommend li i:nth-of-type(2){
    background: #5eaffe;
}
.recommend li a img{
    width: 1.65rem;
    height: 1.65rem;
}
.recommend li a .item-title,.recommend li a .item-price{
    width: 100%;
    height: .32rem;
    font-size: .12rem;
    font-family: 华文细黑;
    overflow: hidden;
    color: #333;
}
.recommend li a .item-price{
    height: .2rem;
}
.recommend li a .item-price em{
    color: #fc5a5a;
    font-size: .14rem;
}
.recommend li a .item-price b{
    color: #999;
    text-decoration-line: line-through;
    font-size: .14rem;
    margin-left: .05rem;
    font-size: .12rem;
}
</style>