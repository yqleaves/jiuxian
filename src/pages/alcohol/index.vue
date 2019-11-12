<template>

    <div class="alcohol">
        <Scroll ref="yscroll">
        <div class="content">
            <Picture/>
            <Kind/>
            <Shop/>
            <List/>
        </div>
       </Scroll>

    </div>
   
</template>

<script>
import Picture from "@/components/picture"
import Kind from "@/components/kind"
import Shop from "@/components/shop"
import List from "@/components/list"

export default {
    name:"Alcohol",
    components:{
        Picture,
        Kind,
        Shop,
        List
    },
    created(){
        document.title = this.$route.meta.title;
        // let data = await shopList(1);
        // console.log(data);
    },
    mounted(){
        this.$refs.yscroll.handlepullingDown();
        // this.$refs.yscroll.handlepullingUp();
    }
    
    


}
</script>

<style lang="scss">
    .alcohol{
        height: 100%; overflow: auto; width:100%; background: #fff; padding-bottom:.42rem;
    }
</style>