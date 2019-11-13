<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <Footer v-if="$route.meta.flag"/>
  </div>
</template>


<script>
import Footer from "@common/components/footer"
export default {
  name:"App",
  components:{
    Footer,
  }
}
</script>

<style lang="scss">
  $color: #fff;
  #app{
    background: $color;
    height: 100%;
  }


</style>
