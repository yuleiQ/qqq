<template>
  <div class="app-shop-list">
    <div class="recommend_item-box" v-for="shopList in shopLists" :key="shopList.id">
				<a href="##">
					<div class="item-pic">
						<img :src="shopList.img">
					</div>
					<div class="item-info">
						<div class="flagDiv">
							<i class="item-status" v-show="shopList.tab">{{shopList.tab}}</i>
						</div>
						<h5 class="item-name">{{shopList.title}}</h5>
						<p class="item-desc">{{shopList.name}}</p>
						<div class="item-detail">
							<div class="item-price">
							  <span class="refer-price">¥{{shopList.price}}</span>
								<span class="promotion-price">
								    <span class="price-integer"></span>
							  </span>
						  </div>
						</div>
					</div>
				</a>
			</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AppShopList',
  data () {
    return {
      shopLists:[]
    }
  },
  methods:{
    getShopList(){
        let that = this
        axios.get('/static/mainShop.json').then((res)=>{
            that.shopLists = res.data
        })
    }
  },
  created(){
    this.getShopList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
      .recommend_item-box{
          float: left;
          width: 50%;
          overflow: hidden;
          margin: 0 0 0.075rem;
          box-sizing: border-box;
          padding-right: 0px;
          position: relative;

          a {
              display: block;
              background: #fff;
              position: relative;
              text-align: center;

              .item-pic {
                  -webkit-box-align: center;
                  -webkit-box-pack: center;

                  img {
                    width: 100%;
                    height: 100%;
                    background: #fff no-repeat center center;
                }
              }

              .item-info {
                  padding: 0.075rem;
                  color: #000;

                  .flagDiv{
                    height:0.21rem;

                    i.item-status{
                        display: inline-block;
                        height: 0.18rem; 
                        line-height: 0.18rem;
                        padding: 0 0.075rem;
                        background: #fff;
                        color: #000;
                        text-align: center;
                        font-size: 0.12rem;
                        border: 1px solid #e5e5e5;
                        width:0.45rem;
                    }
                  }
                  .item-name {
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      font-size: 0.13rem;
                      margin-top: 0.075rem;
                      font-weight: normal;
                  }
                  .item-desc {
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      margin-top: 0.075rem;
                      font-size: 0.13rem;
                      line-height: 0.15rem;
                  }
                  .item-detail {
                    margin-top: 0.075rem;
                    overflow: hidden;
                }
              }
          }
      }
</style>
