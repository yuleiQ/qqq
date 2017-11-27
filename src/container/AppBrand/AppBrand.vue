<template>
  <div class="app-brand container">
    <top-shop-header type="品牌"></top-shop-header>
    <div class="appBrand">
        <ul class="nav_title clr" id="nav_title" style="position: fixed; top: 45px; z-index: 11;">
            <li :class="{cur:type=='wonmen'}" style="width: 33.3333%;" @click="changeType('wonmen')"><a>女士</a></li>
            <li :class="{cur:type=='man'}" @click="changeType('man')" style="width: 33.3333%;" ><a>男士</a></li>
            <li :class="{cur:type=='child'}" @click="changeType('child')" style="width: 33.3333%;" ><a>儿童</a></li>
        </ul>
        
         <brand-list></brand-list>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>

import TopShopHeader from '../../components/TopShopHeader/TopShopHeader'
import AppFooter from '../../components/AppFooter/AppFooter'
import BrandList from '../../components/BrandList/BrandList'
import bus from '../../bus'
export default {
  name: 'AppBrand',
  data () {
    return {
      type:"wonmen"
    }
  },
  methods:{
      changeType(type){
          this.type=type,
          bus.$emit('changeType',type)
      }
  },
  components:{
      AppFooter,TopShopHeader,BrandList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .app-brand{
        display:flex;
        flex-direction:column;
        
    }
    .appBrand, .appBrand a {
        color: #000;
    }
    .appBrand{
        height: 0.44rem;
        position:relative;
        flex:1;
        overflow-y:scroll;
        padding-top: 0.6rem;
    }
    .nav_title {
        height: 0.44rem;
        line-height:0.44rem;
        border-bottom: 1px solid #E5E5E5;
        width: 100%;
        background: #fff;
    }
    .nav_title li {
        height:0.44rem;
        float: left;
        font-size: 0.14rem;
        color: #000;
        text-align: center;
        box-sizing: border-box;
    }
    .nav_title li a {
        color: #888;
        display: inline-block;
        width: 0.8rem;
    }
    .nav_title li.cur a {
        font-weight: bold;
        color: #000;
        font-size: 0.14rem;
    }
</style>
