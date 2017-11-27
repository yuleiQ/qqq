<template>
  <div class="app-detail">
     <top-shop-header></top-shop-header>
     <detail-content></detail-content>
  </div>
</template>

<script>
import TopShopHeader from '../../components/TopShopHeader/TopShopHeader'
import DetailContent from '../../components/DetailContent/DetailContent'

export default {
  name: 'AppDetail',
  data () {
    return {
      
    }
  },
  components:{
    TopShopHeader,DetailContent
  }
}
</script>

<style scoped>
.app-detail{
  display:flex;
  flex-direction:column;
  height:100%;
}
</style>
