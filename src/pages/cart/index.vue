<template>
    <div class="cart">
        <Header title="购物车" icon/>
        <div class="topTib">
        <i></i>自营商品实付满100元免运费，偏远地区满500免运费
    </div>

    <div class="content">
        <div class="cartTitle">
            <!-- <i></i> -->
            <van-checkbox v-model="checked" checked-color="#fd5a5b"
            @change="handleChange()"></van-checkbox>
            <img src="https://mcart.jiuxian.com/statics/images/jx.png" alt="">
            酒店自营
        </div>

        <div class="cartList" v-for="(item,index) in goodsList" :key="index">
            <div class="item" >
                <div class="left">
                    <van-checkbox v-model="checked"  name="index" checked-color="#fd5a5b"></van-checkbox>
                    <img :src="item.img" alt="">
                </div>
                
                <div class="info">
                    <span class="name">{{item.name}}</span>
                    <p class="price">
                        <span>￥{{item.price}}.00</span>
                        <strong>掌上秒拍</strong>
                    </p>
                    <div class="cartBtn">
                        <div class="button">
                            <span class="reduce" >-</span>
                            <div class="input">{{item.num}}</div>
                            <span class="add" >+</span>
                   </div>
                        <div class="delete">
                            | <span>删除</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       
    </div>
    <!-- footer - cart bottom-->
    <div class="cartBtm">
        <div class="check">
            <van-checkbox v-model="checked" checked-color="#fd5a5b"></van-checkbox>
        </div>
        <div class="total">
            <p>
                
                <span>合计:</span><em>￥ 
                    <!-- {{countPrice.sPrice}} -->
                    </em>
            </p>
            <p>
                <strong>优惠:</strong><i>￥0.00</i>
            </p>
        </div>
        <div class="go-buy">去结算(<i>
            <!-- {{countPrice.sCount}} -->
            </i>)</div>
       
    </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);

export default {
    name:"Cart",
    components:{
        // Header,
    },
    
    data() {
        return {
            checked: true,
        };
    },
    created(){
        this.$store.state.det.goodsList = JSON.parse(localStorage.getItem("cartlist"));
        // console.log( this.$store.state.shopList)
        // this.$store.commit("cart/handleGetCart",JSON.parse(localStorage.getItem("cartlist")))  
    },
   
    computed:{
       ...mapState({
           goodsList:state=>state.det.goodsList,
       }),
       ...mapGetters({
        //    countPrice:"countPrice"
       })
    },
    methods:{
        ...mapMutations({
            handleChange:"handleChange"
        })
    }
    
   
}
</script>

<style lang="scss" scoped>
.cart{
    overflow: auto;
    height: 100%;
}
    /* topTib */
.topTib{
    height: .216rem;
    background: #fff4e2;
    border-top: 1px solid #ffe9c6;
    border-bottom: 1px solid #ffe9c6;
    color: #ff3333;
    padding-left: .1rem;
    font-size: .12rem; 
    display: flex;
    align-items: center;
    width:100%;
    position: fixed;
    top: .4rem;
    left:0;
}
.topTib i{
    display: flex;
    align-items: center;
    width: .11rem;
    height: .21rem;
    margin-right: .05rem;
    background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
    background-size: 1.5rem 1.5rem;
    background-position: -.4rem .02rem;
}
.content{
    height:100%;
    overflow: auto;
    width: 100%;
    padding-top: .7rem;
    padding-bottom: .51rem;
}
.content .cartTitle{
    height: .45rem;
    background: #fff;
    padding-left: .2rem;
    display: flex;
    align-items: center;
    font-size: .14rem;
    border-top: 1px solid #f2f2f2;
}
.content .cartTitle img{
    width: .15rem;
    height: .15rem;
    margin-right: .1rem;
    margin-left: .1rem;
}

.content .cartList{
    width: 100%;
    height: 1rem;
    padding:.1rem 0;
    background: #fff;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
}
.content .cartList .item{
    width: 100%;
    height: 100%;
    padding-right: .1rem;
    padding-left: .2rem;
    display: flex;
    justify-content: flex-start;
    .left{
        display: flex;
    }
}
.content .cartList .item img{
    width: .8rem;
    height: .8rem;
    margin-right: .1rem;
    border: 1px solid #999;
    margin-left: .05rem;
}
.content .cartList .item .info{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.content .cartList .item .info .name{
    width: 100%;
    height: .36rem;
    color: #333;
    font-size: .13rem;
    overflow: hidden;
    margin-bottom: .03rem;
}
.content .cartList .item .info .price{
    height: .23rem;
    padding: .03rem 0;
    display: flex;
}
.content .cartList .item .info .price span{
    font-size: .12rem;
    color: #ff0000;
    margin-right: .05rem;
}
.content .cartList .item .info .price strong{
    background: #ff2266;
    color: #fff;
    font-size: .12rem;
    height: .16rem;
    width: .54rem;
    text-align: center;
    border-radius: 3px;
}
.content .cartList .item .info .cartBtn{
    width: 100%;
    height: .22rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content .cartList .item .info .cartBtn .button{
    width: .75rem;
    height: .2rem;
    border: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
}
.content .cartList .item .info .cartBtn .button span{
    width:.21rem;
    height: .2rem;
    color: #666;
    text-align: center;
    line-height: .2rem;
    font-size: .16rem;
    display: flex;
    justify-content: center;
}
.content .cartList .item .info .cartBtn .button .input{
    width: .4rem;
    font-size: .12rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content .cartList .item .info .cartBtn .button .add{
    border-left: 1px solid #d0d0d0;
}
.content .cartList .item .info .cartBtn .button .reduce{
    border-right: 1px solid #d0d0d0;
}
.content .cartList .item .info .cartBtn .delete{
    width: .46rem;
    font-size: .12rem;
    height: 100%;
}
.content .cartList .item .info .cartBtn .delete span{
    font-size: .12rem;
    margin-left: .05rem;
    color:#777;
}


/* cartBtm */
.cartBtm{
    width: 100%;
    height: .51rem;
    background: #fff;
    position: fixed;
    border-top: 1px solid #d9d9d9;
    left:0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cartBtm .check{
    width:.64rem;
    height:100%;
    // padding-left:.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cartBtm .total{
    display: flex;
    height:.51rem;
    width: 2rem;
    /* background: #ccc; */
    flex-direction: column;
    align-items: center;
}
.cartBtm .total p{
    width: 100%;
    height:50%;
    display: flex;
}
.cartBtm .total p span,.cartBtm .total p strong{
    width: .5rem;
    height: 100%;
    color:#252525;
    font-size: .16rem;
}
.cartBtm .total p em{
    font-size: .16rem;
    color:#ff3333;
}
.cartBtm .total p strong,.cartBtm .total p i{
    font-size: .14rem;
    color: #999;
}
.cartBtm .go-buy{
    width: .98rem;
    height: 100%;
    display: flex;
    background: #fd5a5b;
    color: #fff;
    justify-content: center;
    line-height: .51rem;
    font-size: .16rem;
}
</style>