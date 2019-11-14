<template>
  <div >
    <Header title="整箱购" icon />
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
      <img src="https://img09.jiuxian.com/bill/2017/1124/f7ef42a58bcb432f9fdde9f50340a3d5.jpg" alt />
    </div>

    <div class="banner1">
      <img src="https://img06.jiuxian.com/bill/2017/1219/6e9f330c82594e19a87ddf8899c4cdd2.jpg" alt />
    </div>

    <div class="banner2">
      <img src="https://img07.jiuxian.com/bill/2018/0227/908ccf1dfd7c4d54b7e3544201f7e619.jpg" alt />
    </div>

    <!-- 主体 -->

    <div class="box">
      <a href="#" v-for="(item,index) in List" :key="index">
        <div class="smallbox">
          <div class="pic">
            <img :src="item.commonProductInfo.imgPath" alt />
          </div>
          <p>{{item.commonProductInfo.pname}}</p>
          <p>十二生肖， 十二种纪念</p>
          <span>￥{{item.commonProductInfo.jxPrice}}</span>
          <span>点击购买</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { baijiuApi } from "@api/baijiu";
export default {
  name: "zhengxianggou",
  data() {
    return {
      List: []
    };
  },
  created() {
    this.handleBaijiuList(2);
  },
  methods: {
    async handleBaijiuList(pageNum) {
      let data = await baijiuApi(pageNum);
      //console.log(data);
      this.List = data.promoList;
    },
    handleback(){
      this.$router.back();
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
.banner {
  height: 2.07rem;
  width: 100%;
}
.banner img {
  height: 2.07rem;
  width: 100%;
}

.banner1 {
  display: flex;
  margin-top: 0.15rem;
}
.banner1,
.banner1 img {
  height: 0.3869rem;
  width: 100%;
}
.banner2 {
  display: flex;
  margin-top: 0.1rem;
}
.banner2,
.banner2 img {
  width: 100%;
  height: 1.92rem;
}

/* 主体 */

.box {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
}
.box .smallbox {
  width: 1.76rem;
  height: 2.47rem;
  background: #fff;
  margin-top: 0.1rem;
  font-size: 0.16rem;
}
.box .smallbox .pic {
  width: 1.76rem;
  height: 1.47rem;
}
.box .smallbox .pic img {
  height: 1.4rem;
  width: 1.4rem;
  margin-left: 0.05rem;
}
.box .smallbox p:nth-of-type(1) {
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
.box .smallbox p:nth-of-type(2) {
  color: red;
  width: 1.6rem;
  padding: 0 0.05rem;
  font-size: 0.12rem;
  margin-left: 0.05rem;
  margin-top: 0.06rem;
}
.box .smallbox span:nth-of-type(1) {
  font-size: 0.14rem;
  color: red;
  font-weight: bold;
  margin-top: 0.15rem;
  display: inline-block;
  margin-left: 0.1rem;
}
.box .smallbox span:nth-of-type(2) {
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