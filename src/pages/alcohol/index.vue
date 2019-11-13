<template>

    <div class="alcohol">
        <Head/>
        <Scroll ref="yscroll">
        <div class="content">
            <Picture/>
            <Kind/>
            <Shop/>
            <List/>
        </div>
       </Scroll>
        <!-- <Loading/> -->
    </div>
   
</template>

<script>
import Head from "@/components/head"
import Picture from "@/components/picture"
import Kind from "@/components/kind"
import Shop from "@/components/shop"
import List from "@/components/list"
// import Loading from "@lib/loading"
export default {
    name:"Alcohol",
    components:{
        Head,
        Picture,
        Kind,
        Shop,
        List,
        // Loading
    },
    created(){
        document.title = this.$route.meta.title;
        // let data = await shopList(1);
        // console.log(data);
    },
    // mounted(){
    //     this.$refs.yscroll.handlepullingDown();
    //     // this.$refs.yscroll.handlepullingUp();
    // }
    

}
</script>

<style lang="scss">
    .alcohol{
        height: 100%; overflow: auto; width:100%; background: #f5f5f5; padding-bottom:.42rem;
    }
</style>