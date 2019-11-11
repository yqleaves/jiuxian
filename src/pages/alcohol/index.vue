<template>
    <div class="alcohol">
        <Picture/>
        <Kind/>
        <Shop/>
        <List/>
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
    }


}
</script>

<style lang="scss">
    .alcohol{
        height: 100%; overflow: auto; width:100%; background: #fff; padding-bottom:.42rem;
    }
</style>