<template>
  <div>
    <Header title="一键选酒 畅饮大坛" icon />
    <div class="nav">
      <div class="nav-left">
        <a href="#">
          <i></i>
        </a>
        <span></span>
        <div class="nav-box">
          <p>打开酒仙网APP</p>
          <p>新人领198元礼包</p>
        </div>
      </div>
      <div class="nav-right">立即打开</div>
    </div>

    <div class="banner">
        <img src="https://img07.jiuxian.com/bill/2017/1012/dbe13e18484448c4a3af7ae0e5bc75ce.jpg" alt="">
    </div>

    <div class="banner1">
        <img src="https://img10.jiuxian.com/bill/2017/1012/04fdc638c8d94bee8024d49b7cbe389d.jpg" alt="">
    </div>

    <!-- 主体 -->
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="boxs">
      <!-- <a href="#" v-for="(item,index) in List" :key="index"> -->
        <router-link v-for="(item,index) in List" :key="index" tag="a" 
        :to="'/detail?id='+item.commonProductInfo.brandId+'&name='+item.commonProductInfo.pname+
          '&img='+item.commonProductInfo.imgPath+'&price='+item.commonProductInfo.actPrice">
        <div class="smallbox">
          <div class="pic">
            <img :src="item.commonProductInfo.imgPath" alt />
          </div>
          <p>{{item.commonProductInfo.pname}}</p>
          <p>十二生肖， 十二种纪念</p>
          <span>￥{{item.commonProductInfo.jxPrice}}</span>
          <span>点击购买</span>
        </div>
        </router-link>
      <!-- </a> -->
    </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { baijiuApi } from "@api/baijiu";
import Vue from 'vue';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

export default {
  name: "datan",
  data() {
    return {
      List: [],
      isLoading: false
    };
  },
  created() {
    this.handleBaijiuList(3);
  },
  methods: {
    async handleBaijiuList(pageNum) {
      let data = await baijiuApi(pageNum);
      //console.log(data);
      this.List = data.promoList;
    },
    handleback() {
      this.$router.back();
    },
    onRefresh() {
      setTimeout(() => {
        //this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>
<style>

html,
body {
  font-size: 26.67vw;
  background: #f5f5f5;
  overflow-y: auto;
  height:100%;
}
.nav {
  height: 0.43rem;
  width: 100%;
  display: flex;
  margin-top: 0.4rem;
}
.nav .nav-left {
  height: 0.43rem;
  width: 2.7rem;
  background: #333;
  display: flex;
}
.nav .nav-right {
  width: 1.18rem;
  height: 0.43rem;
  background: #e62929;
  font-size: 0.12rem;
  line-height: 0.43rem;
  text-align: center;
  color: #fff;
  float: right;
}
.nav .nav-left a {
  display: inline-block;
  height: 0.43rem;
  width: 0.43rem;
}
.nav .nav-left a i {
  width: 0.16rem;
  height: 0.16rem;
  display: block;
  margin: 0.14rem 0 0 0.14rem;
  background: url(../../../public/img/topApp.png) no-repeat 0 0;
  background-size: 35px 51px;
}
.nav .nav-left span {
  width: 0.3rem;
  height: 0.3rem;
  display: block;
  background: url(../../../public/img/topApp.png) no-repeat 0 -16px;
  background-size: 34px 50px;
  margin-top: 0.1rem;
}
.nav .nav-left .nav-box {
  font-size: 0.12rem;
  width: 1.6rem;
  color: #fff;
  text-align: center;
}
.nav .nav-left .nav-box p:nth-of-type(1) {
  margin-top: 0.06rem;
}

/* 导航 */
.banner{
    height:2.07rem;
    width:100%;
}
.banner img{
    height:2.07rem;
    width:100%;
}

.banner1{
    display: flex;
    margin-top:0.15rem;
}
.banner1,.banner1 img{
    height:0.34rem;
    width:100%;
}

/* 主体 */

.boxs {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
}
.boxs .smallbox {
  width: 1.7rem;
  height: 2.47rem;
  background: #fff;
  margin-top: 0.1rem;
  font-size: 0.16rem;
}
.boxs .smallbox .pic {
  width: 1.76rem;
  height: 1.47rem;
}
.boxs .smallbox .pic img {
  height: 1.4rem;
  width: 1.4rem;
  margin-left: 0.05rem;
}
.boxs .smallbox p:nth-of-type(1) {
  width: 1.6rem;
  padding: 0 0.05rem;
  font-size: 0.12rem;
  color: #000;
  text-align: center;
  width:1.6rem;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.boxs .smallbox p:nth-of-type(2) {
  color: red;
  width: 1.6rem;
  padding: 0 0.05rem;
  font-size: 0.12rem;
  margin-left: 0.05rem;
  margin-top: 0.06rem;
}
.boxs .smallbox span:nth-of-type(1) {
  font-size: 0.14rem;
  color: red;
  font-weight: bold;
  margin-top: 0.15rem;
  display: inline-block;
  margin-left: 0.1rem;
}
.boxs .smallbox span:nth-of-type(2) {
  width: 0.64rem;
  height: 0.24rem;
  font-size: 0.12rem;
  background: #ff0000;
  color: #fff;
  line-height: 0.24rem;
  text-align: center;
  border-radius: 0.03rem;
  float: right;
  margin: 0.15rem 0.06rem 0 0;
}
</style>