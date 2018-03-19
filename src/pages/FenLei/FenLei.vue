<template>
<div class="box">
  <div class="box_top">
    <div class="header">
      <div class="header_left"><router-link to="/fenlei/fenleilist"><span  :class="{colora:isall}" @click="all(true)">分类</span></router-link></div>
      <div class="header_right"><router-link to="/fenlei/pinpai"><span :class="{colora:!isall}" @click="all(false)">品牌</span><img src="./images/search.png" alt=""></router-link></div>
    </div>
    <router-view></router-view>
  </div>
</div>
</template>
<script>
export default{
  data(){
    return{
      isall:true
    }
  },
  methods:{
    all(arr){
      this.isall = arr
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .box
    width 100%
    .box_top
      width 100%
      .header
        width 100%
        height 40px
        padding 0 15px
        position fixed
        border-bottom 1px solid #cbcbcb
        top 0
        .header_left
          width:50%
          height 100%
          float left
          padding-right 20px
          a
            display block
            color #333
            text-align right
            line-height 40px
            font-size 13px
            span
              display inline-block
            .colora
              color #ed4044
              border-bottom 2px solid #ed4044
        .header_right
          width 50%
          height 100%
          float right
          padding-left 20px
          a
            display block
            color #333
            text-align left
            line-height 40px
            font-size 13px
            span
              display inline-block
            .colora
              color #ed4044
              border-bottom 2px solid #ed4044
            img
              display block
              width 14px
              height 14px
              float right
              margin-top 13px

</style>
