<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- <MessageBox/> -->
    <Footer v-if="$route.meta.flag"/>
  </div>
</template>


<script>
import Footer from "@common/components/footer"
import messageBox from "./lib/messageBox/index.js";
export default {
  name:"App",
  components:{
    Footer,
    // MessageBox,
  },
  
}
</script>

<style lang="scss">
  
  #app{
    height: 100%; background: #fff;
  }


</style>
