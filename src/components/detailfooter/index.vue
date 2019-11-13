<template>
    <!-- footer -->
    <div class="footer">
        <ul>
            <li>
                <i class="icon"></i>
            </li>
            <li>
                <i class="icon2"></i>
            </li>
            <li>
                <i class="icon3"></i>
            </li>
        </ul>
        <a class="addCart">加入购物车</a>
        <a class="buy">立即购买</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    /* footer */
.footer{
    height: .45rem;
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
}
.footer a{
    width: .94rem;
    height:100%;
    background: #fc5a5a;
    color: #fff;
    font-size: .14rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer .buy{
    background: #3c3f51;
}
.footer ul{
    width: 1.876rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}
.footer ul li{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.footer i{
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/zxkf.png) no-repeat;
    background-size: 41px 41px;
    width: .41rem;
    height: .41rem;
}
.footer .icon3{
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/bottom06.png) no-repeat;
    background-size: 41px 41px;
}
.footer .icon2{
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/bottom05.png) no-repeat;
    background-size: 41px 41px;
}
</style>