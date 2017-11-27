<template>
<div class="topshop-container">
  <top-shop-header type="TOPSHOP"></top-shop-header>
  <div class="TopShop container">     
      <div class="about-brand">
      	<div class="top-img-mask"></div>
      	<img src="http://pic3.shangpin.com/e/s/16/02/21/20160221115702873806-640-314.jpg" width="100%">
        <div class="about-brand-btn">
            <a class="follow_btn">关注</a>
            <a href="/brandStory/index?id=B1885&amp;type=0" class="">品牌故事</a>
        </div>
      </div>
      <top-shop-swiper url="../../../static/json/banner.json"></top-shop-swiper>
      <one-list url="http://pic5.shangpin.com/e/s/17/10/31/20171031111246283449-640-130.jpg"></one-list>
      <div class="one-two-list">
          <li>
            <a class="left-floor"><img alt="" src="http://pic5.shangpin.com/e/s/17/11/15/20171115142302394729-320-726.jpg"></a>
          </li>
          <li>
            <a class="right-up-floor" ><img alt="" src="http://pic6.shangpin.com/e/s/17/11/15/20171115142342705744-320-363.jpg"> </a>
          </li>
          <li>
            <a><img src="http://pic3.shangpin.com/e/s/17/11/15/20171115142417011452-320-363.jpg"/></a>
          </li>
      </div>
      <one-list url="http://pic6.shangpin.com/e/s/17/10/18/20171018181908645003-640-140.jpg"></one-list>
      <one-list url="http://pic6.shangpin.com/e/s/17/11/15/20171115142540940150-640-311.jpg"></one-list>
      <ul class="two-list clr">
					<li v-for="twoGood in twoGoods" :key="twoGood.id">
            <a class="right-down-floor"><img :src="twoGood.url"></a>
          </li>      
	    </ul>
       <one-list url="http://pic3.shangpin.com/e/s/17/11/03/20171103164537134616-640-78.jpg"></one-list>
       <one-list url="http://pic3.shangpin.com/e/s/17/05/26/20170526234020887063-640-100.jpg"></one-list>
       <ul class="four-list clr">
          <li v-for="fourList in fourLists" :key="fourList.id">
              <a class="right-down-floor"><img :src="fourList.url"> </a>
          </li>
		   </ul>
       <back></back>
       <app-shop-list></app-shop-list>
  </div>
</div>
</template>

<script>
import TopShopHeader from '../../components/TopShopHeader/TopShopHeader'

import TopShopSwiper from '../../components/TopShopSwiper/TopShopSwiper'
import oneList from "../../components/oneList/oneList"
import AppShopList from '../../components/AppShopList/AppShopList'
import back from '../../components/back/back'

import axios from 'axios'
export default {
  name: 'TopShop',
  data(){
    return {
      twoGoods:[],
      fourLists:[]
    }
  },
  components:{
    TopShopSwiper,oneList,AppShopList,back,TopShopHeader
  },
  methods:{
    getTwoList(){
      let that = this;
      axios.get("../../static/json/twoList.json").then((res)=>{
          console.log(res.data)
          that.twoGoods = res.data
      })
    },
    getFourList(){
        let that = this;
        axios.get("../../static/json/fourList.json").then((res)=>{
            console.log(res.data)
            that.fourLists = res.data
        })
     }
  },
  created(){
    this.getTwoList(),
    this.getFourList()
  }
}

</script>
<style scoped lang="scss">
.topshop-container{
  display:flex;
  flex-direction:column;
}
  .about-brand {
    position: relative;
    overflow: hidden;
    background-color: #000;
    height: 0.45rem;
    .top-img-mask {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .about-brand-btn {
      position: absolute;
      bottom:0.08rem;
      width: 80%;
      left: 10%;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
         a {
            display: block;
            padding: 0.03rem 0;
            padding-left: 0px;
            font-size: 0.13rem;
            color: #fff;
            margin: 0 0.1rem;
            border: 1px solid #fff;
            flex: 1;
            text-align: center;
        }
    }

}
.one-list {
    margin-top: 7px;
}
.one-two-list {
    overflow: hidden;
    margin-top: 7px;
    a {
      float: left;
      width: 50%;
      line-height: 0;
      display: block;
      box-sizing: border-box;
  }

}
.two-list {
    margin-top: 7px;
    margin-left: -2px;
    li {
      box-sizing: border-box;
      padding-left: 2px;
      width: 50%;
      float: left;
  }
}
.four-list{
   display:flex;
   flex-wrap: wrap;
   li{
      width:25%;
   }
}


 
</style>
