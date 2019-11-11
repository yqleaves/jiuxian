<template>
    <div>
        <!-- 爆款 -->
        <div class="title">
            爆款推荐
        </div>
        <div class="recommend">
            <li>
                <i>掌上秒拍</i>
                <a href="">
                    <img src="https://img10.jiuxian.com/2019/1028/a874f5ceeb71409294ffd5717bbc61a84.jpg" alt="">
                    <span class="item-title">52°白水杜康一坛老酒1000ml(双坛装)+沁州黄小米500g（一袋）</span>
                    <span class="item-price">
                        <em>￥98.00</em>
                        <b>￥237.00</b>
                    </span>
                </a>
            </li>
            <li>
                <i>掌上秒拍</i>
                <a href="">
                    <img src="https://img10.jiuxian.com/2019/1028/a874f5ceeb71409294ffd5717bbc61a84.jpg" alt="">
                    <span class="item-title">52°白水杜康一坛老酒1000ml(双坛装)+沁州黄小米500g（一袋）</span>
                    <span class="item-price">
                        <em>￥98.00</em>
                        <b>￥237.00</b>
                    </span>
                </a>
            </li>
            <li>
                <i>掌上秒拍</i>
                <a href="">
                    <img src="https://img10.jiuxian.com/2019/1028/a874f5ceeb71409294ffd5717bbc61a84.jpg" alt="">
                    <span class="item-title">52°白水杜康一坛老酒1000ml(双坛装)+沁州黄小米500g（一袋）</span>
                    <span class="item-price">
                        <em>￥98.00</em>
                        <b>￥237.00</b>
                    </span>
                </a>
            </li>
            <li>
                <i>掌上秒拍</i>
                <a href="">
                    <img src="https://img10.jiuxian.com/2019/1028/a874f5ceeb71409294ffd5717bbc61a84.jpg" alt="">
                    <span class="item-title">52°白水杜康一坛老酒1000ml(双坛装)+沁州黄小米500g（一袋）</span>
                    <span class="item-price">
                        <em>￥98.00</em>
                        <b>￥237.00</b>
                    </span>
                </a>
            </li>
            <li>
                <i>掌上秒拍</i>
                <a href="">
                    <img src="https://img10.jiuxian.com/2019/1028/a874f5ceeb71409294ffd5717bbc61a84.jpg" alt="">
                    <span class="item-title">52°白水杜康一坛老酒1000ml(双坛装)+沁州黄小米500g（一袋）</span>
                    <span class="item-price">
                        <em>￥98.00</em>
                        <b>￥237.00</b>
                    </span>
                </a>
            </li>
            <li>
                <i>掌上秒拍</i>
                <a href="">
                    <img src="https://img10.jiuxian.com/2019/1028/a874f5ceeb71409294ffd5717bbc61a84.jpg" alt="">
                    <span class="item-title">52°白水杜康一坛老酒1000ml(双坛装)+沁州黄小米500g（一袋）</span>
                    <span class="item-price">
                        <em>￥98.00</em>
                        <b>￥237.00</b>
                    </span>
                </a>
            </li>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
    /* 爆款推荐 */
.title{
    width: 100%;
    height: .33rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: .12rem;
    border-bottom: 1px solid #f1f1f1;
}
.recommend{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
}
.recommend li{
    width: 49%;
    background: #fff;
    height: 2.43rem;
    margin-bottom: .1rem;
    position: relative;
    padding: .2rem .1rem .05rem;
}
.recommend li a{
    display: flex;
    width: 100%;
    min-height: 2rem;
    flex-direction: column;
}
.recommend li i{
    background: #ff6266;
    width: .54rem;
    height: .16rem;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    font-size: .12rem;
    position: absolute;
    top: 4px;
    left: 3px;
}
.recommend li a img{
    width: 1.65rem;
    height: 1.65rem;
}
.recommend li a .item-title,.recommend li a .item-price{
    width: 100%;
    height: .32rem;
    font-size: .12rem;
    font-family: 华文细黑;
    overflow: hidden;
    color: #333;
}
.recommend li a .item-price{
    height: .2rem;
}
.recommend li a .item-price em{
    color: #fc5a5a;
    font-size: .14rem;
}
.recommend li a .item-price b{
    color: #999;
    text-decoration-line: line-through;
    font-size: .14rem;
    margin-left: .05rem;
    font-size: .12rem;
}
</style>