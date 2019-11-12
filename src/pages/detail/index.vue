<template>
    <div class="detail">
        <Header title="详情" icon/>
        <h2>{{name}}</h2>
        <img :src="img" alt="">
    </div>
</template>

<script>
export default {
    name: "Detail",
    // props:["brandId","pname","imgPath"],
    created(){
        let {id,img,name} = this.$route.query;
        this.img = img
        this.name = name;
        this.id=id;
    },
    data(){
        return{
            id:"",
            img:"",
            name:""
        }
    }
    
}
</script>

<style lang="scss">
    
</style>
