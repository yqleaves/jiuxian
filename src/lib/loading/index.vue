<template>
    <div class="loading-container">
       <!-- <div class="loader" >
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div> -->
        <van-loading type="spinner" />
    </div>
</template>

<script>
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);
export default {};
</script>

<style lang="scss">
.loading-container{
    background: rgba(0,0,0,.4);
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
}
body {
  margin: 0;
}
// .loader {
//   position: absolute;
//   top: 50%;
//   left: 40%;
//   margin-left: 10%;
//   transform: translate3d(-50%, -50%, 0);
// }
// .dot {
//   width: 24px;
//   height: 24px;
//   background: #3ac;
//   border-radius: 100%;
//   display: inline-block;
//   animation: slide 1s infinite;
// }
// .dot:nth-child(1) {
//   animation-delay: 0.1s;
//   background: #32aacc;
// }
// .dot:nth-child(2) {
//   animation-delay: 0.2s;
//   background: #64aacc;
// }
// .dot:nth-child(3) {
//   animation-delay: 0.3s;
//   background: #96aacc;
// }
// .dot:nth-child(4) {
//   animation-delay: 0.4s;
//   background: #c8aacc;
// }
// .dot:nth-child(5) {
//   animation-delay: 0.5s;
//   background: #faaacc;
// }
// @-moz-keyframes slide {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.3;
//     transform: scale(2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// @-webkit-keyframes slide {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.3;
//     transform: scale(2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// @-o-keyframes slide {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.3;
//     transform: scale(2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// @keyframes slide {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.3;
//     transform: scale(2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
</style>