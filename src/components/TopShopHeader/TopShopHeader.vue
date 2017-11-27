<template>
  <header class="TopShop-header">
    <div id="headerMenu" class="header-menu">
        <div class="header-icon left-icon">
           <a class="backBtn fa fa-angle-left" id="_backBtn"></a>
           
        </div>
        <span class="logo">{{type}}</span>
        <div class="header-icon right-icon">
           <a class="icon js-search-icon">
              <img src="http://pic3.m.shangpin.com/styles/shangpin/ver3_0/images/public/home_icon.png">
           </a>
           <a class="icon" >
                <img src="http://pic6.m.shangpin.com/styles/shangpin/ver3_0/images/public/cart_icon.png">
                <em>0</em>
            </a>
        </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'TopShopHeader',
  props:['type'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .TopShop-header{
    width: 100%;
    height:0.45rem;
    background: #fff;
    position: relative;
    
    z-index: 11;
        .header-menu {
            width: 100%;
            height:0.45rem;
            overflow: hidden;
            background: #fff;
            display:flex;
            justify-content:space-between;
            align-items:center;
            box-sizing: border-box;
            border-bottom: 1px solid #ccc;
        }
        .right-icon .icon {
            margin-right: 0.075rem;
        }
        .header-icon{
            display:flex;
            justify-content:space-between;
            align-items:center;
            .backBtn {
                color: #000;
                font-size: 0.3rem;
            }
            .icon {
                display: inline-block;
                width: 0.25rem;
                height: 0.25rem;
            }
            .fa-angle-left:before {
                content: "";
                width: 0.33rem;
                height: 0.33rem;
                background: url(http://css3.m.shangpin.com/styles/shangpin/images/go_back.png?2017) no-repeat center center;
                background-size: 0.16rem 0.26rem;
                display: block;
            }
        }
        
        .logo {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          font-size: 0.1875rem;
          color: #444;
          margin-left:0.3rem;
      }
  }
</style>