<template>
  <div class="sortbox">
    <!-- 头部 -->
    <Header title="选酒" icon />
    <!-- 搜索 -->
    <div class="sousuo">
      <input type="text" placeholder="硬核11.11豪掷千万补贴" @click="handleclick()"/>
      <div class="fangdajing"></div>
    </div>
    <!-- 主体 -->
    <div class="main">
      <li v-for="(item,index) in arr" :key="index">
        <a :href="item.path">
        <i></i>
        <span>{{item.name}}</span>
        </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
    name:"sort",
    data(){
      return {
        arr:[
          {
            name:"白酒",
            path:"/#/baijiu"

          },
           {
            name:"葡萄酒",
            path:"/#/putaojiu"
          },
          {
            name:"洋酒",
            path:"/#/yangjiu"
          },
          {
            name:"整箱购",
            path:"/#/zhengxianggou"
          },
          {
            name:"老酒",
            path:"/#/laojiu"
          },
          {
            name:"清仓特卖",
            path:"/#/baijiu"
          },
          {
            name:"海外直采",
            path:"/#/putaojiu"
          },
          {
            name:"精美大坛",
            path:"/#/datan"
          },
          {
            name:"红酒整箱",
            path:"/#/zhengxianggou"
          },
          {
            name:"值得买",
            path:"/#/yangjiu"
          },
          {
            name:"销量排行",
            path:"/#/laojiu"
          },
          {
            name:"礼尚往来",
            path:"/#/putaojiu"
          }
        ]
      }
    },
    methods:{
      handleclick(){
        this.$router.push("/search")
      }
    }
};
</script>

<style lanng="scss" scoped>
/* 
  html,body{
      font-size:26.67vw;
      height:100%;
  } */
/*头部*/

/*搜索*/
.sousuo{
    height: 0.4rem;
    width:100%;
    border-bottom:1px solid #ccc;
    display: flex;
    position: relative;
    margin-top:0.4rem;
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
    left:0.6rem;
    background: url(../../../public/img/searchIcon.png) no-repeat -41px -18px;
    background-size: 1.2rem 0.4rem;
}

/*主体*/
.sortbox{
  height:100%;
  background: #fff;
}
.main{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    background: #fff;
    justify-content: space-around;
    height:100%;
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