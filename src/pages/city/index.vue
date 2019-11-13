<template>
    <div class="city">
        <!-- <van-index-bar :index-list="indexList">
            <van-index-anchor index="1">标题1</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="2">标题2</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            ...
        </van-index-bar> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant';

Vue.use(IndexBar).use(IndexAnchor);
export default {
    name:'City',
    created(){
        this.$store.dispatch("city/handleAsyncGetCity")
    },
    data() {
        return {
        indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
  }
</script>

<style lang="scss">
    
</style>