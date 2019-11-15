<template>
    <!-- main -->
    <div class="main">
        <div class="login">
            <div class="account">账号登录</div>
            <div class="tel">手机动态密码登录</div>
        </div>
        <div class="user">
            <i></i>
            <input type="text" v-model="loginForm.username" placeholder="用户名/邮箱/手机号">
            <!-- <span>用户名/邮箱/手机号</span> -->
        </div>
        <div class="user password">
            <i></i>
            <input type="password" v-model="loginForm.password"  placeholder="密码">
        </div>
        <div class="user yzm">
            <i></i>
            <input type="password" placeholder="请依次点击">
        </div>

        <div class="sign" @click="login">
            立即登录
        </div>
        
        <div class="server">
            <span>免费注册</span>
            <span>找回密码</span>
        </div>

        <div class="partner">
            <div class="line"></div>
            <div class="text">合作伙伴登录</div>
        </div>

        <div class="third">
            <li class="qq"></li>
            <li class="pay"></li>
        </div>
    </div>
</template>


<script>
import axios from "@utils/request";
import { mapMutations } from 'vuex';
export default {
    name:"LoginMain",
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
 
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } 
      else {
        axios({
          method: 'post',
          url: '/login',
          data: _this.loginForm
        }).then(res => {
          console.log(res.data);
          _this.userToken = 'Bearer ' + res.data.data.body.token;
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken });
          _this.$router.push('/mine');
          alert('登陆成功');
        }).catch(error => {
          alert('账号或密码错误');
          console.log(error);
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
    margin-top: .15rem;
    height: 100%;
    padding: .4rem .3rem 0;
}
.main .login{
    width: 100%;
    display: flex;
    height: .45rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .15rem;
}
.main .login div{
    height: 100%;
    font-size: .14rem;
    display: flex;
    align-items: center;
    /* border-bottom: 2px solid red; */
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
// .main .user span{
//     position: absolute;
//     right: 0;
//     height: .1rem;
//     font-size: .14rem;
//     text-align: left;
//     padding-left: .5rem;
//     width: 100%;
// }
.main .user input{
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: .03rem;
    font-size: .14rem;
}

.main .user i{
    background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) no-repeat;
    width: .2rem;
    height: .2rem;
    background-position: 0 -.34rem;
    margin: 0 .1rem;
}
.main .password i{
    background-position: -.72rem -.34rem;
}
.main .sign{
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
.main .server{
    display: flex;
    height: .2rem;
    justify-content: space-between;
    align-items: center;
}
.main .server span{
    text-decoration: underline;
    color: #666;
    font-size: .14rem;
}
.main .partner{
    height: .4rem;
    margin-top: .2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main .partner .line{
    width: 100%;
    border-bottom: 1px solid #cccccc;
}
.main .partner .text{
    width:1.1rem;
    height: .4rem;
    background: #fff;
    text-align: center;
    line-height: .4rem;
    color:#878686;
    font-size: .14rem;
    position: absolute;
}
.main .third{
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 .2rem;
    margin: .2rem 0;
}
.main .qq,.main .pay{
    background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) no-repeat;
    background-position: -.78rem -.99rem;
    width: .45rem;
    height: .45rem;
}
.main .pay{
    background-position: -1.56rem -.99rem;
}
</style>