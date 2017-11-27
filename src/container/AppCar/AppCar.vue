<template>
  <div class="app-car">
      <top-shop-header type="购物袋"></top-shop-header>
      <div class="carContainer">
        <p class="order_tips clearfix" ref="add">
          <a href="##">成为金牌会员，享受VIP专属优惠，点击查看</a>
          <a href="##" class="close_tips" @click="hide()"></a>
        </p>
        <section class="order_block">
			    <dl>
              <dd class="clr domestic-goods clearfix" id="201711191010696825">
                  <a href="##" id="list_2" class="close"></a>
                  <a class="input" href="##"> 
                      <input type="checkbox" class="choice_commodity" value="201711191010696825" postarea="1">
                  </a>
                  <a href="##" class="img"> 
                    <span class="fail">售罄</span> 
                    <img src="http://pic1.shangpin.com/f/p/17/10/17/20171017212948879894-90-120.jpg" width="70" height="94" style="opacity: 1;">
                  </a>
                  <h2>
                    <a href="##"> <span>A&amp;C&nbsp;Steel 不锈钢系列长坠项链</span></a>
                  </h2>
                  <p class="clr clearfix">
                    <span class="color">颜色：银色</span>
                    <span class="size">样式：均码</span>
                    <span class="return_attention">
                      <img src="http://pic3.shangpin.com/e/s/17/08/28/20170828162332767423-0-0.jpg" alt="" width="18" height="18">
                    支持7天退换</span>
                  </p>
                  <div class="clr">
                    <span class="price">
                      <span class="p_third" style="color: #000000">¥529</span>
                    </span>
                    <div class="fillNumber">
                      <a href="##" class="cut">-</a>
                      <span class="prodNum">2</span>
                      <a href="javascript:;" class="add">+</a>
                      <input type="hidden" class="numberVal" value="3">
                    </div>
                  </div>
              </dd>
          </dl>
        </section>
      </div>
      <footer>
        <div>
          <a class="input_all" href="##"> 
            <input type="checkbox" class="choice_commodity">
          </a>
          <span style="margin-left: 5px">全选</span>
          <span class="total_amount">总金额：<b><em>¥<i id="total_amount">0</i></em></b></span>
        </div>
        <a class="btn immediately no_submit" href="##" id="immediately">结算(<em id="total_number">0</em>)</a>
      </footer>
  </div>
</template>

<script>
import TopShopHeader from '../../components/TopShopHeader/TopShopHeader'
export default {
  name: 'AppCar',
  components:{TopShopHeader},
  data () {
    return {
      
    }
  },
  methods:{
    hide(){
        this.$refs.add.style.display="none"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .app-car {
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      height:100%;
      overflow:hidden;

      .carContainer{
        flex:1;
        .order_block{
          width:100%;
          clear:both;
          background:#f2f2f2;
          dl{
            padding:0;
            margin:0 auto;
            width:100%;
            background:#fff;

            dd{
              border-bottom:1px solid #d8d8d8;
              padding:0.15rem 0 0.1rem;
              margin:0;

              a.close{
                width:0.32rem;
                height:0.32rem;
                display:inline-block;
                overflow:hidden;
                text-indent:-0.3rem;
                float:right;
                background:url('http://css1.m.shangpin.com/styles/shangpin/images/order/close1.png') 8px 8px no-repeat;
                background-size:0.16rem;
              }
              
              a.img{
                float:left;
                width:0.7rem;
                height:0.9rem;
                margin:0 0.15rem;
              }
              span.fail{
                display:none;
              }
              h2{
                font-weight:normal;
                font-size:100%;
              }
              p{
                color:#888;
                line-height:0.18rem;
                height:0.18rem;
                font-size:0;
                padding-bottom:0.05rem;
                span.color{
                  width:1.1rem;
                  float:left;
                  overflow:hidden;
                  white-space:nowrap;
                }
                span.size{
                  float:left;
                  width:0.8rem;
                  overflow:hidden;
                  text-overflow:ellipsis;
                  white-space:nowrap;
                }
                span.return_attention{
                  float:left;
                  width:2.6rem;
                  height:0.18rem;
                  overflow:hidden;
                  text-overflow:ellipsis;
                  white-space:nowrap;
                  margin:0.06rem 0;
                  line-height:0.18rem;
                  img{
                    height:100%;
                    margin:0;
                    width:0.18rem;
                  }
                }
                span{
                  display:inline-block;
                  font-size:0.13rem;
                }
              }
            }
          }
        }
      }
      
      .order_tips {
          height: 0.44rem;
          line-height: 0.44rem;
          background: #666666;
          text-align: center;
          a.first-child{
            float:left;
          }

          a{
            color:#fff;
            font-size:0.14rem;
          }
          a.close_tips{
            float:right;
            margin-top:0.06rem;
            width:0.32rem;
            height:0.32rem;
            display:inline-block;
            overflow:hidden;
            text-indent:-0.3rem;
            background:url('http://css1.m.shangpin.com/styles/shangpin/images/order/close_tips.png') 8px 8px no-repeat;
            background-size:0.16rem;
          }
      }

      .order_block dl dd a.input,
      .order_block dl dd a.input_curr,
      footer a.input_all, 
      footer a.inputall_curr {
          float: left;
          width: 0.3rem;
          background: url('http://css1.m.shangpin.com/styles/shangpin/images/order/pic1.png') 12px 40px no-repeat;
          background-size: 0.16rem;
          width: 0.3rem;
          height: 0.94rem;
          margin: 0px;
          display: inline-block;
      }
      .order_block dl dd a.input input,
       footer a.input_all input {
          display: none;
      }
      .order_block dl dd h2,
      .order_block dl dd p,
      .order_block dl dd div.clr,
     .order_block dl dd .premium-price {
          margin-left: 1.3rem;
      }
      .order_block dl dd span.price,
      .order_block dl dd span.price b .discount_price {
          color: #0700c5;
      }
      .order_block dl dd span.price,
      .order_block dl dd span.price b {
          line-height: 0.16rem;
          float: left;
      }
      .p_third {
          font-size: 0.14rem;
          line-height: 0.2rem;
      }
      .order_block dl dd div.fillNumber {
          float: right;
          border: 1px solid #b2b2b2;
          border-radius: 2px;
          padding: 0;
          margin-right: 0.08rem;
      }
      .order_block dl dd div.fillNumber a,
      .fillNumber input, 
      .fillNumber span {
          float: left;
      }
      .order_block dl dd div.fillNumber a {
          width:0.2rem;
          height: 0.2rem;
          line-height:0.2rem;
          background-color: #fff;
          text-align: center;
          font-size: 0.16rem;
          color: #838383;
      }
      .order_block dl dd div.fillNumber a.disabled {
        color: #ccc;
      }
      .order_block dl dd div.fillNumber span {
          width: 0.3rem;
          height: 0.2rem;
          line-height: 0.2rem;
          display: inline-block;
          background-color: #fff;
          text-align: center;
          border: none 0;
          border-left: 1px solid #b2b2b2;
          border-right: 1px solid #b2b2b2;
      }
        input, img {
          vertical-align: middle;
      }
      .no_result a, footer a.btn {
          width: 1.3rem;
          height: 47px;
          line-height: 47px;
          background-color: #0700c5;
          /* border: 1px solid #0700c5; */
          color: #fff;
          font-size: 0.17rem;
          text-align: center;
      }
      .no_result a, footer a.btn.no_submit {
          background: #c8c8c8;
      }
        footer {
          width: 100%;
          height: 50px;
          margin: 0 auto;
          font-size: 0.14rem;
          background: #fff;
          border-top: 1px solid #d8d8d8;
          display:flex;
          justify-content:space-between;
          align-items:center;
          div{
            line-height:0.48rem;
            width:1.85rem;
            display:flex;
            justify-content:space-around;

            a.input_all{
              height:0.5rem;
              background-position:12px 15px;
            }
          }
          a.btn.on_submit{
            background:#c8c8c8;
          }
      }
    }
</style>
