<template>
<div class="box_allk"  v-if="pinpai.brand">
  <div class="box_allk_top2" v-for="(brand,index) in pinpai.brand" >
    <div class="box_allk_top2_div"><span>—— {{brand.title}} ——</span></div>
    <ul class="box_allk_top2_ul">
      <li class="box_allk_top2_ul_li" v-for="(lis,index) in brand.list">
        <a href="#" class="box_allk_a">
          <div><img :src="lis.logo"></div>
          <p>{{lis.name}}</p>
          <p>{{lis.address}}</p>
        </a>
      </li>
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="box_allk_top2_ul_li">-->
        <!--<a href="#" class="box_allk_a">-->
          <!--<div><img src="./3b236d1731bd91004bffcec3515e1a0a.jpg"></div>-->
          <!--<p>冠能</p>-->
          <!--<p>美国</p>-->
        <!--</a>-->
      <!--</li>-->
    </ul>
  </div>
  <div class="box_allk_fixed">
    <a  href="#" @click.prevent="$router.push('/quanbu')">全部</a>
  </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default{
  mounted(){
    this.$store.dispatch('brand')
  },
  methods:{
  },
  computed:{
    ...mapState(['pinpai'])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .box_allk
    width 100%
    height 100%
    padding-top 45px
    .box_allk_top2
      width 100%
      overflow hidden
      .box_allk_top2_div
        width 100%
        height 39px
        padding-top 20px
        text-align center
        >span
          color #999
          font-size 12px


      .box_allk_top2_ul
        padding 0 5px
        overflow hidden
        .box_allk_top2_ul_li
          width 33.333%
          height 107px
          float left
          padding 0 5px
          margin-top 20px
          .box_allk_a
            display block
            width 100%
            height 100%
            >div
              border 1px solid #e2e2e2
              padding 10px 14px
              text-align center
              >img
                display block
                width 100%
                height 40px

            >p
              text-align center
              padding  4px 0
              font-size 14px
    .box_allk_fixed
      >a
        display block
        width 40px
        height 40px
        position fixed
        right 6px
        bottom 65px
        z-index 10
        background rgba(0,0,0,0.4)
        line-height 40px
        border-radius 50%
        font-size 12px
        color #ffffff
        text-align center
</style>
