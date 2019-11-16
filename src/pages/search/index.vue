<template>
  <div>
    <div class="search">
      <v-touch tag="a" href="#" @tap="handleback()"></v-touch>
      <em class="icon" ></em>
      <input type="text" placeholder="硬核11.11 豪掷千万补贴" v-model="value" />
      <div class="searchbtn">搜索</div>
    </div>
    <div class="box2">
      <div class="box1" v-for="(item,index) in str" :key="index">{{item}}</div>
    </div>

    <div class="remen">
      <em class="hs-title"></em>
      <span>热门搜索</span>
    </div>

    <div class="boxkind">
      <span v-for="(items,index1) in arrs" :key="index1">{{items}}</span>
    </div>

    <div class="remen">
      <em class="hs-title1"></em>
      <span>热门搜索</span>
    </div>
  </div>
</template>

<script>
import { searchApi } from "@api/baijiu";
import {throttle} from "@utils/jieliu";
//var throttleCallback = throttle()
export default {
  name: "search",
  data() {
    return {
      value: "",
      //list: [],
      str: [],
      arrs:["国台","茅台","酒鬼酒","五粮液","剑南春","泸州老窖",
              "汾酒","洋河","水井坊","郎酒","西风","董酒","茉莉花","奔富","马爹利","拉菲","人头马"
            ]
    };
  },
  
  watch: {
     async value(newVal) {
      throttle(async ()=>{
          let data = await searchApi(newVal);
          for (var i = 0; i < data.data.length; i++) {
          this.str.push(data.data[i].Keyword);
          }
      },300)
      //this.list = data.data ? data.data[0 - 99] : [];
      
      
    }
  },
  methods:{
    handleback() {
      this.$router.back();
    },
  }
};
</script>

<style scoped>
html,
body {
  font-size: 26.67vw;
  height: 100%;
  overflow-y: auto;
}
.box1 {
  height: auto;
  font-size: 0.16rem;
  margin-left: 0.2rem;
  line-height: 0.4rem;
  border-bottom: 1px solid #e5e5e5;
  color: #333;
  padding: 0.1rem 0;
}
.box2 {
  margin-top: 0.4rem;
  width: 100%;
  height: 100%;
}

.searchs {
  width: 100%;
  height: 0.4rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  background: #fafafa;
  position: fixed;
  top: 0;
  left: 0;
}
.searchs a {
  display: inline-block;
  width: 0.33rem;
  height: 0.4rem;
  background: url(../../../public/img/searchIcon.png) no-repeat -3px 0;
  background-size: 1.2rem 0.4rem;
  cursor: pointer;
}
.searchs input {
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
.searchs .icon {
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
.searchs .searchbtn {
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

.boxkind {
  padding: 0.12rem 0.1rem 0 0.2rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  min-height: 1rem;
}
.boxkind span {
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