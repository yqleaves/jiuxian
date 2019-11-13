<template>
    <div>
        <!-- 图片-分类 -->
        <div class="img-box">
            <img src="https://img06.jiuxian.com/bill/2019/1028/944166396b084d3092bb07bc245ecea1.jpg" alt="">
            <img src="https://img08.jiuxian.com/bill/2019/1028/2cf625e984744131a76554a2599967b4.jpg" alt="">
            <img src="https://img06.jiuxian.com/bill/2019/1028/844bd58f910a4bf49b26da280d6a29ef.jpg" alt="">
            <img src="https://img08.jiuxian.com/bill/2019/1028/30333095dee1471dadef2f24e5f8478c.jpg" alt="">
            <img src="https://img08.jiuxian.com/bill/2019/1028/1adaf3453038487c841e0d9b6d4a8f1f.jpg" alt="">
            <img src="https://img07.jiuxian.com/bill/2019/1104/4e4582f5f44e4f33bd4a3ded023f6924.jpg" alt="">
            <img src="https://img10.jiuxian.com/bill/2019/1028/d35c2c43dbb64d9e871834663885bc20.jpg" alt="">
            <img src="https://img10.jiuxian.com/bill/2019/1028/407bc61118014dc281e285350dd65016.jpg" alt="">
            <img src="https://img10.jiuxian.com/bill/2019/1028/ff6b5545c1234fedb544b7647a87f008.jpg" alt="">
            <img src="https://img06.jiuxian.com/bill/2019/1028/f09cccdfab8843a394bd98533a0779b4.jpg" alt="">
        </div>

        <!-- 柳岩 -->
        <img class="yinghe" src="https://img08.jiuxian.com/bill/2019/1028/e7bbcbb19ef6483f986fc94c4b304aea.jpg" alt="">
        <div class="img">
            <img src="https://img08.jiuxian.com/bill/2019/1028/b95b3584a97f4f43afb4eb0055a866b1.jpg" alt="">
            <img src="https://img08.jiuxian.com/bill/2019/1028/7395ee3c888d4d9688e7c08cb2d90b10.jpg" alt="">
        </div>

        <!-- 酒仙头条 -->
        <div class="headline">
            <div class="left">
                <img src="https://img07.jiuxian.com/bill/2018/0703/23e12867518b4a779bd6530e694e817f.jpg" alt="">
            </div>

            <div class="swiper-container newList swiper-container-vertical" id="newList">
                <div class="swiper-wrapper">
                    <li class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="3"><a
                            href="https://m.jiuxian.com/mobile/2019/2019GT/index.html">国台限时特惠 买一送一</a></li>
                    <li class="swiper-slide" data-swiper-slide-index="0"><a
                            href="https://shop.jiuxian.com/show/wap/act/viewShopActivity.htm?viewType=1&amp;actId=3852&amp;t=1568166081123">2元拼1499茅台飞天中奖名单</a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="1"><a
                            href="https://m.jiuxian.com/m_v1/dynamic/hdgz/151895">温馨提示 谨防上当受骗 造成财产损失</a></li>
                    <li class="swiper-slide" data-swiper-slide-index="2"><a
                            href="https://shop.jiuxian.com/show/wap/act/viewShopActivity.htm?viewType=2&amp;actId=3820">爆品腰斩日
                            限时24小时</a></li>
                    <li class="swiper-slide swiper-slide-prev" data-swiper-slide-index="3"><a
                            href="https://m.jiuxian.com/mobile/2019/2019GT/index.html">国台限时特惠 买一送一</a></li>
                    <li class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0"><a
                            href="https://shop.jiuxian.com/show/wap/act/viewShopActivity.htm?viewType=1&amp;actId=3852&amp;t=1568166081123">2元拼1499茅台飞天中奖名单</a>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {

    mounted(){
         var swiper = new Swiper('.newList', {
                direction: 'vertical',
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })
        }
}
</script>

<style lang="scss">
    .img-box{
    height: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.img-box img{
    display: flex;
    width: 20%;
}
.img{
    height: 1.05rem;
    display: flex;
    justify-content: center;
}
.img img{
    width: 50%;
    height: 100%;
}

.yinghe{
    width: 100%;
}

.headline{
    background: #fff;
    height: .36rem;
    padding: .08rem .1rem;
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.headline .left{
    display: flex;
    border-right: 1px solid #ededed;
    width: .94rem;
}
.headline .left img{
    width: .83rem;
    height: .16rem;
}
.headline .newList{
    width: 2.5rem;
    height: .2rem;
    display: flex;
    position: relative;
    overflow: hidden;
}
.headline .newList li a{
    display: block;
    height: 100%;
    width: 100%;
    font-size: .12rem;
    line-height: .2rem;
    color: #333;
    text-align: left;
    padding-left: .1rem;
}
</style>