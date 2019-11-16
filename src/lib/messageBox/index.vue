<template>
    <div class="messageCotainer">
        <div class="messageBox-title">
            <div>{{title}}</div>
            <v-touch tag="div" @tap="handleClose()">X</v-touch>
        </div>
        <div class="messageBox-content">你确定定位到当前城市 {{content}} 吗？</div>
        <div class="messageBox-Btn">
            <v-touch tag="div" @tap="handleOK()">确定</v-touch>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
    .messageCotainer{
        width: 3.12rem;
        height: 2rem;
        box-shadow: 1px 1px .5rem rgba($color: #000000, $alpha: .6);
        border-radius: 2px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom:0;
        margin: auto;
        z-index: 20;
        background: #fff;
        
        .messageBox-title{
            height: .5rem;
            background: #f1f1f1;
            font-size: .14rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 .2rem;
        }
        .messageBox-content{
            font-size: .16rem;
            height: .7rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .messageBox-Btn{
            font-size: .16rem;
            height: .7rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>