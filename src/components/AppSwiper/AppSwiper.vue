<template>
  <div class="swiper-box">
      <img class="ad_img" src="http://pic3.shangpin.com/e/s/17/03/20/20170320114354478945-0-0.jpg" alt="">
      <div class="swiper-container my-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
                <img :src="banner.url" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <a href="##" class="active_ad">
      <img src="http://pic4.shangpin.com/e/s/17/08/08/20170808142249964833-640-100.jpg" alt="">
    </a>
  </div>
  
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name: 'AppSwiper',
  data () {
    return {
        banners:[]
    }
  },
  methods:{
    getBanners(){
      let that = this
      axios.get('/static/banner.json').then((res)=>{
        console.log(res.data)
        that.banners=res.data
      })
    }
  },
  created(){
    this.getBanners()
  },
  updated(){
     this.mySwiper =  new Swiper ('.my-swiper', {
        loop: true,
        pagination: {
          el:'.swiper-pagination'
        },
        autoplay:true
      })        
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
      .swiper-box{
          position:relative;

          .ad_img{
            position:absolute;
            left:0.075rem;
            bottom:0.0375rem;
            width:0.1875rem;
            height:0.09375rem;
            z-index:3;
          }
          .my-swiper{
            width:100%;
            height:2.34rem;

            img{
              width:100%;
              height:100%;
            }
          }
          .active_ad{
            display:block;
            width:100%;
            height:0.5859rem;
            img{
              width:100%;
              height:100%;
            }
          }
      }
      .swiper-pagination{
        margin-bottom:-0.1rem;
        span.swiper-pagination-bullet-active{
          background:#ccc;
        }
      }
</style>
