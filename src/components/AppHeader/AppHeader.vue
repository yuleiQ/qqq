<template>
  <div class="app-header">
        <header class="header-box">
          <div class="header-menu" id="headerMenu">
              <div class="header-icon left-icon">
                  <a @click="isNavShow = !isNavShow">
                    <img src="http://pic4.m.shangpin.com/styles/shangpin/ver3_0/images/home/list-icon.png" alt="">
                  </a>
              </div>
              <div  class="logo">
			            <img src="http://pic6.m.shangpin.com/styles/shangpin/ver3_0/images/public/logo2.png">
              </div>
              
              <div class="header-icon right-icon">
                  <a>
                      <img src="http://pic6.m.shangpin.com/styles/shangpin/ver3_0/images/public/search_icon.png" alt="">
                  </a>
                  <a>
                      <img src="http://pic2.m.shangpin.com/styles/shangpin/ver3_0/images/public/cart_icon.png" alt="">
                  </a>
              </div>
          </div>


          <transition enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut">
            <div @click="change()" v-if="isNavShow" class="mask"></div>
          </transition>
          <transition enter-active-class="fast-animate slideInLeft"  leave-active-class="fast-animate slideOutLeft">
            <nav v-if="isNavShow" class="nav">
              <ul>
                <li class="nav-item" v-for="(nav,i) in navs" :key="i"><a @click="change(nav.path)">{{nav.title}}  <icon name="angle-right"></icon></a></li>
              </ul>
            </nav>
          </transition>


      </header> 



  </div>



</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      isNavShow:false,
      navs:[
        {title:'首页',path:'/'},
        {title:'分类',path:'/category'},
        {title:'TopShop',path:'/topshop'},
        {title:'品牌',path:'/brand'},
        {title:'我的',path:'/mine'}
      ]
    }
  },
  methods:{
    change(path){
      this.isNavShow=false;
      if(path){
        // console.log(this.userInfo)
        if(path=='/mine'){
            this.$router.push('login')
        }else{
            this.$router.push(path)
        }
        
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
      .mask,.nav{
        width:100%;
        height:100vh;
        background:rgba(0,0,0,0.3);
        position:absolute;
        top:0;
        left:0;
        z-index:997;
      }
      .nav{
          z-index:998;
          width:2.65rem;
          background:#282828;
          padding-top:50px;
          opcity:0.8;
          li{
            height:50px;
          }
          a{
            height:100%;
            padding:0px 0.16rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            color:#999;
            font-size:0.16rem;
          }
        }

      .header-box{
          width:100%;
          height:0.45rem;
          background:#fff;
          position:relative;

          .header-menu{
              width:100%;
              height:0.45rem;
              overflow:hidden;
              background:#fff;
              padding:0.09375rem 0;
              border-bottom:1px solid #ccc;
              display:flex;
              justify-content:space-between;
              align-items:center;
              z-index:999;
              position:relative;

              a{
                display:block;
              }
              .left-icon{
                  img{
                    width:0.25rem;
                    height:0.25rem;
                  }
                  margin-left:0.07rem;
                  margin-right:0.4rem;
              }
              .logo{
                  text-align: center;
                  font-size: 0.35rem;
                  color: #444;
                  line-height: 0.2625rem;

                  img{
                    margin:0.05rem 0.234rem;
                    width:1.45rem;
                  }
              }

              .right-icon{
                  display:flex;
                  justify-content:space-between;
                  align-items:center;

                  img{
                    width:0.25rem;
                    height:0.25rem;
                  }
                  
                  a{
                      margin-right:0.07rem;
                  }
              }
          }
      }
</style>
