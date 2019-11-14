<template>
    <div class="detail">
        <Header title="详情" icon/>
        <div class="content">
             <Detailmain :img="img" :name="name" :price="price"/>
             <Detailbottom/>
             <Detailfooter/>
        </div>
       
        
    </div>
</template>

<script>
import Detailmain from "@/components/detailmain"
import Detailbottom from "@/components/detailbottom"
import Detailfooter from "@/components/detailfooter"
export default {
    name: "Detail",
    // props:["brandId","pname","imgPath"],
    components:{
        Detailmain,
        Detailbottom,
        Detailfooter
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
    }
    
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
</style>
