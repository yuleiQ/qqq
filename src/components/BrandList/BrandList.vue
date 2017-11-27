<template>
 <mt-index-list>
    <ul class="brand_pic clr clearfix">
        <li class="brand_pic clr" v-for="imgitem in BrandImgs" :key="imgitem.id">
            <a><img :src="imgitem.url"></a>
        </li>
    </ul>
    <mt-index-section v-for="(item,index) in brands" :index="item.pinyin" :key="index">
        <mt-cell v-for="(i,index) in item.cityList" :title="i" :key="index"></mt-cell>
    </mt-index-section>
</mt-index-list>
</template>
<script>
import bus from '../../bus'
import { IndexList, IndexSection } from 'mint-ui'
import axios from 'axios'
export default {
  name: 'BrandList',
  data () {
    return {
      brands:[],
      BrandImgs:[]
    }
  },
  methods:{
      getBrands(){
          let that = this
          axios.get("/static/json/brand.json",{

          }).then((res)=>{
            // console.log(res.data)
            that.brands = res.data
          })
    },
    getBrandImg(){
          let that = this
          axios.get("/static/json/brandsImg.json",{

          }).then((res)=>{
            // console.log(res.data)
            that.BrandImgs = res.data
          })
    },
    changeType(type){
        this.brands=[],
        this.BrandImgs = [],
        this.type=type,
        this.getBrands(),
        this.getBrandImg()
    }
  },
  mounted(){
      this.getBrands(),
      this.getBrandImg(),
      bus.$on("changeType",function (type) {
        this.changeType(type)
    }.bind(this))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .brand_pic {
        padding: 0.05rem 0rem 0.05rem 0.1rem;
        margin-top:-0.13rem;
    }
    .brand_pic li {
        width: 0.955rem;
        height:0.589rem;
        float: left;
        margin-right: 0.1rem;
    }
    .brand_pic li a {
        width: 100%;
        height:100%;
    }
    .mint-indexlist-nav{
        border-left:0
    }
   
</style>
