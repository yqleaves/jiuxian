<template>
  <div id="app">
    <router-view></router-view>
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
