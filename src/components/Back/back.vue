<template>
      <div class="fixed-box">
          <div class="fixed-con" id="fixed-con" :class="{active: isActive}"> 
              <ul class="filtrate-box flex-box">
                  <li class="child-box" :class="{open:type=='sort'}" id="sort-btn" @click="changeType('sort')">排序</li>
                  <li class="child-box" :class="{open:type=='filter'}" id="filter-btn" @click="changeType('filter')">筛选</li>
              </ul>

             <div class="sort-box" :style="{display:type=='sort'?'block':''}">
                <a v-for="(a,index) in check" @click="selectSort(index)" :class="{'checked':ind===index}">{{a}}</a>
             </div>

             <div class="filter-box" :style="{display:type=='filter'?'block':''}">
                <div class="filter-list">
                    <a class="fa fa-angle-right" v-for="b in filter">{{b}}
                        <span id="category_desc"></span>
                    </a>
                </div>
            </div>

          </div>
          <div class="mask"></div>
      </div>
</template>

<script>
export default {
  name: 'back',
  data () {
    return {
      isActive:false,
      ind:'',
      check:["默认","最新","销量","价格（从高到底）","价格（从低到高）"],
      filter:["品类","颜色","尺码","价格范围","新品/Sale"],
      type:''
    }
  },
  mounted(){
      let that = this
      this.$parent.$el.addEventListener("scroll",function(e){
        //   console.log(this.scrollTop)
        if(this.scrollTop>1603){
            that.isActive=true;
        }else{
             that.isActive=false;
        }
      })
  },
  methods:{
    changeType(type){
      if(this.type==type){
           this.type=""
      }else{
          this.type = type
          this.isActive=true
      }
    },
    selectSort(index){
       this.ind = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fixed-box {
        height: 0.47rem;
        line-height: 0.47rem;
    }
    .fixed-con {
        position: relative;
        z-index: 11;
        width: 100%;
        background: #fff;
    }
    .filtrate-box {
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        height: 0.46rem;
        line-height:  0.46rem;
        font-size: 0.15rem;
        color: #888;
        text-align: center;
        position: relative;
        z-index: 11;
    }
    .flex-box{
        display:flex;
    }
    .filtrate-box li {
        position: relative;
    }
    .child-box {
        width: 49%;
        display: block;
        flex: 1;
    }
    .filtrate-box li.open {
        color: #000;
        background: #fff;
        font-size: 0.16rem;
        font-weight: normal;
        padding: 0px 0px;
        margin-top: 0px;
    }
    .filtrate-box li.open::after {
        content: '';
        width: 50%;
        height: 1px;
        background: #000;
        position: absolute;
        left: 50%;
        bottom: -1px;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
    }
    .active{
        position: fixed;
        top: 45px;
        z-index: 11;
    }
    .sort-box {
        display:none;
        margin-top: 0.01rem;
    }
    .sort-box a {
        position: relative;
    }
    .sort-box a, .filter-box h3, .filter-list a, .list-item, .list-item-title {
        display: block;
        font-size: 0.14rem;
        color: #000;
        padding: 0 0.12rem;
        height: 0.4rem;
        line-height: 0.4rem;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        position: relative;
    }
    
    .mask {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        display:none;
        right: 0;
        z-index: 10;
        background: rgba(0,0,0,0.6);
    }
    .maskActive{
        display:block;
    }
    .checked::after{
        content: '';
        width: 0.21rem;
        height: 0.21rem;
        display: block;
        position: absolute;
        left: 91%;
        top: 50%;
        margin-top: -0.1rem;
        background-image: url("http://css3.m.shangpin.com/styles/shangpin/ver3_0/images/list/check.png");
        background-size: 100%;
    }
     .filter-box{
         display:none
     }
    .filter-box .filter-list {
        color: #2d2d2d;
        font-size: 0.14rem;
        background: #fff;
    }
    .filter-list a::before {
        float: right;
    }
    .fa-angle-right:before {
        content: "";
        width: 0.1rem;
        height: 100%;
        background: url("http://css3.m.shangpin.com/styles/shangpin/images/arrow.png?2017") no-repeat center center;
        background-size: 0.082rem 0.082rem;
        display: block;
    }
    .filter-list a span {
        width: 1.22rem;
        display: block;
        text-align: right;
        float: right;
        padding-right: 0.075rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
