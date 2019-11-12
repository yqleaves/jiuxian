<template>
     <div class="header">
         <v-touch class="icon-left" tag="div" @tap="handleBack()">
              <i v-if="icon">&lt;</i>
         </v-touch>
       
        <h2>{{title}}</h2>
        <span class="navBar">
            <b></b>
            <b></b>
            <b></b>
        </span>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"分类"
        },
        icon:{
            type:Boolean
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss">
    .header{
    padding: 0 .08rem;
    height: .4rem;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    justify-content: space-around;
    align-items: center;
    background: #de4943;
    z-index:10;
}
.header h2{
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .16rem;
    color:#fff;
}
.header .navBar{
    width:.3rem;
    height: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header .navBar b{
    /* display: block; */
    width: .2rem;
    height: .02rem;
    margin-bottom: .04rem;
    overflow: hidden;
    background-color: #fff;
}
.header i{
    width: .3rem;
    font-size: .2rem;
    color:#fff;
    display: flex;
    justify-content: center;
}

</style>