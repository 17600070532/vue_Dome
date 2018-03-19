<template>
<div>
  <div class="header">
    <div class="header_ha">
      <a href="#" class="header_ha_a" @click="$router.back()"></a>
      <span class="header_span">全部品牌</span>
      <span class="header_span1"></span>
    </div>
  </div>
  <div class="wrapper boxqq">
    <div class="allbrands content" v-if="quanbu.brand">
      <div class="allbrands_flexd"></div>
      <div class="allbrands_content" v-for="(q,index) in quanbu.brand" :key="index">
        <div class="allbrands_div">
          <h2>{{q.order}}</h2>
          <div class="allbrands_div_list" v-for="(lis,index) in q.list" :key="index">
            <a>
              <div class="allbrands_a_div">
                <div class="allbrands_img"><img :src="lis.logo"></div>
                <div class="allbrands_name">
                  <p>{{lis.name}}</p><br>
                  <p>{{lis.address}}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="zi_mu" >
      <div class="zi_mu_div" v-if="quanbu.brand">
        <div class="zi_mua" v-for="(b,index) in quanbu.brand" :key="index">
          <span :class="{bb:index===sindexs}">{{b.order}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
export default{
  data(){
    return{
      sindexs:0
    }

  },
  mounted(){
    this.$store.dispatch('quanbua',()=>{
      this.$nextTick(()=>{
        new BScroll('.boxqq',{
          bounce:false,
          click: true
        })
      })
    })
  },
  computed:{
    ...mapState(['quanbu'])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 50px
    position relative
    padding 0 10px
    border-bottom 1px solid #f3f3f3
    background #ffffff
    color #333
    .header_ha
      width 100%
      height 100%
      display flex
      line-height 50px
      .header_ha_a
        display block
        width 11px
        height 18px
        background url(./img.png) no-repeat
        background-size 234px 159px
        background-position -201px -10px
        position absolute
        margin-top 15px
        left 10px

      .header_span
        width 90%
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        display block
        margin 0 auto
        text-align center
      .header_span1
        background url(./img.png) no-repeat
        background-size 234px 163px
        height 18px
        width 17px
        background-position -217px -10px
        position absolute
        top 0
        right 10px
        outline 0
  .boxqq
    width 100%
    height 100%
    position fixed
    top 50px
    z-index 100
    left 0
    right 0
    .allbrands
      width 100%
      .allbrands_content
        width 100%
        .allbrands_div
          width 100%
          overflow hidden
          h2
            text-indent 15px
            line-height 24px
            font-size 12px
            color  #999
            background #f3f4f5
          .allbrands_div_list
            width 100%
            height 73px
            >a
              display block
              background #ffffff
              width 100%
              height 100%
              color #333
              .allbrands_a_div
                padding 10px
                border-bottom 1px solid #f3f4f5
                margin-right 20px
                overflow hidden
                .allbrands_img
                  text-align center
                  width 30%
                  max-width 150px
                  height 50px
                  border 1px solid #f3f4f5
                  float left
                  img
                    max-width 90%
                    height 40px
                    margin 5px auto


                .allbrands_name
                  margin 10px 0 5px 20px
                  float left
                  p
                    font-size 14px


    .zi_mu
      display flex
      flex-direction column
      justify-content center
      width 10px
      height 100%
      position fixed
      z-index 110
      top 0
      bottom 0
      right 4px
      .zi_mu_div

        .zi_mua
          vertical-align middle
          .bb
            color red
          span
            display block
            height 12px
            font-size 12px
            margin-top 2px

</style>
