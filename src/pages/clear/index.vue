<template>
    <div class="clear-box">
        <Header title="裸价清仓" icon/>
        <div class="list">
            <div class="clear">
            <div class="banner">
                <img src="https://img08.jiuxian.com/bill/2018/1218/3e88122c37bc49dc96c3b120efaf4db3.jpg" alt="">
            </div>
            
            <div class="link">
                <img src="https://img08.jiuxian.com/bill/2018/1010/d4ace760e1f74ef589d979c8db9475de.jpg" alt="">
            </div>
        </div>
        <CleanList/>
        </div>
        
    </div>
</template>

<script>
// import Header from "@/components/header"
import CleanList from "@/components/cleanList"
export default {
    name:"clear",
    components:{
        // Header,
        CleanList
    },
    // data(){
    //     return{
    //         message: "裸价清仓"
    //     }
    // },
    created(){
        document.title = this.$route.meta.title;
    }
}
</script>

<style lang="scss">
    .clear-box{
        height: 100%; overflow: auto;
    }
    .list{
        height: 100%; overflow: auto; width: 100%; padding-top: .4rem;
    }
    .clear{
         overflow: auto; width:100%; background: #316def;
    }
    .banner{
        width: 100%; height: 2.12rem; display: flex;
    }
    .banner img{
        width: 100%; height: 100%;
    }
    .link{
        width:100%; height: auto; padding: .1rem 0;
    }
    .link img{
        width:100%; height:100%;
    }
</style>