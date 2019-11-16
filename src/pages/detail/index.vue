<template>
    <div class="detail">
        <Header title="详情" icon/>
        <div class="content">
             <Detailmain :img="img" :name="name" :price="price"/>
             <Detailbottom/>
             <!-- footer -->
            <div class="footer">
                <ul>
                    <li>
                        <i class="icon"></i>
                    </li>
                    <li>
                        <i class="icon2"></i>
                    </li>
                    <router-link tag="li" to="/cart">
                        <i class="icon3"></i>
                    </router-link>
                </ul>
                <a class="addCart" @click="handleAddCart()">加入购物车</a>
                <a class="buy">立即购买</a>
            </div>
             <!-- <Detailfooter/> -->
        </div>
       
        
    </div>
</template>

<script>
import Detailmain from "@/components/detailmain"
import Detailbottom from "@/components/detailbottom"
// import Detailfooter from "@/components/detailfooter"
import Vue from 'vue';
import { Toast } from 'vant';
import {mapState} from "vuex"
Vue.use(Toast);
export default {
    name: "Detail",
    // props:["brandId","pname","imgPath"],
    components:{
        Detailmain,
        Detailbottom,
        // Detailfooter
    },
    created(){
        let {id,img,name,price} = this.$route.query;
        this.img = img
        this.name = name;
        this.id=id;
        this.price = price
    },
    data(){
        return{
            id:"",
            img:"",
            name:"",
            price:"",
        }
    },
    
     methods:{
         handleAddCart(){
             Toast('加入购物车成功!');
             this.$store.dispatch("det/handleStorage",{
                img: this.$route.query.img,
                id: this.$route.query.id,
                name:this.$route.query.name,
                price:this.$route.query.price,
                flag: true,
                num:this.$store.state.det.num
            })
         },
        
     },
    
    
    
}
</script>

<style lang="scss">
    .detail{
        height: 100%;
        background: #f5f5f5;
    }
    .content{
        padding-top: .4rem;
        height: 100%;
        overflow: auto;
        width:100%;
        padding-bottom: .45rem;
    }
     /* footer */
.footer{
    height: .45rem;
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
}
.footer a{
    width: .94rem;
    height:100%;
    background: #fc5a5a;
    color: #fff;
    font-size: .14rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer .buy{
    background: #3c3f51;
}
.footer ul{
    width: 1.876rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}
.footer ul li{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.footer i{
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/zxkf.png) no-repeat;
    background-size: 41px 41px;
    width: .41rem;
    height: .41rem;
}
.footer .icon3{
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/bottom06.png) no-repeat;
    background-size: 41px 41px;
}
.footer .icon2{
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/bottom05.png) no-repeat;
    background-size: 41px 41px;
}
</style>
