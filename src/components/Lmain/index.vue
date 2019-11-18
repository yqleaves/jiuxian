<template>
  <!-- main -->
  <div class="main">
    <div class="login">
      <div class="account">账号登录</div>
      <div class="tel">手机动态密码登录</div>
    </div>
    <div class="user">
      <i></i>
      <input type="text" ref="username" placeholder="用户名/邮箱/手机号" />
      <!-- <span>用户名/邮箱/手机号</span> -->
    </div>
    <div class="user password">
      <i></i>
      <input type="password" ref="password" placeholder="密码" />
    </div>
    <div class="user yzm">
      <i></i>
      <input type="password" placeholder="请依次点击" />
    </div>
    <div class="sign" @click="login">立即登录</div>

    <div class="server">
      <span @click="handleRegister()">免费注册</span>
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
import { mapMutations } from "vuex";
import { loginApi } from "@api/login";
import { setCookie, getCookie } from "../../utils/cookie";
export default {
  name: "LoginMain",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},

  methods: {
    handleRegister(){
      this.$router.push("/register")
    },
    async login() {
      this.username = this.$refs.username.value;
      this.password = this.$refs.password.value;

      let data = await loginApi(this.username, this.password);
      console.log(data);
        if (data.data.code == 1) {
          if (getCookie("token")) {
            setCookie("name", data.data.list.name);
            setCookie("urlPic", data.data.list.urlPic);
            this.$router.push("/mine");
          }
        }
      }
    },
  
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 0.15rem;
  height: 100%;
  padding: 0.4rem 0.3rem 0;
}
.main .login {
  width: 100%;
  display: flex;
  height: 0.45rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.15rem;
}
.main .login div {
  height: 100%;
  font-size: 0.14rem;
  display: flex;
  align-items: center;
  /* border-bottom: 2px solid red; */
}
.main .user {
  width: 100%;
  height: 0.42rem;
  margin-bottom: 0.4rem;
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
.main .user input {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 0.03rem;
  font-size: 0.14rem;
}

.main .user i {
  background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png)
    no-repeat;
  width: 0.2rem;
  height: 0.2rem;
  background-position: 0 -0.34rem;
  margin: 0 0.1rem;
}
.main .password i {
  background-position: -0.72rem -0.34rem;
}
.main .sign {
  width: 100%;
  height: 0.34rem;
  color: #fff;
  background: #de4943;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.34rem;
  border-radius: 3px;
  margin-bottom: 0.3rem;
}
.main .server {
  display: flex;
  height: 0.2rem;
  justify-content: space-between;
  align-items: center;
}
.main .server span {
  text-decoration: underline;
  color: #666;
  font-size: 0.14rem;
}
.main .partner {
  height: 0.4rem;
  margin-top: 0.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main .partner .line {
  width: 100%;
  border-bottom: 1px solid #cccccc;
}
.main .partner .text {
  width: 1.1rem;
  height: 0.4rem;
  background: #fff;
  text-align: center;
  line-height: 0.4rem;
  color: #878686;
  font-size: 0.14rem;
  position: absolute;
}
.main .third {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.2rem;
  margin: 0.2rem 0;
}
.main .qq,
.main .pay {
  background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png)
    no-repeat;
  background-position: -0.78rem -0.99rem;
  width: 0.45rem;
  height: 0.45rem;
}
.main .pay {
  background-position: -1.56rem -0.99rem;
}
</style>