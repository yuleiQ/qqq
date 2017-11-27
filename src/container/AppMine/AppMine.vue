<template>
  <div class="app-main">
    <top-shop-header type="个人中心"></top-shop-header>
    <div class="main">
        <ul class="menu">
            <li class="line"></li>
            <li class="menu_login">
                <a href="##">
                     <i>登录/注册</i>
                </a>
            </li>
            <li class="line"></li>
            <li><a href="##" class="menu_wish">愿望清单</a></li>
            <li class="line"></li>
            <li class="bor">
                <a href="##" class="menu_order">订单</a></li>
            <li class="line"></li>
            <li><a href="##" class="menu_coupon">卡券</a></li>
            <li class="line"></li>
            <li class="bor"><a href="##" class="menu_serve">客服</a></li>
            <li class="bor"><a href="##" class="menu_msg">收货地址管理</a></li>
            <li><a href="##" class="menu_set">设置</a></li>
       </ul>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import TopShopHeader from '../../components/TopShopHeader/TopShopHeader'
import AppFooter from '../../components/AppFooter/AppFooter'
export default {
  name: 'AppMine',
  components:{TopShopHeader,AppFooter},
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
      .app-main{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:100%;
      }
      .main{
        flex:1;
        width:100%;
        padding-bottom:0.45rem;
        .menu{
          background:#fff;
          li{
            display:block;
            font-size:0.14rem;
            line-height:0.45rem;
            background-image: url('http://css1.m.shangpin.com/styles/shangpin/images/member/right.png');
            background-position: 96% 0.15rem;
            background-repeat: no-repeat;
            background-size: 0.07rem 0.13rem;
            a{
              display:block;
              padding-left:0.1rem;
              color:#2d2d2d;
              &.menu_wish{
                background-image:url('http://css1.m.shangpin.com/styles/shangpin/images/member/wish.png');
              }
              &.menu_order{
                background-image:url('http://css1.m.shangpin.com/styles/shangpin/images/member/order.png');
              }
              &.menu_coupon{
                background-image:url('http://css1.m.shangpin.com/styles/shangpin/images/member/coupon.png');
              }
              &.menu_serve{
                background-image:url('http://css1.m.shangpin.com/styles/shangpin/images/member/serve.png');
              }
              &.menu_msg{
                background-image:url('http://css1.m.shangpin.com/styles/shangpin/images/member/msg.png');
              }
              &.menu_set{
                background-image:url('http://css1.m.shangpin.com/styles/shangpin/images/member/set.png');
              }
            }
          }
          li.line{
            background:#f6f6f6;
            height:0.075rem;
          }
          .menu_login{
            height:0.8rem;
            background-image:none;
            position:relative;
            i{
              width: 1.08rem;
              height: 0.4rem;
              border-radius: 0.075rem;
              display: block;
              border: 1px solid #000;
              position: absolute;
              top: 0.19rem;
              left: 50%;
              margin-left: -0.54rem;
              text-align: center;
              line-height: 0.4rem;
            }
          }
        }
      }
      .menu li a.menu_wish, 
      .menu li a.menu_order,
      .menu li a.menu_return,
      .menu li a.menu_coupon, 
      .menu li a.menu_serve, 
      .menu li a.menu_msg, 
      .menu li a.menu_set, 
      .menu li a.menu_man, 
      .menu li a.menu_woman, 
      .menu li a.menu_password {
          padding-left: 0.43rem;
          background-position: 0.1rem 0.1rem;
          background-repeat: no-repeat;
          background-size: 0.25rem 0.25rem;
      }
</style>
