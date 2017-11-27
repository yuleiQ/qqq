<template>
  <div class="app-register">
      <top-shop-header type="注册"></top-shop-header>
      <form name="register" id="J_mobiSignForm1">
        <fieldset>
            <div class="verification_box">
                <p class="c-form-search verification" @blur="fn()">
                    <label for="mobi" class="mobi"></label>
                    <input v-model="username"   type="text" id="J_MobiName" name="mobi" placeholder="请输入常用手机号" maxlength="11" value="">
                    <button @click="uerButton()" ref="uButton" type="button" v-show="this.username"></button>
                    <span class="datalist" style="display: none;"></span>
                </p>
            </div>
            <div class="verification_box">
                <p class="c-form-search verification">
                    <label for="MobiPwd" class="MobiPwd"></label>
                    <input v-model="password" @blur="fn1()" v-show="this.isShow" type="password" ref="psd" id="J_MobiPwd" name="MobiPwd" placeholder="请输入登录密码" maxlength="20">
                    <input v-model="password" @blur="fn1()" v-show="!this.isShow" type="text"  ref="psd" id="J_MobiPwd" name="MobiPwd" placeholder="请输入登录密码" maxlength="20">
                    <button type="button" @click="pwdButton()" ref="pButton" style="right:-0.8rem" v-show="this.password"></button>
                </p>
                <span :class="isShow?'pwd_eyes close':'pwd_eyes'" @click="eyeButton()" ref="eye"></span>
            </div>
            <div class="verification_box">
                <p class="c-form-search verification">
                    <label for="verCode" class="verCode"></label>
                    <input v-model="vCode" type="text" id="J_verCode" name="verCode" placeholder="请输入图形验证码" class="verCode" maxlength="4">
                    <button type="button" style="display: none;"></button>
                </p>
                <span class="code" @click="getCode">
                  {{this.code}}
                </span>
            </div>
            

            <input type="button" @click="register()" class="login_btn" value="注册" readonly="readonly">
            <p class="login_errorMsg mobiMsg"></p>
        </fieldset>
    </form>


  </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'mint-ui'
import TopShopHeader from '../../components/TopShopHeader/TopShopHeader'
export default {
  name: 'AppRegister',
  components:{TopShopHeader},
  data () {
    return {
        code:[],
        vCode:[],
        username:'',
        password:'',
        isShow:true
    }
  },
  methods:{
      getCode(){
          var str = ''
          var arr=[0,1,2,3,4,5,6,7,8,9]
          for(var i = 0; i < 4;i++){
            str+=arr[Math.ceil(Math.random()*(arr.length-1))]
          }
          this.code = str
      },
      register(){
          if(/^1\d{10}$/.test(this.username)){
              if(this.password){
                if(this.vCode==this.code){
                    var that = this
                    axios.post('/tina/users/register.do',{
                         
                            username:that.username,
                            password:that.password
                        
                    }).then((res)=>{
                        // console.log(res)
                        if(res.data==0){
                            Toast({"message":"注册成功"})

                            setInterval(function(){
                                this.$router.replace('login')
                            }.bind(this),1000)
                            
                        }else{
                            Toast({"message":"用户已注册"})
                        }
                    })
                    
                }else{LLWSF
                    Toast({"message":"验证码不正确"})
                }
              }else{
                  Toast({"message":"请输入密码"})
              }
                
          }else{
              Toast({"message":"手机号格式不正确"})
          }
      },
      uerButton(){
          this.username=""
      },
      pwdButton(){
          this.password=""
      },
      fn(){
            // this.$refs.uButton.style.display="none"
      },
      fn1(){
            // this.$refs.pButton.style.display="none"
      },
      eyeButton(){
            this.isShow=!this.isShow
      }
      
  },
  created(){
    this.getCode()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .app-register{
          background:#fff;
          height:100%;

          fieldset{
            width:100%;
            margin-top:0.25rem;
            .code{
              text-align:center;
              font-size:0.18rem;
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
              border:0;
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
              border:0;
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











            .verification_box {
                position: relative;
                border-bottom: 1px solid #d8d8d8;
                height: 0.45rem;
                line-height: 0.45rem;
                color: #999;
                margin: 0 4%;
                background-color: #fff;
            }

              p {
                border-bottom: 1px solid #d8d8d8;
                height: 0.45rem;
                line-height: 0.45rem;
                color: #999;
                margin: 0 4%;
                position: relative;
                background-color: #fff;
            }
            p.verification {
                /* margin-right: 110px; */
                position: relative;
                width: 65%;
                margin: 0;
            }
            label{
              display:inline-block;
              float:left;
              width:0.24rem;
              height:0.24rem;
              position:absolute;
              top:0.12rem;
              left:0;
            }
            label.mobi{
              background:url('http://css3.m.shangpin.com/styles/shangpin/images/user/cssImg/tel.png') no-repeat left center;
              background-size:100%;
            }
            input{
              vertical-align:middle;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              -webkit-appearance: none;
              border-radius:0;
            }
            p.verification input{
              width:50%;
            }
            p input[type=text],p input[type=password] {
                border: 1px solid #fff;
                background: rgba(0,0,0,0);
                height: 0.24rem;
                line-height: 0.24rem;
                width: 60%;
                z-index: 0;
                font-size: 0.12rem;
                padding: 0 0.05rem;
                outline: none;
                margin-left: 0.3rem;
            }
            #J_MobiName, #J_mailName {
                width: 85%;
            }
            p button {
                width: 0.24rem;
                height: 0.24rem;
                position: absolute;
                border: 0;
                right: 0.05remx;
                top: 0.1rem;
                background-color: transparent;
                text-align: center;
                /* display: none; */
                background: url('http://css3.m.shangpin.com/styles/shangpin/images/user/cssImg/clear-button.png') no-repeat left center;
                -webkit-background-size: 100%;
                -moz-background-size: 100%;
                background-size: 100%;
                z-index: 10;
            }
            #J_MobiName+button, #J_mailName+button {
                right: -53%;
            }
            .verification_box span {
                width: 0.9rem;
                position: absolute;
                right: 0;
                top: 0;
                height: 0.45rem;
                line-height: 0.45rem;
                background-color: #fff;
            }

            p .datalist {
                width: 100%;
                display: block;
                position: absolute;
                border: none;
                left: 0.55rem;
                top: 0.4rem;
                background: #000;
                z-index: 10;
                color: #fff;
                -webkit-border-radius: 3px;
                border-radius: 3px;
                display: none;
                height: auto;
            }
            .verification_box {
                position: relative;
                border-bottom: 1px solid #d8d8d8;
                height: 0.45rem;
                line-height: 0.45rem;
                color: #999;
                margin: 0 4%;
                background-color: #fff;
            }
            label.verCode{
              background:url('http://css3.m.shangpin.com/styles/shangpin/images/user/cssImg/shape_code.png') no-repeat left center;
              background-size:100%;
            }
            #J_verCode+button {
                right: -2%;
            }
            .verification_box span {
                width: 0.9rem;
                position: absolute;
                right: 0;
                top: 0;
                height: 0.45rem;
                line-height: 0.45rem;
                background-color: #fff;
                border:1px solid #ccc;
            }
            .login_btn {
                display: block;
                margin: 0.4rem 4% 0.1rem;
                height: 0.34rem;
                line-height: 0.34rem;
                background: #ccc;
                border: 1px solid #CCCCCC;
                outline: none;
                color: #fff;
                text-align: center;
                font-size: 0.18rem;
                width: 92%;
                height: 0.45rem;
                line-height: 0.45rem;
                border: none;
                -webkit-border-radius: 0;
                border-radius: 0;
            }
            p.login_errorMsg {
                display: none;
                margin: 0;
                width: 80%;
                height: auto;
                border: none;
                background: rgba(0,0,0,0.6);
                color: #fff;
                text-align: center;
                padding: 10px 20px;
                line-height: normal;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
            }
          }
    }
</style>
