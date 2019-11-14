<template>
    <div>
         <!-- security -->
        <div class="security">
            <span>
                <i></i>正品保障
            </span>
            <span class="fill">
                <i></i>满100包邮
            </span>
            <span class="return">
                <i></i>7天退换
            </span>
        </div>

        <div class="prodDet">
            <div class="detailTit">
                <i></i>温馨提示
            </div>
            <p class="web">
                本网站不向未成年人售酒,<br>

                为了您和家人的健康，适度饮酒、不要酒后驾车，<br>

                酒仙网祝您购物愉快!<br>
            </p>
            <p class="acord">
                根据新修订的《商标法》及国家工商总局最新文件要求，2014年5月1日之后不得将“驰名商标”字样用于商品宣传，酒仙网依法对商品图片中含“驰名商标”字样做马赛克处理；同时，涉及厂家正在按照新规定逐步更换包装，在此期间，我们将对新
                旧包装货品随机发货，请以实际收到的货物为准。给您带来的不便，敬请谅解。
            </p>
            <p class="pro-bold">价格说明</p>

            <p class="list">
                <i></i>
                <span>酒仙价:</span>
                酒仙价是商品的指导价，商品展示的酒仙价为参考价，并非原价，该价格可能是品牌专柜标价、或由品牌供应商提供的指导价。
            </p>
            <p class="list">
                <i></i>
                <span>促销价:</span>
                促销价为商品的销售价，是您最终决定是否购买商品的依据。
            </p>

            <p class="list">
                <i></i>
                <span>折扣:</span>
                如无特殊说明，折扣指销售商在促销价或酒仙价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系客服进行咨询。
            </p>
            <p class="list">
                <i></i>
                <span>异常问题:</span>
                商品促销信息以商品详情页“促销”栏中的信息为准；商品的最终售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系客服。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    
.security{
    width: 100%;
    height: .41rem;
    margin-bottom: .1rem;
    background:#f9f9f9;
    color:#666;
    border-bottom: 1px solid #e2e2e2;
    padding: .1rem .12rem;
    display: flex;
}
.security span {
    /* width: .64rem; */
    height: .2rem;
    margin-right: .15rem;
    font-size: .12rem;
    color: #666;
    text-align: center;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.security span i{
    background: url('https://img09.jiuxian.com/bill/2016/1129/16d97e874a194b55b347ca1f63a89b58.png') no-repeat 0 0;
    background-size: .13rem .13rem;
    width:.13rem;
    height: .13rem;
}
.security .fill i{
    background: url('https://img07.jiuxian.com/bill/2016/1129/8efeb2432fcf4bd585dee2b6d3e800f1.png') no-repeat 0 0;
    background-size: .13rem .13rem;
}
.security .return i{
    background: url('https://img08.jiuxian.com/bill/2016/1129/c625b2a3daf94197810e69579d10e031.png') no-repeat 0 0; 
    background-size: .13rem .13rem;
}

/* tip */
.prodDet{
    min-height: 2rem;
    display: flex;
    background:#fff;
    padding: .1rem;
    flex-direction: column;
}
.detailTit{
    height: .24rem;
    line-height: .24rem;
    background: url(https://m.jiuxian.com/mjava_statics/images/prodInfoBg.jpg) 0 0 repeat-x;
    padding: 0 .10rem;
    font-weight: bold;
    width:100%;
    font-size: .14rem;
    margin-bottom: .1rem;
    color:#666;
    display: flex;
}
.detailTit i{
    width:.08rem;
    height: .08rem;
    display: flex;
    background:#b00000;
    margin: .08rem .08rem 0 0 ;
}
.web{
    height: .52rem;
    color: #fc5a5a;
    font-size: .13rem;
    text-align: center;
    line-height: .18rem;
    margin-bottom: .1rem;
}
.acord{
    height: .88rem;
    color: #848484;
    font-size: .12rem;

}
.pro-bold{
    font-weight: bold;
    color: #444;
    font-size: .12rem;
    padding: .1rem 0 .05rem;

}
.list{
    position: relative;
    font-size: .12rem;
    color:#848484;
}
.list i{
    width: .04rem;
    height: .04rem;
    background: #e65461;
    border-radius: 50%;
    display: flex;
    position: absolute;
    top: .08rem;
    left: 0;
    margin-right:.08rem;
}
.list span{
    color:#848484;
    font-size: .12rem;
    margin-left: .08rem;
}
</style>