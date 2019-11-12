<template>
  <div>
    <div class="search">
      <a href="#"></a>
      <em class="icon"></em>
      <input type="text" placeholder="硬核11.11 豪掷千万补贴" v-model="value" />
      <div class="searchbtn">搜索</div>
    </div>

    <div class="remen">
      <em class="hs-title"></em>
      <span>热门搜索</span>
    </div>

    <div class="box">
      <span>国台</span>
      <span>茅台</span>
      <span>酒鬼酒</span>
      <span>五粮液</span>
      <span>剑南春</span>
      <span>泸州老窖</span>
      <span>汾酒</span>
      <span>洋河</span>
      <span>水井坊</span>
      <span>古井贡</span>
      <span>郎酒</span>
      <span>西风</span>
      <span>董酒</span>
      <span>茉莉花</span>
      <span>奔富</span>
      <span>马爹利</span>
      <span>拉菲</span>
      <span>人头马</span>
    </div>

    <div class="remen">
      <em class="hs-title1"></em>
      <span>热门搜索</span>
    </div>
  </div>
</template>

<script>
import {searchApi} from "@api/baijiu"
export default {
    name:"search",
    data(){
        return {
            value:"",
            list:[]
        }
    },
    watch:{
        async value(newVal){
            let data = await searchApi(newVal,1573569951816);
            console.log(data);
        }
    }
};
</script>

<style>
html,
body {
  font-size: 26.67vw;
  height: 100%;
  overflow-y: hidden;
}
.search {
  width: 100%;
  height: 0.4rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  background: #fafafa;
  position: fixed;
  top: 0;
  left: 0;
}
.search a {
  display: inline-block;
  width: 0.33rem;
  height: 0.4rem;
  background: url(../../../public/img/searchIcon.png) no-repeat -3px 0;
  background-size: 1.2rem 0.4rem;
  cursor: pointer;
}
.search input {
  padding: 0 0.3rem;
  width: 3rem;
  font-size: 0.12rem;
  height: 0.28rem;
  background: #ececec;
  display: inline-block;
  color: #333;
  border-radius: 0.05rem;
  margin-top: 0.06rem;
  line-height: 0.28rem;
  border: none;
  position: relative;
}
.search .icon {
  position: absolute;
  display: inline-block;
  width: 0.12rem;
  height: 0.12rem;
  top: 0.14rem;
  left: 0.43rem;
  background: url(../../../public/img/searchIcon.png) no-repeat -41px -18px;
  background-size: 1.2rem 0.4rem;
  z-index: 2;
}
.search .searchbtn {
  width: 0.54rem;
  height: 0.4rem;
  font-size: 0.14rem;
  line-height: 0.4rem;
  text-align: center;
  color: #666;
}

.remen {
  width: 100%;
  height: 0.24rem;
  padding: 0 0.12rem;
  font-size: 0.15rem;
  color: #252525;
  line-height: 0.24rem;
  margin: 0.6rem 0 0 0;
}
.remen .hs-title {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.08rem;
  background: url(../../../public/img/searchIcon.png) no-repeat -62px 0;
  background-size: 1.2rem 0.4rem;
  display: inline-block;
}
.remen .hs-title1 {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.08rem;
  background: url(../../../public/img/searchIcon.png) no-repeat -84px 0;
  background-size: 1.2rem 0.4rem;
  display: inline-block;
}

.box {
  padding: 0.12rem 0.1rem 0 0.2rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  min-height: 1rem;
}
.box span {
  display: inline-block;
  padding: 0 0.12rem;
  height: 0.23rem;
  line-height: 0.23rem;
  font-size: 0.13rem;
  background: #f4f4f4;
  border-radius: 0.12rem;
  color: #666;
  margin: 0 0.1rem 0.16rem 0;
}
</style>