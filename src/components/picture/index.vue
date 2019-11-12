<template>
    <!-- <div class="swiper-container swiper1"> -->
        <div>
            <van-swipe class="swiper-container" :autoplay="3000">
            <van-swipe-item class="wiper-slide" v-for="(image, index) in images" :key="index">
                <img  :src="image" />
            </van-swipe-item>
            </van-swipe>
        <!-- <div class="swiper-pagination"></div> -->
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="head">
            <i></i>
            <div class="search">
                <b></b>
                <span>硬核11.11 壕掷千万补贴</span>
            </div>
        </div>
    </div>
    
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
import Swiper from "swiper"
export default {
   data() {
    return {
      images: [
        'https://img06.jiuxian.com/bill/2019/1104/71df8bc897714626899d756e29471c3d.jpg',
        'https://img08.jiuxian.com/bill/2019/1101/650346cc128845598a4c76896ccc4598.jpg',
        "https://img07.jiuxian.com/bill/2019/1028/0ead93d841934a6ca8a0ba1e8cbceb49.jpg",
        "https://img06.jiuxian.com/bill/2019/1028/6ef3d28f76b64e60889ca551256cdba3.jpg",
        "https://img07.jiuxian.com/bill/2019/1028/8be5f24aa0164c638a2d4b2ccccaee7a.jpg",
        "https://img08.jiuxian.com/bill/2019/1028/20d0e4d7f5a84feb976ec350f21a23f7.jpg",
        "https://img06.jiuxian.com/bill/2019/1028/987f9a924ace4d10b3d6461b18f9f9a4.jpg"
      ]
    }
  },


}
</script>

<style lang="scss">

.swiper-container {
    width: 100%;
    height: 1.8rem;
    display: flex;
    margin-bottom:1px;
    position: relative;
}
.swiper-pagination{
    height: 1rem;
}
/* //图片水平垂直居中 */
.van-swipe__track {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

.van-swipe__track img {
    width: 100%;
    height: 100%;
}

/* header */
.head{
    height: .4rem;
    width: 100%;
    display: flex;
    /* background: pink;  */
    position: fixed;     
    top: 0;
    z-index: 2;
    justify-content: space-around;
    align-items: center;
}
.head i{
    width: .57rem;
    height: .27rem;
    background: url(https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png) no-repeat;
    background-size: 2rem .73rem;
    border-radius: 3px;
    background-position: 0 0;
}
.head .search{
    width: 2.9rem;
    height: .27rem;
    border-radius: 3px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 .1rem;
}
.head .search b{
    background: url(https://mlist.jiuxian.com/mjava_statics/images/search/searchIcon.png) no-repeat;
    background-size: 1.2rem .4rem;
    cursor: pointer;
    width:.12rem;
    height: .12rem;
    display: flex;
    background-position: -.41rem -.18rem;
    margin-right: .2rem;
}
.head .search span{
    font-size: .12rem;
    color: #666;
    width: 1.5rem;
}

</style>