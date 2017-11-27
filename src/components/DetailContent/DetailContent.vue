<template>
  <div class="detail-content main">
     <div class="product-title d-padding">
        <h3>{{detail.title}}</h3>
        <p>{{detail.name}}</p>
        <p class="first_buy"></p>
            <p class="price">
                <span id="spanPriceInfo">
                <!--第一价格-->
                <b style="color:#000000;">¥{{detail.price}}</b>
                <!--第二价格-->
                </span>
                <i style="color: #0700c5;border:1px solid #0700c5;padding:0 0.019rem 0 0.019rem;margin-left:0.0375rem;font-size: 0.12rem;position: relative;top: -0.0075rem;">
                {{detail.tab}}</i>
            </p>
            <!--flagList-->
            <p class="price_tab">
                <a href="#">登录后查看会员优惠</a>
            </p>
      </div>
      <div class="product-img"> 
            <img :src="detail.img"/>
      </div>
      <dl class="produce_info d-padding">
            <dt class="no-return">
                <span>
                    <img src="http://pic5.shangpin.com/e/s/17/08/28/20170828162332767423-0-0.jpg">
                </span> 支持7天无理由退货
            </dt>
            <dt>
                <a href="/product/size?pNo=30790073">尺码对照表</a>
            </dt>
                <dd class="d-center">
                    <a href="javascript:;" class="chose-size" data-id="1" id="wap-size" ctag="{&quot;bhv&quot;:&quot;Detail_Size&quot;,&quot;USIdKey&quot;:&quot;&quot;,&quot;USNameKey&quot;:&quot;&quot;,&quot;bhv_from&quot;:&quot;&quot;}">选择尺码
                        <em>(欧洲EU) </em>
                    </a>
                </dd>
            <dt>配送信息</dt>
                <dd>商品预计7-10个工作日内送达，不同款的商品由于发货地不同可能发货时间不同</dd>
            <dt>商品描述</dt>
            <dd>
                <span class="grey-f">商品编号：</span>{{detail.id}}<br>
                <span class="grey-f">商品名称：</span>{{detail.name}}<br>
                <span class="grey-f">商品货号：</span>ROMY85SUE MIDNIGHTBLUE<br>
                <span class="grey-f">产地：</span>意大利等，由于批次不同产地存在差异，请以收到实物为准<br>
                <span class="grey-f">材质：</span>麂绒面皮<br>
            </dd>
    </dl>
    <div class="product-link d-padding">
        <a  class="fa fa-angle-right">温馨提示</a>
        <a  class="fa fa-angle-right">用户评价<span class="comment_count">共0条</span></a>
        <a  class="fa fa-angle-right" >图文详情</a>
        <a  class="fa fa-angle-right">售后保养</a>
        <a  class="fa fa-angle-right" >JIMMY CHOO 品牌店</a>       
    </div>
    <div class="sp-customer clr">
        <a>
            <span class="customer_icon">
                <img src="http://css4.m.shangpin.com/styles/shangpin/ver3_0/images/product/detail/online.png">
            </span>
            <span class="customer_time">
            在线客服 <br>
            <em>9:00-22:00</em>
            </span>
        </a>
        <a class="call-phone" >
            <span class="customer_icon">
                <img src="http://css2.m.shangpin.com/styles/shangpin/ver3_0/images/product/detail/tel.png">
            </span>
            <span class="customer_time">
            电话客服 <br>
            <em>9:00-22:00</em>
            </span>
        </a>
    </div>

    <div id="guessList" class="produce_info d-padding">
        <dt class="d-recommend">猜你喜欢</dt>
        <dd>
            <div class="swiper-container swiper-container-horizontal" id="recommend-swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-slide-active" style="width: 110.333px; margin-right: 10px;">
                        <a>
                            <div class="div_img">
                                <img src="http://pic1.shangpin.com/f/p/16/08/12/20160812121859739216-10-10.jpg">
                            </div>
                            <div class="item-info">
                                <h5 class="item-name">GIANVITO ROSSI</h5>
                                <div class="item-detail">
                                <div class="item-price">
                                    <span class="refer-price" style="color:#c62026 "> ¥2767</span>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </dd>
    </div>

    <div class="submit-btn flex-box clr" id="select-submit">
        <a class="child-box gery-btn " id="wap-collect" @click="collect()">加入愿望清单</a>
        <a class="child-box blue-btn"  id="wap-buy" @click="addCar()">加入购物袋</a>
    </div>

    <div class="select-overlay" id="picker-overlay" style="display: none;" ref="overlay" @click="overlay()"></div>
    <div class="region-picker-wrapper" id="region-picker" style="transition-timing-function: ease-out; transition-duration: 400ms; transform: translate3d(0px, 0px, 0px);" ref="picker">
        <div class="region-header d-padding">
                <a class="size-table fa fa-angle-right">查看尺码对照表</a>
            </div>
        <div class="region-title d-padding">
            <a href="javascript:;" class="size-table ">尺码<span id="s_val">:35</span></a>
        </div>
        <div class="body">
            
            <mt-picker :slots="slots" @change="onValuesChange" style="width: 100%;">
    
            </mt-picker>
        </div>

        <!--加入购物袋或愿望清单-->
        <div class="submit-btn flex-box " id="submit-overlay"><a class="child-box blue-btn" id="sure-btn" data-type="buy" data-val="1">确定</a></div>
    </div>
  </div>
</template>

<script>
// -259.984px
import axios from 'axios'
import { Toast } from 'mint-ui';
import Swiper from 'swiper'
import { Picker } from 'mint-ui';
export default {
  name: 'DetailContent',
  data () {
    return {
      detail:[],
      slots: [
         {
          flex: 1,
          values: ['黑', '白', '红'],
          className: 'slot1',
          textAlign: 'center'
        },
        {
          flex: 1,
          values: ['35', '36', '37', '38', '39'],
          className: 'slot1',
          textAlign: 'center'
        },
        
      ]
    }
  },
  methods:{
    addCar(){
        // console.log(this.$refs.overlay)
        this.$refs.overlay.style.display = "block"
        this.$refs.picker.style.transform = "translate3d(0px, -259.984px, 0px)"
        this.$refs.picker.style.display = "block"
    },
    overlay(){
        this.$refs.overlay.style.display = "none"
        this.$refs.picker.style.transform = "translate3d(0px, 0px, 0px)"
    },
    collect(){
        Toast({
            message:"加入愿望单成功"
            //  this.$router.push(name:'car')
        })
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    getDetail(){
         axios.get("/static/json/mainShop.json?").then((res)=>{
            //  console.log(res.data[this.$route.params.id],11)
             this.detail = res.data[this.$route.params.id]
         })
     }
  },
  mounted(){
      this.getDetail()
  }

//   <div class="region-picker">
//                 <div id="detailProColor">
//                     <div id="wowerwrapper" class="UIPickerView-wrapper">
//                         <div id="wowerdeptch" class="UIPickerView-deptch">
//                             <ul id="wowercontains" style="transition-timing-function: cubic-bezier(0, 0, 0.2, 1); transform: translate3d(0px, 0px, 0px);">
//                                 <li style="font-size:0.14rem" data-no="30801845011">腰果色</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div id="wowerFrame" class="UIPickerView-frame">
//                         <div class="UIPickerView-empty"></div>
//                     </div>
//                 </div>
//             </div>
//             <div class="region-picker">
//                 <div id="detailProChima">
//                     <div id="wower1wrapper" class="UIPickerView-wrapper">
//                         <div id="wower1deptch" class="UIPickerView-deptch">
//                             <ul id="wower1contains" style="transition-timing-function: cubic-bezier(0, 0, 0.2, 1); transform: translate3d(0px, 0px, 0px); transition-duration: 100ms;">
//                                 <li style="font-size:0.14rem">35</li>
//                             </ul>
//                          </div>
//                     </div>
//                     <div id="wower1Frame" class="UIPickerView-frame">
//                         <div class="UIPickerView-empty"></div>
//                     </div>
//                 </div>
//             </div>
//             <div class="region-picker">
//                 <div class="surplusAmount">仅剩1件</div>
//             </div>

}
</script>

<style scoped>
  .detail-content{
    flex:1;
    overflow-y:scroll;
  }
  .detail-content, .detail-content a {
      color: #000;
  }
  .main {
      padding-bottom:0.45rem;
  }
  .product-title {
      text-align: center;
      padding-top: 0.05rem;
  }
  .d-padding {
      padding: 0 0.12rem;
  }
  .product-title h3, .price b {
      font-size: 0.16rem;
  }
  .product-title h3, .product-title p.first_buy {
      color: #000;
      font-weight: normal;
  }
  .product-title h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 0.225rem;
      word-break: break-all;
  }
  .product-title p {
    font-size: 0.14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    line-height:  0.225rem;
    word-break: break-all;
    white-space: nowrap;
}
  .product-title p.first_buy {
      color: #888;
  }
  .product-title h3, .product-title p.first_buy {
      font-size: 0.16rem;
      color: #000;
      font-weight: normal;
  }
  .product-title .price {
      font-size: 0.13rem;
      color: #888;
  }
  .product-title .price_tab {
      margin: 0.05rem auto;
  }
  .product-title .price_tab a {
      border: 1px solid #e5e5e5;
      padding: 0 0.05rem;
      height: 0.167rem;
      line-height: 0.167rem;
      text-align: center;
      display: inline-block;
      font-size: 0.12rem;
      box-sizing: border-box;
  }
  .produce_info, .produce_info a {
    font-size: 0.14rem;
    }
    .produce_info {
        line-height: 0.21rem;
        overflow: hidden;
    }
    .d-padding {
        padding: 0 0.12rem;
    }
    .produce_info dt.no-return {
        color: #888;
        font-size: 0.14rem;
        font-weight: normal;
        margin-top: 0;
    }
    .produce_info dt {
        font-weight: bold;
        margin: 0.15rem 0 0;
    }
    .produce_info dt.no-return span {
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: relative;
        top: 0.025rem;
        margin-right: 0.029rem;
    }
    .produce_info dt > span {
        font-weight: normal;
    }
    .produce_info dd {
        margin-top: 0.03rem;
        color: #000;
        font-size: 0.14rem;
        margin-left:0;
    }
    .produce_info .chose-size {
        font-size: 0.17rem;
        border: 1px solid #000;
        height: 0.45rem;
        line-height:0.45rem;
        width: 2.08rem;
        text-align: center;
        margin-top: 0.19rem;
        display: inline-block;
        box-sizing: border-box;
    }
    .produce_info .chose-size em {
        color: #888;
        font-weight: 400;
        font-size: 0.14rem;
    }
    .produce_info .grey-f {
        color: #000;
    }
    .d-center {
        text-align: center;
    }
    .product-link {
        margin-top: 0.25rem;
    }
    .product-link a:first-child {
        border-top: 1px solid #000000;
    }
    .product-link a {
        height:0.44rem;
        line-height: 0.44rem;
        width: 100%;
        font-size: 0.14rem;
        border-bottom: 1px solid #000000;
    }
    .sp-customer {
        margin-top: 0.3rem;
        margin-bottom: 0.095rem;
        padding: 0 0.12rem;
    }
    .sp-customer a {
        padding: 0.01rem 0;
        border-right: 1px solid #000000;
        display: block;
        float: left;
        width: 50%;
        height: 0.44rem;
        font-size: 0.14rem;
        text-align: center;
        box-sizing: border-box;
        border-top: 1px solid #000000;
        border-bottom: 1px solid #000000;
    }
    .sp-customer a .customer_icon {
        display: inline-block;
        width: 0.25rem;
        height: 0.25rem;
    }
    .sp-customer a .customer_time {
        display: inline-block;
        text-align: center;
    }
    .sp-customer a .customer_time em {
        font-size: 0.12rem;
        color: #888;
    }
    .sp-customer a:last-child {
        border-right: none;
    }
    .produce_info .d-recommend {
        margin-top: 0.3rem;
    }
    #recommend-swiper-container {
        margin-top: 0.13rem;
    }
    .item-info {
        padding: 0.075rem;
        color: #000;
        text-align: center;
    }
    .item-info .item-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.14rem;
        margin-top: 0.075rem;
        font-weight: normal;
    }
    .item-info .item-detail {
        overflow: hidden;
    }
    .item-info .item-detail .item-price {
        display: inline-block;
    }
    .item-info .item-detail .item-price span {
        display: inline-block;
        font-size: 0.14rem;
        color: #c62026;
    }
    #select-submit {
    position: fixed;
    }
    .submit-btn {
        position: absolute;
        bottom: -0.02rem;
        left: 0;
        z-index: 9999;
        width: 100%;
        height:0.47rem;
        line-height:0.47rem;
        font-size: 0.15rem;
    }
    .flex-box {
        display: flex;
    }
    .submit-btn a.gery-btn {
        color: #000;
        background: #f6f6f6;
    }

    .submit-btn a {
        font-size: inherit;
        color: #fff;
        box-sizing: border-box;
        border-top: 1px solid #ccc;
        text-align: center;
    }
    .child-box {
        width: 49%;
        display: block;
        box-flex: 1;
        flex: 1;
    }
    .submit-btn a.blue-btn {
        background: #0700c5;
    }
    .select-overlay {
        position: fixed;
        z-index: 99998;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,.4);
        display: none;
    }
    .region-picker-wrapper {
        height: 2.6rem;
        position: fixed;
        background-color: white;
        width: 100%;
        bottom:-2.6rem;
        z-index: 99999;
    }
    .region-picker-wrapper .region-header {
        height: 0.39rem;
        line-height: 0.39rem;
        border-bottom: 1px solid #E5E5E5;
        box-sizing: border-box;
    }
    .size-table {
        font-size: 0.15rem;
        display: block;
        width: 100%;
        height: inherit;
        line-height: inherit;
        color: #000;
    }
    .size-table::before {
        float: right;
        color: #000;
        font-size: 0.1875rem;
    }
    .region-picker-wrapper .region-title {
        height: 0.4rem;
        line-height: 0.4rem;
        box-sizing: border-box;
        font-size: 0.1875rem;
        text-align: center;
    }
    .region-picker-wrapper .body {
        display: flex;
        width: 100%;
        position: absolute;
        background-color: white;
    }
    .region-picker-wrapper .body .select-zone.top {
        height: 0.6rem;
    }
    .region-picker-wrapper .body .select-zone {
        pointer-events: none;
        position: absolute;
        width: 100%;
        display: block;
        z-index: 1100;
        background: #fff;
        opacity: 0.6;
    }
    .region-picker-wrapper .body .select-zone.middle {
        background: none;
        top: 0.6rem;
        border-top: solid #d1d1d1 1px;
        border-bottom: solid #d1d1d1 1px;
        height: 0.36rem;
        box-sizing: border-box;
        opacity: 0.8;
    }
    .region-picker-wrapper .body .select-zone.bottom {
        height: 0.7825rem;
        top: 0.96rem;
    
    }
    .region-picker-wrapper .body .region-picker {
        width: 33.3%;
        position: relative;
        flex: 1 1 0;
        height: 1.74rem;
        overflow: hidden;
    }
    .region-picker-wrapper .body .region-picker .UIPickerView-wrapper {
        position: relative;
        z-index: 999;
        display: block;
        height:1.05rem;
        overflow: hidden;
        margin-top: 0.25rem;
    }
    .region-picker-wrapper .body .region-picker .UIPickerView-wrapper .UIPickerView-deptch {
        height: 100%;
        padding-top: 0.36rem;
        background-color: #fcfcfc;
    }
    .region-picker-wrapper .body .region-picker li {
        height: 0.36rem;
        overflow: hidden;
        background-color: transparent;
        line-height: 0.36rem;
        font-size: 0.14rem;
        text-align: center;
    }
    .region-picker-wrapper .body .region-picker .UIPickerView-frame {
        pointer-events: auto;
        position: absolute;
        z-index: 1000;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-width: 0.16rem;
    }
    .surplusAmount {
    height: 100%;
    line-height: 0.3375rem;
    font-size: 0.14rem;
    margin-top: -0.11rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.control {
    display: none;
}

</style>
