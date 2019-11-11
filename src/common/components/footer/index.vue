<template>
    <div class="footer">
        <router-link class="footBar" v-for="item in footerBar" :key="item.id"
        :to="item.path" tag="div">
            <img :src=item.img alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Footer",
    data(){
        return{
             footerBar:[
                {
                    id:0,
                    img:"https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png",
                    path:"/alcohol"
                },
                {
                    id:1,
                    img:"https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png",
                    path:"/sort"
                },
                {
                    id:2,
                    img:"https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png",
                    path:"/clear"
                },
                {
                    id:3,
                    img:"https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png",
                    path:"/cart"
                },
                {
                    id:4,
                    img:"https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height:.42rem;
    background: #f1f1f1;
    border-top: 1px sollid #ccc;
    display: flex;
    justify-content: space-between;
}
.footer .footBar{
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
}
.footer .footBar img{
    width: .42rem;
    height: .34rem;
}
</style>