<template>
     <div class="kind-box">
         <Scroll ref="shopScroll">
         <div class="kind">
             
            <ul class="kind-box">
                <li v-for="(item,index) in shopList" :key="index">
                    <router-link :to="'/detail/?id='+item.actTypeId+'&name='+item.proName+
                    '&img='+item.proImg+'&price='+item.proPrice" href="">
                        <img :src="item.proImg" alt="">
                        <span class="name">{{item.proName}}</span>
                        <span class="price">￥{{item.proPrice.toFixed(2)}}</span>
                        <span class="o-price">￥{{item.jxPrice.toFixed(2)}}</span>
                    </router-link>
                </li>
            </ul>
           
            
        </div>
        </Scroll>

         <!-- pubBanner -->
        <div class="pubBanner" v-for="(item,index) in image" :key="index">
            <a href="">
                <img :src="item.img" alt="">
            </a>
        </div>
    </div>
</template>

<script>
import {recommendListApi} from "@api/alcohol";
import {shopListApi} from "@api/alcohol";
export default {
    name:"Shop",
    data(){
        return {
            shopList:[],
            image:[
                {
                    img:"https://img10.jiuxian.com/bill/2019/0821/fb176ffae5b941a2aa0a38e88607a278.jpg"
                },
                {
                    img:"https://img09.jiuxian.com/bill/2019/1029/575a815f638540bcaa911d7380964897.jpg"
                },
                {
                    img:"https://img07.jiuxian.com/bill/2019/1029/af5c9a7ab7c24de0bf43979199ad6858.jpg"
                },
                {
                    img:"https://img08.jiuxian.com/bill/2019/1028/541b112ff30b4114a143ff74774a8aea.jpg"
                },
                {
                    img:"https://img08.jiuxian.com/bill/2019/1029/54b4b447e4da4fd8aa425c0e11790984.jpg"
                },
                {
                    img:"https://img07.jiuxian.com/bill/2019/1029/9a254ef163784bd79bb9ef13818179d8.jpg"
                }
            ]
        }
    },
    created(){
        this.handleGetshopList(1);
        //  let data = await shopListApi(1);
        // console.log(data);
    },
    methods:{
        async handleGetshopList(tabnum){
            let data = await shopListApi(tabnum);
            console.log(data)
            this.shopList = data.killProList 
            
            //  sessionStorage.setItem("this.shopList",JSON.stringify(data.killProList));

            //  if(sessionStorage.getItem(this.shopList)){
            //      this.shopList = JSON.parse(sessionStorage.getItem(this.shopList))
            //  }else{
            //      this.shopList = data.killProList;
            //  }
        }
    },
    
}
</script>

<style lang="scss">
/* 横向滚动 */
.kind-box{
    width: 100%;
    overflow-x:inherit; 
}
.kind{
    height: 1.6rem;
    background: #fff;
    position: relative;
    overflow: hidden;
    width: 10rem;
    padding: 5px 0;
    padding-left: .1rem;
}
.kind .kind-box{
    // overflow-x: auto;
    width: 10rem;
    height: 100%;
    display: flex;
}
.kind .kind-box li{
    width: 1rem;
    height: 100%;
    background: #fff;
    margin-right: .1rem;
}
.kind .kind-box li a{
    width: 100%;
    padding: 0 2px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.kind .kind-box li a img{
    width: .96rem;
    height: .96rem;
}
.kind .kind-box li a .name{
    width: 100%;
    height: .32rem;
    color:#252525;
    font-size: .12rem;
    font-family: 华文细黑;
    overflow: hidden;
}
.kind .kind-box li a .price,.kind .kind-box li a .o-price{
    height: .135rem;
    margin-top: .1rem;
    color: #fc5a5a;
    font-size: .14rem;
    text-align: left;
    font-family: 华文细黑;
}
.kind .kind-box li a .o-price{
    margin:0;
    color: #999;
    font-size: .12rem;
    text-decoration-line: line-through;
}

/* pubBanner */
.pubBanner{
    height: .93rem;
    width: 100%;
    display: flex;
}
.pubBanner img{
    width: 100%;
    height: 100%;
}
</style>