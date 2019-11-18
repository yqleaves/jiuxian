<template>
    <div class="main">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src="img" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://img07.jiuxian.com/2019/1104/304faebb126141ffb4d4edf809c41d625.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://img10.jiuxian.com/2019/1104/3ec42671155f41b69011caf30a17c7ee5.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://img10.jiuxian.com/2019/1104/4437774fc7854f0aaacfab8285a0bbb35.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://img08.jiuxian.com/2019/1104/b59021abd6074b13b0ca89c47a37b84b5.jpg" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        </div>

        <!-- info -->
        <div class="info">
            <div class="name">
                <img src="https://m.jiuxian.com/mjava_statics/images/goods/jxzy.png" alt="">
                <span>{{name}}</span>
            </div>
            <div class="price">
                <span>￥{{price}}.00</span>
                <strong>酒仙价:156.00</strong>
            </div>
            <div class="comment">
                <img src="https://m.jiuxian.com/mjava_statics/images/goods/clubImg.png" alt="">
                <span>会员下单再享98折,可省1.98元</span>
            </div>
            <div class="limit">
                <b>限时抢购</b>
            </div>
        </div>

        <!-- wrap -->
        <div class="wrap">
            <img src="https://m.jiuxian.com/mjava_statics/images/goods/jintie.png" alt="">
            <span>每满399减50,领取津贴全平台可用</span>
            <div class="receive">
                <a href="#">点击领取</a>
                <i>&gt;</i>
            </div>
        </div>

        <!-- club -->
        <div class="club">
            <img src="https://m.jiuxian.com/mjava_statics/images/club2.png" alt="">
            <span>购买CLUB会员享受更多优惠</span>
        </div>
        <div class="club">
            <b>金币</b>
            <span>赠送<i>49</i>个金币</span>
        </div>

        <!-- norms -->
        <div class="norms">
            <div class="title">规格</div>
            <div class="model">
                <div>
                    54°贵州湄窖500ml
                </div>
                <div class="active">
                    54°贵州湄窖500ml*2
                </div>
                <div>
                    54°贵州湄窖500ml*6
                </div>
            </div>
        </div>

        <!-- box -->
        <div class="box">
            <div class="count">
                <span>数量</span>
                <div class="count-btn">
                    <v-touch tag="i" class="sub" @tap="handleReduce()">-</v-touch>
                    <!-- <input type="text" value="1"> -->
                    <div class="input" ref="number">{{n}}</div>
                    <v-touch tag="i" class="push" @tap="handleAdd()">+</v-touch>
                </div>
            </div>
            <div class="local">
                <span>送至</span>
                <div class="city" @tap="handleChoose()">
                    <b>北京</b>
                    <b>北京市</b>
                    <b>东城区</b>
                </div>
                <strong>&gt;</strong>
            </div>
            <div class="addTip">有货，预计1-2天可到达</div>
            <div class="count tips">
                <span>提示</span>
                <div class="hang">
                    此商品无原厂手提袋
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Swiper from "swiper"
import {mapState} from "vuex"
export default {
   props:{
       img:{
           type: String,
       },
       name:{
           type: String,
       },
       price:{
           type: String, 
       }
   },
    data(){
        return{ 
            cartList:[],
            id:"",
            n:1
        }
    },
    
    mounted(){
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            direction: 'horizontal',
            fadeEffect: {
                crossFade: true,
            },
            parallax: "true",//产生视觉差
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        this.$emit("handle",this.n);
    },
    methods:{
        handleReduce(){
            if(this.n <= 1){
                this.n = 1
                this.$emit("handle",this.n);
            }else{
                this.n--
                this.$emit("handle",this.n);
            }
        },
        handleAdd(){
            this.n++
            this.$emit("handle",this.n);
        },
    

    },
    
  
   
}
</script>

<style lang="scss" scoped>
    
/* main */
.main{
    width: 100%;
    overflow: hidden;
    // height: 100%;
    // padding-top: .4rem;
    // overflow: auto;
    // padding-bottom: .45rem;
}
.main .swiper-container{
    height: 100%;
    background: #fff;
}
.main .swiper-container .swiper-wrapper{
    width: 100%;
    height: 3.2rem;
    display: flex;
    background: #fff;
}
.main .swiper-container .swiper-wrapper .swiper-slider{
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.main .swiper-container img{
    width: 3.2rem;
    height: 3.2rem;
    margin-left: .3rem;
    margin-right: .3rem;
}

/* info */
.info{
    width: 100%;
    height: 1.5rem;
    padding: .1rem;
    background: #fff;
    margin-bottom: .08rem;
}
.info .name{
    width: 100%;
    height: .464rem;
    margin-bottom: .08rem;
    display: flex;
    align-items: flex-start;
}
.info .name img{
    width: .38rem;
    height: .13rem;
    margin-right: .05rem;
}
.info .name span{
    color: #252525;
    font-size: .15rem;
}
.info .price{
    width: 100%;
    height: .29rem;
    padding-bottom: .05rem;
    display: flex;
    align-items: center;
}
.info .price span{
    color: #fc5a5a;
    font-size: .19rem;
}
.info .price strong{
    font-size: .12rem;
    color: #999;
    padding-left: .08rem;
    text-decoration: line-through;
}

.info .comment{
    width: 100%;
    height: .2rem;
    display: flex;
    align-items: center;
    margin-bottom: .05rem;
}
.info .comment img{
    width: .29rem;
    height: .11rem;
    margin-right: .05rem;
}
.info .comment span{
    color: #666;
    font-size: .12rem;
}
.info .limit{
    height: .16rem;
    width: 100%;
    /* margin-bottom: .05rem; */
    display: flex;
}
.info .limit b{
    width: .52rem;
    height: .16rem;
    background: #ffa855;
    font-size: .11rem;
    color: #fff;
    border-radius: 3px;
    padding: 0 .04rem;
}

.wrap{
    width: 100%;
    height: .42rem;
    margin-bottom: .08rem;
    background: #FFD4B5;
    display: flex;
    align-items: center;
    padding: .12rem .1rem;
    padding-left: .6rem;
    position: relative;
    justify-content: space-between;
}
.wrap img{ 
    width:.57rem;
    height: .37rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
}
.wrap span{
    color: #FC5A5A;
    font-size: .14rem;
}
.wrap .receive{
    width: .62rem;
    /* height: 100%; */
    display: flex;
    justify-content: space-between;
}
.wrap .receive a{
    color: #FC5A5A;
    font-size: .12rem;
    width: .52rem;
    text-decoration: underline;
}
.wrap .receive i{
    color: #666;
    font-size: .12rem;
}

/* club */
.club{
    width: 100%;
    height: .40rem;
    margin-bottom: .08rem;
    padding: .1rem .1rem 0;
    background: #fff;
    display: flex;
}
.club img{
    width: .45rem;
    height: .17rem;
    margin-right: .08rem
}
.club span{
    color: #252525;
    font-size: .14rem;
}
.club span i {
    color:#fc6a6a;
}
.club b{
    width: .28rem;
    height:.2rem;
    font-size: .14rem;
    margin-right: .25rem;
}

/* norms */
.norms{ 
    width: 100%;
    height: 1.37rem;
    padding: .22rem .2rem .05rem;
    background: #fff;
}
.norms .title{
    width: 100%;
    height: .2rem;
    color:#666;
    font-size: .14rem;
}
.norms .model{
    width: 100%;
    height: .72rem;
    margin-top: .1rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
}
.norms .model div{
    padding: 0 .14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: .24rem;
    border-radius: .13rem;
    margin: 0 .1rem .1rem 0;
    background: #f5f5f5;
    color: #666;
    font-size: .13rem;
}
.norms .model .active{
    border: 1px solid #fc5a5a;
    background: #ffeeee;
}

/* box */
.box{
    height: 1.716rem;
    width: 100%;
    display: flex;
    padding: .1rem .1rem .05rem;
    margin-top:.1rem;
    background: #fff;
    flex-direction: column;
}
.box .count{
    height: .3rem;
    width: 100%;
    margin-bottom: .05rem;
    color: #666;
    display: flex;
}
.box .count span{
    width:.28rem;
    color:#666;
    font-size: .14rem;
    display: flex;
    margin-right: .26rem;
}
.box .count .count-btn{
    width: .75rem;
    height: .22rem;
    border: 1px solid #e8e8e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box .count .count-btn .input{
    width: .2rem;
    color:#666;
    height: 100%;
    display: flex;
    font-size: .12rem;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.box .count .count-btn i{
    width: .21rem;
    height: .22rem;
    display: flex;
    font-size: .12rem;
    justify-content: center;
    line-height: .22rem;
    border-right: 1px solid #e8e8e8;
}
.box .count .count-btn .push{
    border-left: 1px solid #e8e8e8;
}

.box .local{
    width: 100%;
    height: .34rem;
    padding-top:.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box .local span{
    width: .28rem;
    height:.24rem;
    color: #666;
    display: flex;
    font-size: .14rem;
}
.box .local .city{
    margin-left: .15rem;
    display: flex;
    width: 3rem;
    height:100%;
    justify-content: flex-start;
}
.box .local .city b{
    padding-right: .05rem;
    font-size: .14rem;
    color: #252525;
    display: flex;
}
.box .local strong{
    width:.1rem;
    height:.13rem;
    font-size: .12rem;
}
.box .addTip{
    /* width: 100%; */
    height: .276rem;
    padding-bottom: .1rem;
    margin-left:.42rem;
    display: flex;
    color: #fc5a5a;
    font-size: .12rem;
}
.box .tips .hang{
    height: .2rem;
    display: flex;
    font-size: .14rem;
    color:#252525;
    margin-bottom: .05rem;
}

</style>