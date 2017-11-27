<template>
  <div class="swiper-box">
      <div class="swiper-container my-swiper1">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="list in lists" :key="list.id">
                <a href="##">
                    <img :src="list.img" alt="">
                </a>
                <div class="newPro_list_desc">
                    <div class="newPro_list_logo logo">
                      <a href="##">
                        <img :src="list.brand" alt="" class="home_brand">
                      </a>
                    </div>
                    <div class="newPro_list_num">{{list.num}}款</div>
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name: 'AppSwiperList',
  data () {
    return {
        lists:[]
    }
  },
  methods:{
    getLists(){
      let that = this
      axios.get('/static/mainShopList.json').then((res)=>{
        // console.log(res.data)
        that.lists=res.data 
      })
    }
  },
  created(){
    this.getLists()
  },
  updated(){
      this.mySwiper1=new Swiper ('.my-swiper1', {
        loop: true,
        slidesPerView : 3
      }) 
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
      .swiper-box{
          width:100%;
          height:2.15rem;

          .swiper-slide{
              a{
                display:block;
                width:1.25rem;
                height:1.6666rem;

                img{
                  width:1.25rem;
                  height:1.6666rem;
                }
              }
              .newPro_list_desc{
                width:1.25rem;
                display:flex;
                justify-content:space-around;
                align-items:center;
                .newPro_list_logo{
                  a{
                    display:block;
                    width:0.6975rem;
                    height:0.3rem;
                    img{
                      width:0.6975rem;
                      height:0.3rem;
                    }
                  }
                }
                .newPro_list_num{

                }
              }
          }
      }
</style>
