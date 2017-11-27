<template>
  <div class="app-main container">
      <app-header></app-header>
      <div class="app-container"> 
            <app-swiper></app-swiper>
            <div class="list-title">
                <a href="##">猜 你 喜 欢</a>
            </div>
             <div class="main-list">
                <app-main-list v-for="list in mainList" :key="list.id" :url="list.img" :title="list.title" :name="list.name"></app-main-list>
            </div>
            <div class="new">
                <div class="new_title">
                    <div class="newArrive">新品到货</div>
                    <div class="newMore">
                        <a href="##">更多   ></a>
                    </div>
                </div>
                <app-swiper-list></app-swiper-list>
            </div>
            <app-shop-list></app-shop-list>
      </div>
      <div class="app-footer">
        <app-footer></app-footer>
      </div>
      
  </div>
</template>

<script>
import AppSwiper from '../../components/AppSwiper/AppSwiper'
import AppMainList from '../../components/AppMainList/AppMainList'
import AppSwiperList from '../../components/AppSwiperList/AppSwiperList'
import AppFooter from '../../components/AppFooter/AppFooter'
import AppShopList from '../../components/AppShopList/AppShopList'
import AppHeader from '../../components/AppHeader/AppHeader'
import axios from 'axios'

export default {
  name: 'AppMain',
  components:{AppSwiper,AppMainList,AppSwiperList,AppFooter,AppShopList,AppHeader},
  data(){
      return {
          mainList:[]
      }
  },
  methods:{
      getMainList(){
          let that = this 
          axios.get('/static/mainList.json').then((res)=>{
              that.mainList = res.data
          })
      }
  },
  created(){
      this.getMainList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .app-main{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        background:#fff;
    }
      
      .app-container{
          flex:1;
          overflow:auto;

          .list-title{
              height:0.598rem;

              a{
                  display: block;
                  width: 0.835rem;
                  height: 0.3rem;
                  background-color: #0700c5;
                  color: #fff;
                  font-size: 0.13rem;
                  text-align: center;
                  line-height: 0.3rem;
                  margin:0.2rem auto;
              }
          }
          .new{
              width:100%;
              height:2.58rem;

              .new_title{
                    width:100%;
                    height:0.42rem;
                    overflow:hidden;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    font-size:0.14rem;
                    
                    padding:0 0.2rem;

                    .newArrive{
                        font-weight:bolder;
                    }
                    .newMore{
                        color:#888;
                    }
              }
          }
      }
</style>
