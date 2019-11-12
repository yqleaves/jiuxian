<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <img class="left" src="../../../public/img/headBack.jpg" alt />

      <div class="middle">选酒</div>
      <div class="right"></div>
    </div>
    <!-- 搜索 -->
    <div class="sousuo">
      <input type="text" placeholder="硬核11.11豪掷千万补贴" />
      <div class="fangdajing"></div>
    </div>
    <!-- 主体 -->
    <div class="main">
      <li>
        <a href="#">
          <i></i>
          <span>白酒</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i></i>
          <span>葡萄酒</span>
        </a>
      </li>
      <li class="br">
        <a href="#">
          <i></i>
          <span>洋酒</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i></i>
          <span>整箱购</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i></i>
          <span>老酒</span>
        </a>
      </li>
      <li class="br">
        <a href="#">
          <i></i>
          <span>清仓特卖</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i></i>
          <span>海外直采</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i></i>
          <span>精美大坛</span>
        </a>
      </li>
      <li class="br">
        <a href="#">
          <i></i>
          <span>红酒整箱</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i></i>
          <span>值得买</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i></i>
          <span>销量排行</span>
        </a>
      </li>
      <li class="br">
        <a href="#">
          <i></i>
          <span>礼尚往来</span>
        </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
    name:"sort"
};
</script>

<style>

    html,body{
    font-size:26.67vw;
}
/*头部*/
.head{
    height:0.4rem;
    width:100%;
    background: #de4943;
    display: flex;
    justify-content: space-around;
}
.head .left{
    width:0.3rem;
    height:0.4rem;
   
}
.head .left img{
    
    display: inline;
}
.head .middle{
    font-size:0.16rem;
    height:0.4rem;
    width:2.2rem;
    color:#fff;
    text-align:center;
    line-height: 0.4rem;;
}
.head .right{
    width: 0.3rem;
    height:0.3rem;
    background: url(../../../public/img/headIcon.png) no-repeat -150px 6px;
    margin-top:0.04rem;
}
/*搜索*/
.sousuo{
    height: 0.4rem;
    width:100%;
    border-bottom:1px solid #ccc;
    display: flex;
    position: relative;
}
.sousuo input{
    font-size:0.12rem;
    width:2.75rem;
    height:0.28rem;
    line-height: 0.28rem;
    margin:0.08rem auto;
    background: #ececec;
    color:#666;
    border:none;
    display: inline-block;
    border-radius: 0.03rem;
    padding:0 0.35rem;
    cursor: pointer;
   
}
.sousuo .fangdajing{
    height:0.28rem;
    width:0.12rem;
    position: absolute;
    top:0.16rem;
    left:0.25rem;
    background: url(../../../public/img/searchIcon.png) no-repeat -41px -18px;
    background-size: 1.2rem 0.4rem;
}

/*主体*/

.main{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
.main li{
    list-style: none;
    display: block;
    width:1.23rem;
    height:0.8rem;
    border-right:1px solid #f6f6f6;
    border-bottom:1px solid #f6f6f6;
    font-size:0.16rem;
}
.main .br{
    border-right:none;
}
.main li i{
    width:0.36rem;
    height:0.36rem;
    display: block;
    margin:0.1rem auto;
}
.main li span{
    display: block;
    text-align: center;
    color: #333;
    font-size:0.14rem;
}
.main li:nth-of-type(1) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat 0 0;
}
.main li:nth-of-type(2) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat -84px 0px;
}
.main li:nth-of-type(3) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat -165px 1px;
}
.main li:nth-of-type(4) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat 0 -70px;
}
.main li:nth-of-type(5) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat -84px -70px;
}
.main li:nth-of-type(6) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat -165px -70px;
}
.main li:nth-of-type(7) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat 0 -141px;
}
.main li:nth-of-type(8) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat -84px -141px;
}
.main li:nth-of-type(9) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat -165px -141px;
}
.main li:nth-of-type(10) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat 0 -217px;
}
.main li:nth-of-type(11) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat -84px -218px;
}
.main li:nth-of-type(12) i{
    background: url(../../../public/img/selectIcon0314.png) no-repeat -165px -217px;
}





</style>