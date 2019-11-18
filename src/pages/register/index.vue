<template>
    <!-- <div class="input">
        <div>用户名<input ref="name" type="text"></div>
        <div>密码<input ref="pwd" type="password"></div>
        <button @click="handleRegister()">注册</button>
    </div> -->
    <div>
        <Header title="用户注册" icon/>
        <div class="main">
        <div class="user">
            <i></i>
            <input type="text" ref="name" placeholder="用户名">
        </div>
        <div class="user yzm">
            <input type="text"  placeholder="请依次点击">
        </div>



        <div class="user password">
            <i></i>
            <input type="password" ref="pwd" placeholder="请输入密码">
        </div>
        <div class="user rePass">
            <i></i>
            <input type="password" placeholder="请再次输入密码">
        </div>


        <div @click="handleRegister()" class="register" >
            确认注册
        </div>
    </div>
    </div>
</template>

<script>
import {registerApi} from "@api/login";
export default {
    name:"register",
    data(){
        return {
            username:"",
            password:""
        }
    },
    methods:{
       async handleRegister(){
            this.username = this.$refs.name.value;
            this.password = this.$refs.pwd.value;
            let data = await registerApi(this.username,this.password)
            console.log(data)
        }
    }
}
</script>
<style>
    .main{
    height: 100%;
    padding: .7rem .3rem 0;
    font-size:.14rem;
}
.main .user{
    width: 100%;
    height: .42rem;
    margin-bottom: .4rem;
    border: 1px solid #cccccc;
    border-radius: 3px;
    color: #626365;
    position: relative;
    display: flex;
    align-items: center;
    
}
.main .user input{
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: .03rem;
}
.main .user i{
    background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) no-repeat;
    width: .2rem;
    height: .2rem;
    background-position: -1.38rem -.34rem;
    margin: 0 .1rem;
}
.main .password i{
    background-position: -.72rem -.34rem;
}
.main .yzm{
    padding-left: .2rem;
}

.main .register{
    width: 100%;
    height: .34rem;
    color: #fff;
    background: #de4943;
    font-size: .16rem;
    text-align: center;
    line-height: .34rem;
    border-radius: 3px;
    margin-bottom: .3rem;
}
</style>