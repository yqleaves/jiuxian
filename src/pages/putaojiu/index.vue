<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <div class="left"  @click="handleback()"></div>
      <input class="middle" type="text" placeholder="硬核11.11豪掷千万补贴" @click="handlesearch()"/>
      <div class="fangdajing"></div>
      <div class="right"></div>
    </div>
    <!---导航-->
    <div class="nav">
      <li class="list">综合</li>
      <li>销量</li>
      <li @click="upchange">
        价格升序
        <!-- <span class="price"></span> -->
      </li>
      <li @click="downchange">价格降序</li>
      <li>筛选</li>
    </div>
    <!-- 配送 -->

    <div class="nav1">
      <li class="li-one">酒仙配送</li>
      <li>CLUB会员价</li>
    </div>
    <!-- 主体 -->
    <div class="bigbox">
      <div class="boxs" v-for="(item,index) in baijiuList" :key="index">
        <img :src="item.commonProductInfo.imgPath" alt />
        <div class="box1">
          <p>{{item.commonProductInfo.pname}}</p>
          <div class="xianshi">限时抢购</div>
          <p class="price">￥{{item.commonProductInfo.jxPrice}}</p>
          <span></span>
          <span>99% 好评</span>
          <span>13553人 评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baijiuApi } from "@api/baijiu";
export default {
  name: "Baijiu",
  data() {
    return {
      baijiuList: []
    };
  },
  created() {
    this.handleBaijiuList(5);
  },
  methods: {
    async handleBaijiuList(pageNum) {
      let data = await baijiuApi(pageNum);
      //console.log(data);
      this.baijiuList = data.promoList;
    },
    handleback(){
      this.$router.back();
    },
    handlesearch(){
      this.$router.push("/search")
    },
     upchange() {
      this.baijiuList.sort((a, b) => {
        return a.commonProductInfo.jxPrice - b.commonProductInfo.jxPrice;
      });
    },
    downchange() {
      this.baijiuList.sort((a, b) => {
        return b.commonProductInfo.jxPrice - a.commonProductInfo.jxPrice;
      });
    }
  }
};
</script>
<style>
html,
body {
  font-size: 26.67vw;
   overflow-y: auto;
}
/*头部*/
.head {
  height: 0.4rem;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  background: #fafafa;
  position:fixed;
  top:0;
  left:0;
}
.head .left {
  height: 0.4rem;
  width: 0.33rem;
  background: url(../../../public/img/searchIcon.png) no-repeat -3px 0;
  background-size: 120px 40px;
}
.head .middle {
  font-size: 0.12rem;
  width: 2.6rem;
  height: 0.28rem;
  line-height: 0.28rem;
  margin: 0.08rem auto;
  background: #ececec;
  color: #666;
  border: none;
  display: inline-block;
  border-radius: 0.03rem;
  padding: 0 0.35rem;
  cursor: pointer;
}
.head .fangdajing {
  height: 0.28rem;
  width: 0.12rem;
  position: absolute;
  top: 0.14rem;
  left: 0.7rem;
  background: url(../../../public/img/searchIcon.png) no-repeat -41px -18px;
  background-size: 1.2rem 0.4rem;
}
.head .right {
  height: 0.54rem;
  width: 0.25rem;
  background: url(../../../public/img/listIcon.png) no-repeat 0 -45px;
  background-size: 100px 78px;
  margin-right: 0.1rem;
  margin-top:0.03rem;
}
/*导航*/
.nav {
  height: 0.4rem;
  display: flex;
  font-size: 0.14rem;
  margin-top:0.4rem;
  background: #fff;
  
}
.nav li {
  list-style: none;
  display: block;
  -width: 0.975rem;
  width:20%;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
}
.nav .list {
  color: #fc5a5a;
}
.nav .price {
  display: inline-block;
  width: 0.05rem;
  height: 0.08rem;
  margin: 0.16rem 0 0 0.05rem;
  background: url(../../../public/img/listIcon.png) no-repeat -23px 0px;
  background-size: 100px 70px;
}
/*配送*/

.nav1 {
  height: 0.45rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  margin-top: 0.1rem;
  /* position:fixed;
  top:0.8rem;
  background: #fff;
  left:0; */
}
.nav1 li {
  height: 0.26rem;
  padding: 0 0.2rem;
  margin-left: 0.15rem;
  font-size: 0.12rem;
  line-height: 0.26rem;
  list-style: none;
  background: #f6f6f6;
  border-radius: 0.13rem;
}
.nav1 .li-one {
  color: #fc5a5a;
}

/* 主体 */
.bigbox{
   
   width:100%;
height:100%;
    
}
.boxs {
  height: 1.2rem;
  width: 100%;
  display: flex;
}
.boxs img {
  width: 1.1rem;
  height: 1.1rem;
  margin-top: 0.05rem;
}
.boxs .box1 {
  width: 2.55rem;
  height: 1.2rem;
  margin-left: 0.1rem;
  font-size: 0.16rem;
  border-bottom: 1px solid #e8e8e8;
}
.boxs .box1 p:nth-of-type(1) {
  margin-top: 0.1rem;
  width:2.4rem;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.14rem;
}
.boxs .box1 .xianshi {
  font-size: 0.1rem;
  background: #ffa855;
  height: 0.14rem;
  width: 0.44rem;
  text-align: center;
  color: #fff;
  border-radius: 0.02rem;
  margin: 0.05rem 0 0 0.05rem;
}
.boxs .box1 p:nth-of-type(2) {
  font-size: 0.14rem;
  color: red;
  font-weight: bold;
  margin-top: 0.1rem;
}
.boxs .box1 span:nth-of-type(1) {
  background: url(../../../public/img/listIcon.png) no-repeat -62px -15px;
  width: 0.38rem;
  height: 0.13rem;
  display: inline-block;
  background-size: 1rem 0.7rem;
  margin-top: 0.1rem;
}
.boxs .box1 span:nth-of-type(2) {
  font-size: 0.12rem;
  color: #ccc;
  margin-left: 0.1rem;
}
.boxs .box1 span:nth-of-type(3) {
  font-size: 0.12rem;
  color: #ccc;
  margin-left: 0.05rem;
}
</style>