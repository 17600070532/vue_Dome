<template>
  <div class="box">
    <div class="box_better ">
        <div class="header_top">
          <a href="#"><img src="./images/advertisement.jpg"></a>
        </div>
        <div class="header">
          <div class="header_shang">
            <a href="#" class="header_a">
              <span>狗狗</span>
              <span> | </span>
              <span>重庆</span>
            </a>
            <div class="header_input">
              <a href="#">
                <input type="text" placeholder="搜索商品">
                <span class="ico"></span>
              </a>
            </div>
            <a href="#" class="header_xia"><img src="./images/mydope.png"></a>
          </div>
          <div class="header_bottom">
            <div class="swiper-container navs">
              <div class="swiper-wrapper navs_sw">
                <div class="swiper-slide nav_swi"><a href="#">首页</a></div>
                <div class="swiper-slide nav_swi"><a href="#">狗狗主粮</a></div>
                <div class="swiper-slide nav_swi"><a href="#">服饰城</a></div>
                <div class="swiper-slide nav_swi"><a href="#">医疗保健</a></div>
                <div class="swiper-slide nav_swi"><a href="#">零食玩具</a></div>
                <div class="swiper-slide nav_swi"><a href="#">日用外出</a></div>
                <div class="swiper-slide nav_swi"><a href="#">美容香波</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="box_better_bottom wrapper wrapp">
          <div class="box_bt content">
            <div class="swiper-container swiper-container-horizontal _LunBo">
              <div class="swiper-wrapper _lunBo_ul">
                <div class="swiper-slide _lunBo_li"><a href="#"><img src="./images/zhuliang.jpg"></a></div>
                <div class="swiper-slide _lunBo_li"><a href="#"><img src="./images/zhuliang.jpg"></a></div>
                <div class="swiper-slide _lunBo_li"><a href="#"><img src="./images/zhuliang.jpg"></a></div>
                <div class="swiper-slide _lunBo_li"><a href="#"><img src="./images/zhuliang.jpg"></a></div>
                <div class="swiper-slide _lunBo_li"><a href="#"><img src="./images/zhuliang.jpg"></a></div>
                <div class="swiper-slide _lunBo_li"><a href="#"><img src="./images/zhuliang.jpg"></a></div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
            </div>
            <div class="box_better_imgs"><a href="#"><img src="./images/dog.jpg"></a></div>
            <div class="box_better_uls">
              <ul>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
                <li><a href="#"><img src="./images/aaa.jpg"></a></li>
              </ul>
            </div>
            <div class="box_better_imgs1">
              <a href="#"><img src="./images/miaosha.jpg"></a>
            </div>
            <div class="box_better_imgs1">
              <a href="#"><img src="./images/miaosha.jpg"></a>
            </div>
            <div class="box_better_imgs1">
              <a href="#"><img src="./images/miaosha.jpg"></a>
            </div>
            <div class="box_better_imgs2">
              <div class="box_div">
                <div class="box_div_left"><a href="#"><img src="./images/fengqiang.png"></a></div>
                <div class="box_div_right">
                  <span>本场结束</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import BScroll  from 'better-scroll'
import 'swiper/dist/css/swiper.css'
  export default{
    mounted (){
      new BScroll('.wrapp',{
        click: true
      })

      new Swiper('.navs',{
        slidesPerView: 5,
//        loop:true
      })


      var swiper = new Swiper('._LunBo', {
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .box
    width 100%
    height 100%
    .box_better
      width 100%
      /*height 100%*/
      .header_top
        display none
        width 100%
        height 55px
        position fixed
        top 0
        left 0
        >a
          display block
          width 100%
          height 100%
          >img
            width 100%
            height 100%
      .header
        width 100%
        height 86px
        background #ffffff
        position fixed
        z-index 100
        top 0
        .header_bottom
          width 100%
          height 36px
          .navs
            height 100%
            .navs_sw
              width 100%
              .nav_swi
                width 74px
                height 100%
                >a
                  display block
                  width 100%
                  height 100%
        .header_shang
          display flex
          padding 13px 10px
          width 100%
          height 51px
          align-items center
          .header_xia
            width 35px
            height 25px
            >img
              height 100%
              display block
              margin-left 10px
          .header_a
            width 66px
            height 22px
            display flex
            color #333
            font-size 14px
            margin-right 20px
            text-align center

          .header_input
            width 233px
            height 25px
            position relative
            >a
              width 100%
              height 100%
              display block
              color #333
              .ico
                width 11px
                height 11px
                position absolute
                right 5px
                bottom 0
                top 0
                margin auto 0
                background url("./images/search.png")
                background-position 0 0
                background-size 11px 0
              >input
                width 100%
                height 100%
                background #e9e9e9
                border-radius 4px
                color #bcbcbc
                text-indent 10px
                font-size 13px
                outline 0
      .box_better_bottom
        width 100%
        height 140px
        ._LunBo
          width 100%
          height 160px
          ._lunBo_ul
            width 100%
            height 160px
            ._lunBo_li
              width 100%
              height 100%
              a
                display block
                width 100%
                height 100%
                >img
                  width 100%
                  height 100%
        .box_better_imgs
          width 100%
          height 270px
          a
            display block
            width 100%
            height 100%
            img
              width 100%
              height 100%


        .box_better_uls
          width 100%
          height 190px
          ul
            width 100%
            height 100%
            li
              width 20%
              height 95px
              float left
              a
                display block
                width 100%
                height 95px
                img
                  width 100%
                  height 100%
                  display block
        .box_better_imgs1
          width 100%
          height 98px
          a
            display block
            width 100%
            height 98px
            >img
              width 100%
              height 100%


        .box_better_imgs2
          width 100%
          height 170px
          .box_div
            width 100%
            height 40px
            padding 10px
            .box_div_left
              width 85px
              height 20px
              >a
                width 100%
                height 100%
                img
                  width 100%
                  height 100%

            .box_div_right
              width 190px
              height 40px
              float right
              span
                width 100%
                height 100%
</style>
