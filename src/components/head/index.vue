<template>
   
    <div class="head-index">
        <i></i>
            <v-touch tag="div" class="search" @tap="handlesearch()">
                <b></b>
                <span>硬核11.11 壕掷千万补贴</span>
            </v-touch>
            <router-link to="/city" tag="p">
            <van-icon tag="strong" name="arrow-down" />
            {{this.$store.state.city.nm}}
            </router-link>
        </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
    methods:{
        handlesearch(){
            this.$router.push("./search")
        }
    }
}
</script>

<style lang="scss" scoped>
    
/* header */
.head-index{
    height: .4rem;
    width: 100%;
    display: flex;
    background: rgba(255,0,0,.6);
    position: fixed;     
    top: 0;
    z-index: 2;
    justify-content: space-between;
    align-items: center;
    padding: 0 .05rem;
    padding-right: 0;
}
.head-index i{
    width: .57rem;
    height: .27rem;
    background: url(https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png) no-repeat;
    background-size: 2rem .73rem;
    border-radius: 3px;
    background-position: 0rem 0;
}
.head-index p{
    width: .6rem;
    font-size: .13rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
}
.head-index .search{
    width: 2.4rem;
    height: .27rem;
    border-radius: 3px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 .1rem;
}
.head-index .search b{
    background: url(https://mlist.jiuxian.com/mjava_statics/images/search/searchIcon.png) no-repeat;
    background-size: 1.2rem .4rem;
    cursor: pointer;
    width:.12rem;
    height: .12rem;
    display: flex;
    background-position: -.41rem -.18rem;
    margin-right: .2rem;
}
.head-index .search span{
    font-size: .12rem;
    color: #666;
    width: 1.5rem;
}

</style>