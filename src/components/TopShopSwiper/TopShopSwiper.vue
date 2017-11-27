<template>
  <div class="swiper-container" ref="container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner.id" :title="banner.title">
             <img :src="banner.url" width="100%"/>
        </div>
    </div>
     <div class="swiper-pagination">

     </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  name: 'TopShopSwiper',
  props:["url"],
  data () {
    return {
        banners:[]
    }
  },
  methods:{
    getBanners(){
        console.log(1)
        let that = this;
        axios.get(this.url).then((res)=>{
            console.log(res.data)
            that.banners = res.data
        })
    }
  },
  created(){
      this.getBanners()
  },
  updated(){
    new Swiper (this.$refs.container, {
        loop: true,
        pagination: {
            el:'.swiper-pagination'
        },
        autoplay:true
    })
  }

}
</script>

<style scoped>
.swiper-slide{
    height:auto
}   
</style>
