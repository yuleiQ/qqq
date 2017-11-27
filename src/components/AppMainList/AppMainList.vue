<template>
    <div class="main-list-item">
        <a href="##">
          <img alt="" :src="url" class="lazyloaded">
          <div class="text">
              <h3>{{title}}</h3>
              <p>{{name}}</p>
          </div>
        </a>
    </div>
</template>

<script>
export default {
  name: 'AppMainList',
  props:['url','title','name'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .main-list-item{
      width:100%;
      height:2.34rem;
      position:relative;
      img{
        width:100%;
        height:100%;
      }
      .text {
        position: absolute;
        bottom: -2px;
        left: 17%;
        width: 2.5rem;
        height:0.54rem;
        padding: 0.1rem 0.15rem 0.1rem;
        box-sizing: border-box;
        background: #fff;
        text-align:center;
        color: #000;
        font-weight:bold;
        h3{
          font-size:0.12rem;
          text-transform:uppercase;
        }
        p{
          font-size:0.16rem;
        }
      }
    }
</style>
