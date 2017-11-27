<template>
  <div class="app-footer">
      <a href="##" class="active">
          <icon name="vine" class="iconfont"></icon>
          <span>首页</span>
      </a>
      <a href="##">
          <icon name="search" class="iconfont"></icon>
          <span>分类</span>
      </a>
      <a href="##">
         <img class="center" src="http://pic6.shangpin.com/e/s/17/10/11/20171011105633338767-0-0.jpg" alt="">
      </a>
      <a href="##">
          <icon name="diamond" class="iconfont"></icon>
          <span>品牌</span>
      </a>
      <a href="##">
          <icon name="user-o" class="iconfont"></icon>
          <span>我的</span>
      </a>    
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .app-footer{
        width:100%;
        height:0.5rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        font-size:0.14rem;
        color:#ccc;
        border-top:1px solid #ccc;
        span{
            color:#ccc;
        }
        a{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            height:0.48rem;
            width:0.75rem;
            padding-top:0.0375rem;

            .iconfont{
                font-size:0.2rem!important;
                color:#ccc;
            }
        }
        .center{
            margin:0 auto;
            width:53%;
        }
        .active{
            .iconfont{
                color:#000;
            }
            span{
                color:#000;
            }
        }
    }
</style>
