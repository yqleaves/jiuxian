<template>
     <div>
         <div class="kind">
            <ul class="kind-box">
                <li><a href="">
                        <img src="https://img08.jiuxian.com/2014/0111/8b673ebe7ebb45089e766a72850ad33c4.jpg" alt="">
                        <span class="name">43°茅台迎宾酒500ml</span>
                        <span class="price">￥68.00</span>
                        <span class="o-price">￥118.00</span>
                    </a></li>
                <li><a href="">
                        <img src="https://img06.jiuxian.com/2017/0121/699352b5853a4a44b88588ed08b0a65c4.jpg" alt="">
                        <span class="name">澳洲整箱红酒澳大利亚黄尾袋鼠加本力苏维翁红葡萄酒（6瓶装）</span>
                        <span class="price">￥268.00</span>
                        <span class="o-price">￥330.00</span>
                    </a></li>

                <li><a href="">
                        <img src="https://img09.jiuxian.com/2019/0830/1ccbb93de56b4043ac33060e6885d1334.jpg" alt="">
                        <span class="name">西班牙安徒生美人鱼干红葡萄酒750ml*6</span>
                        <span class="price">￥219.00</span>
                        <span class="o-price">￥299.00</span>
                    </a></li>
                <li><a href="">
                        <img src="https://img07.jiuxian.com/2018/0106/bce6bb4392e742c3b288614a9022c9894.jpg" alt="">
                        <span class="name">【爆款特卖】52°洋河蓝色经典梦之蓝M3 500ml*6</span>
                        <span class="price">￥569.00</span>
                        <!-- <span class="o-price">￥299.00</span> -->
                    </a></li>
                <li><a href="">
                        <img src="https://img09.jiuxian.com/2019/0830/1ccbb93de56b4043ac33060e6885d1334.jpg" alt="">
                        <span class="name">澳洲整箱红酒澳大利亚黄尾袋鼠加本力苏维翁红葡萄酒（6瓶装）</span>
                        <span class="price">￥268.00</span>
                        <span class="o-price">￥330.00</span>
                    </a></li>
                    <li><a href="">
                        <img src="https://img07.jiuxian.com/2018/0106/bce6bb4392e742c3b288614a9022c9894.jpg" alt="">
                        <span class="name">【爆款特卖】52°洋河蓝色经典梦之蓝M3 500ml*6</span>
                        <span class="price">￥569.00</span>
                        <!-- <span class="o-price">￥299.00</span> -->
                    </a></li>
                <li><a href="">
                        <img src="https://img09.jiuxian.com/2019/0830/1ccbb93de56b4043ac33060e6885d1334.jpg" alt="">
                        <span class="name">澳洲整箱红酒澳大利亚黄尾袋鼠加本力苏维翁红葡萄酒（6瓶装）</span>
                        <span class="price">￥268.00</span>
                        <span class="o-price">￥330.00</span>
                    </a></li>
            </ul>
        </div>

         <!-- pubBanner -->
        <div class="pubBanner">
            <a href="">
                <img src="https://img10.jiuxian.com/bill/2019/0821/fb176ffae5b941a2aa0a38e88607a278.jpg" alt="">
            </a>

        </div>
        <div class="pubBanner">
            <a href="">
                <img src="https://img09.jiuxian.com/bill/2019/1029/575a815f638540bcaa911d7380964897.jpg" alt="">
            </a>
        </div>
        <div class="pubBanner">
            <a href="">
                <img src="https://img07.jiuxian.com/bill/2019/1029/af5c9a7ab7c24de0bf43979199ad6858.jpg" alt="">
            </a>
        </div>
        <div class="pubBanner">
            <a href="">
                <img src="https://img08.jiuxian.com/bill/2019/1028/541b112ff30b4114a143ff74774a8aea.jpg" alt="">
            </a>
        </div>
        <div class="pubBanner">
            <a href="">
                <img src="https://img08.jiuxian.com/bill/2019/1029/54b4b447e4da4fd8aa425c0e11790984.jpg" alt="">
            </a>
        </div>
        <div class="pubBanner">
            <a href="">
                <img src="https://img09.jiuxian.com/bill/2019/1029/5e20cbefa3394c0d9487afd262e501cb.jpg" alt="">
            </a>
        </div>
        <div class="pubBanner">
            <a href="">
                <img src="https://img07.jiuxian.com/bill/2019/1029/9a254ef163784bd79bb9ef13818179d8.jpg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
      /* 横向滚动 */
.kind{
    height: 1.6rem;
    background: #fff;
    position: relative;
    overflow: hidden;
    padding: 5px 0;
    padding-left: .1rem;
    overflow-x: initial;
}
.kind .kind-box{
    overflow-x: auto;
    width: 10rem;
    height: 100%;
    display: flex;
}
.kind .kind-box li{
    width: 1rem;
    height: 100%;
    background: #fff;
    margin-right: .1rem;
}
.kind .kind-box li a{
    width: 100%;
    padding: 0 2px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.kind .kind-box li a img{
    width: .96rem;
    height: .96rem;
}
.kind .kind-box li a .name{
    width: 100%;
    height: .32rem;
    color:#252525;
    font-size: .12rem;
    font-family: 华文细黑;
    overflow: hidden;
}
.kind .kind-box li a .price,.kind .kind-box li a .o-price{
    height: .135rem;
    margin-top: .1rem;
    color: #fc5a5a;
    font-size: .14rem;
    text-align: left;
    font-family: 华文细黑;
}
.kind .kind-box li a .o-price{
    margin:0;
    color: #999;
    font-size: .12rem;
    text-decoration-line: line-through;
}

/* pubBanner */
.pubBanner{
    height: .93rem;
    width: 100%;
    display: flex;
}
.pubBanner img{
    width: 100%;
    height: 100%;
}
</style>