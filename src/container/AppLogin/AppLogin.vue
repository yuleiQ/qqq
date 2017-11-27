<template>
<div>
  <top-shop-header type="登录"></top-shop-header>
  <div class="app-login container">     
	<form @submit.prevent="login({username,password})" id="J_mobiForm3">
          <div class="fieldset">
              <div class="verification_box">
                  <p class="c-form-search verification">
                      <label for="mobi" class="mobi user"></label>
                      <input ref="mobile" @blur="fn()" type="text" id="J_MobiName" name="mobi" placeholder="请输入手机号/邮箱" v-model="username">
                      <button type="button" v-show="this.username" @click="clickButton()" ref="button"></button>
                  </p>
              </div>
              <div class="verification_box">
                  <p class="c-form-search verification">
                      <label for="MobiPwd" class="MobiPwd"></label>
                      <input :type="isEye==true?'password':'number'" @blur="fn1()" ref="psd" id="J_MobiPwd" name="MobiPwd" placeholder="请输入登录密码" maxlength="20" v-model="password">
                      <button type="button" v-show="this.password" @click="clickButton()" style="right:-0.8rem" ref="button1"></button>
                  </p>
                  <span class="pwd_eyes" @click="clickeye()" :class="{close:isEye}"></span>
              </div>
              <input type="button" class="login_btn" value="登 录" @click="clickb()">

              <p class="links">
                  <a href="/register">注册账号</a>
                  <a >短信登录</a>
                  <a >忘记密码？</a>
              </p>
    
          </div>
    </form>
  </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
import TopShopHeader from '../../components/TopShopHeader/TopShopHeader'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'AppLogin',
  components:{
      TopShopHeader
  },
  data(){
    return {
      username:'',
      password:'',
      isShow:false,
      isFlag:false,
      isEye:true
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{
    ...mapActions(['login']),
    fn(){
        this.$refs.button.style.display = "none"
    },
    fn1(){
        this.$refs.button1.style.display = "none"
    },
    clickButton(){
        this.$refs.mobile.value=""
    },
    clickb(){
        if(this.$refs.mobile.value==""||this.$refs.mobile.psd==""){
            Toast({
              message: '手机密码不为空'
            })
        }else if(!(/^1\d{10}$/).test(this.$refs.mobile.value)){
            Toast({
              message: '手机格式不正确'
            })
        }else{
          this.$router.replace("mine")
        }
    },
    clickeye(){
       this.isEye = !this.isEye
    }
  }
}


</script>

<style scoped lang="scss">
  .app-login{
    background:#fff;
    .fieldset {
      width: 100%;
      margin-top: 0.25rem;
      .login_btn {
          display: block;
          margin: 0.4rem 4% 0.1rem;
          height:0.34rem;
          line-height: 0.34rem;
          background: #ccc;
          border: 1px solid #CCCCCC;
          outline: none;
          color: #fff;
          text-align: center;
          font-size: 0.18rem;
          width: 92%;
          height: 0.45rem;
          line-height:0.45rem;
          border: none;
          border-radius: 0;
      }
      .links {
          display: table;
          width: 100%;
          height:0.45rem;
          border: none;
          a {
            display: table-cell;
            text-align: center;
            color: #000;
        }
      }
      .verification_box {
          position: relative;
          border-bottom: 1px solid #d8d8d8;
          height:0.45rem;
          line-height:0.45rem;
          color: #999;
          margin: 0 4%;
          background-color: #fff;
          

        span.pwd_eyes {
            display: inline-block;
            width: 0.24rem;
            height: 0.24rem;
            position: absolute;
            top: 10px;
            right: 0;
            background: url("http://css5.m.shangpin.com/styles/shangpin/images/user/cssImg/eye_open.png") no-repeat left center;
            -webkit-background-size: 100%;
            -moz-background-size: 100%;
            background-size: 100%;
        }


          span.pwd_eyes.close {
            display: inline-block;
            width: 0.24rem;
            height: 0.24rem;
            background: url("http://css4.m.shangpin.com/styles/shangpin/images/user/cssImg/eye_close.png") no-repeat left center;
            background-size: 100%;
            position: absolute;
            top: 10px;
            right: 0;
            }
            
          p{
              position: relative;
              width: 65%;
              margin: 0;
              label {
                display: inline-block;
                float: left;
                width: 0.24rem;
                height: 0.24rem;
                position: absolute;
                top: 10px;
                left: 0;
                &.mobi.user{
                    background:url("http://css3.m.shangpin.com/styles/shangpin/images/user/cssImg/user.png") no-repeat left center;
                    background-size: 100%;
                }
                &.MobiPwd{
                    background:url("http://css4.m.shangpin.com/styles/shangpin/images/user/cssImg/password.png") no-repeat left center;
                    background-size: 100%;
                }
              }
              input{
                border: 1px solid #fff;
                background: rgba(0,0,0,0);
                height: 0.24rem;
                width: 70%;
                z-index: 0;
                font-size:0.12rem;
                padding: 0 0.05rem;
                outline: none;
                margin-left: 0.3rem;
              }
              button {
                width: 0.24rem;
                height: 0.24rem;
                position: absolute;
                border: 0;
                right: 0.05rem;
                top: 0.1rem;
                background-color: transparent;
                text-align: center;
                background:url("http://css3.m.shangpin.com/styles/shangpin/images/user/cssImg/clear-button.png") no-repeat left center;
                background-size: 100%;
                z-index: 10;  
              }    
              .datalist {
                  width: 100%;
                  display: block;
                  position: absolute;
                  border: none;
                  left:0.55rem;
                  top: 0.4rem;
                  background: #000;
                  z-index: 10;
                  color: #fff;
                  border-radius: 0.03rem;
                  display: none;
                  height: auto;
              }
          }
      }
    }
    #J_MobiName+button, #J_mailName+button {
        right: -53%;
    }
  }

  
</style>
