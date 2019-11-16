<template>
  <div>
    <Header title="个人中心" icon />
    <!-- 背景 -->
    <div class="bg">
      <img class="bg-img" src="https://misc.jiuxian.com/m_user/images/usercenter/topBg.jpg" alt />
      <div class="user">
        <div class="mask">
          <img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png" alt />
        </div>
        <div class="order">
          <span>{{user}}</span>
          <!-- <span>
            立享CLUB会员
            <i></i>
          </span> -->
          <p>下载客户端 美酒随时抢</p>
        </div>
      </div>
      <div class="bot">
        <p class="p">LV1酒虫</p>
        <div class="status">
          <a href="#">
            <strong>0</strong>
            <span>待付款</span>
          </a>
          <a href="#">
            <strong>0</strong>
            <span>待发货</span>
          </a>
          <a href="#">
            <strong>0</strong>
            <span>待收货</span>
          </a>
          <a href="#">
            <strong>0</strong>
            <span>已完成</span>
          </a>
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
      </div>
    </div>

    <!-- 主体 -->

    <div class="box">
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt="">
        <span>{{item.name}}</span>
      </li>
      
    </div>

    <div @click="handledel()" class="btn">退出登录</div>
  </div>
</template>

<script>
import {delCookie,getCookie} from '../../utils/cookie'
export default {
  name: "mine",
  data(){
    return {
      list:[
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/order.png",
          name:"全部订单"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/cart.png",
          name:"购物车"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/exchange.png",
          name:"去兑换"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/coupon.png",
          name:"我的优惠券"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/history.png",
          name:"浏览历史"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/wallet.png",
          name:"我的钱包"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/collect.png",
          name:"我的收藏"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/address.png",
          name:"地址管理"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/unreceived-icon.png",
          name:"待领取"
        },
        {
          img:"https://misc.jiuxian.com/m_user/images/usercenter/safe.png",
          name:"账户安全"
        }
      ],
      user:''
    }
  },
  created(){
    this.user = getCookie("name")
  },
  methods:{
    handledel(){
        delCookie("token");
        delCookie("name");
        delCookie("urlPic");
        this.$router.push("/login")
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


.bg {
  width: 100%;
  height: 1.52rem;
  position: relative;
  margin-top: 0.4rem;
}
.bg .bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.52rem;
  z-index: -5;
}
.bg .user {
  height: 0.78rem;
  width: 100%;
  position: absolute;
  top: 0.1rem;
  left: 0;
  display: flex;
}
.user .mask,
.user .mask img {
  width: 0.83rem;
  height: 0.86rem;
}
.user .mask {
  margin-left: 0.2rem;
  display: flex;
}
.user .order {
  font-size: 0.14rem;
}
.user .order span:nth-of-type(1) {
  color: red;
  font-weight: bold;
  margin: 0.2rem 0 0 0.15rem;
  display: inline-block;
}
.user .order p:nth-of-type(1) {
  margin-left: 0.15rem;
}
.user .order span:nth-of-type(2) {
  font-size: 0.1rem;
  color: #f1d08a;
  background: #25282f;
  display: inline-block;
  width: 0.8rem;
  height: 0.16rem;
  border-radius: 0.03rem;
  line-height: 0.16rem;
  padding: 0 0.04rem;
}
.user .order span:nth-of-type(2) i {
  height: 0.11rem;
  width: 0.11rem;
  display: inline-block;
  margin-left: 0.03rem;
  background-size: 9px 9px;
  background: url(../../../public/img/clubFinger.png) no-repeat center;
  border-radius: 50% 50%;
  margin-top: 0.02rem;
}
.bot {
  width: 100%;
  height: 0.49rem;
  background: url(../../../public/img/transparent.png) repeat;
  -opacity: 0.2;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #171516;
  display: flex;
}
.p {
  height: 0.47rem;
  width: 0.675rem;
  display: block;
  font-size: 0.14rem;
  color: #fff;
  background: url(../../../public/img/grade.png) no-repeat;
  background-size: 100%;
  margin-left: 7.5%;
  padding-top: 2%;
  text-align: center;
  font-size: 0.12rem;
}
.status {
  height: 0.49rem;
  width: 2.62rem;
  margin-left: 0.3rem;
  display: flex;
}
.status a {
  height: 0.49rem;
  width: 25%;
  display: block;
  font-size: 0.14rem;
  color: #000;
  text-align: center;
}
.status strong {
  margin-top: 0.05rem;
  display: block;
  font-weight: bold;
}
.status span {
  display: block;
  line-height: 0.25rem;
}
.status .line {
  width: 2px;
  height: 0.32rem;
  display: block;
  position: absolute;
  background: url(../../../public/img/userIcon.png) no-repeat -10px -6px;
}
.status .line1 {
  left: 50%;
  top: 10%;
}
.status .line2 {
  left: 66%;
  top: 10%;
}
.status .line3 {
  left: 84%;
  top: 10%;
}
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  font-size: 0.14rem;
  color: #626365;
  margin-top: 0.2rem;
}
.box li {
  list-style: none;
  width: 33.3%;
  height: auto;
  margin-bottom: 0.2rem;
  padding: 0 5%;
  box-sizing: border-box;
}
.box li img {
  width: 100%;
  margin-bottom: 0.05rem;
}
.box span {
  width: 100%;
  height: auto;
  display: block;
  text-align: center;
  color: #626365;
}
.btn {
  font-size: 0.16rem;
  width: 3rem;
  display: block;
  color: #fff;
  border-radius: 5px;
  background: #de4b45;
  height: 0.34rem;
  line-height: 0.34rem;
  margin: 0.3rem auto;
  text-align: center;
}
</style>