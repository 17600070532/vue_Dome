<template>
<div class="box">
  <div class="box_top">
    <div class="header">
      <div class="header_left"><a href="#" ><span class="colora">分类</span></a></div>
      <div class="header_right"><a href="#"><span>品牌</span><img src="./images/search.png" alt=""></a></div>
    </div>
    <div class="bottom">
      <div  class="bottom_left">
        <ul>
          <li class="in">为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
        </ul>
      </div>
      <div class="bottom_right">
        <div class="bottom_right_img">
          <a href="#">热门分类</a>
          <ul class="ul_s">
            <li class="ul_li">
              <a href="#" class="ul_li_a">
                <div class="ul_li_a_div"><img src="./images/guochan.jpg"></div>
                <p class="ul_li_a_p">国产狗粮</p>
              </a>
            </li>
            <li class="ul_li">
              <a href="#" class="ul_li_a">
                <div class="ul_li_a_div"><img src="./images/guochan.jpg"></div>
                <p class="ul_li_a_p">国产狗粮</p>
              </a>
            </li>
            <li class="ul_li">
              <a href="#" class="ul_li_a">
                <div class="ul_li_a_div"><img src="./images/guochan.jpg"></div>
                <p class="ul_li_a_p">国产狗粮</p>
              </a>
            </li>
            <li class="ul_li">
              <a href="#" class="ul_li_a">
                <div class="ul_li_a_div"><img src="./images/guochan.jpg"></div>
                <p class="ul_li_a_p">国产狗粮</p>
              </a>
            </li>
            <li class="ul_li">
              <a href="#" class="ul_li_a">
                <div class="ul_li_a_div"><img src="./images/guochan.jpg"></div>
                <p class="ul_li_a_p">国产狗粮</p>
              </a>
            </li>
            <li class="ul_li">
              <a href="#" class="ul_li_a">
                <div class="ul_li_a_div"><img src="./images/guochan.jpg"></div>
                <p class="ul_li_a_p">国产狗粮</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import BScroll from 'better-scroll'

export default{
  mounted:{
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
            img
              display block
              width 14px
              height 14px
              float right
              margin-top 13px
      .bottom
        width 100%
        height 313px
        margin-top 40px
        .bottom_left
          width 75px
          position fixed
          left 0
          top 40px
          bottom 0
          padding-bottom 45px
          border-right 5px solid #f3f4f5
          ul
            li
              width 70px
              padding 15px 0
              height 50px
              font-size 13px
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              text-align center
              border-bottom 1px solid #f3f4f5
            .in
              color #ed4044
              background #f3f4f5
        .bottom_right
          width 300px
          margin-left 75px
          border-top 5px solid #f3f4f5
          .bottom_right_img
            padding 5px 5px 20px
            >a
              font-size 12px
              display block
              color #999
              padding-left 5px
              margin-top 10px
            .ul_s
              width 100%
              .ul_li
                width 33.333%
                padding 0  5px
                margin-top 10px
                float left
                .ul_li_a
                  display block
                  color #333
                  .ul_li_a_div
                    width 86px
                    height 86px
                    >img
                      width 100%
                      height 100%

                  .ul_li_a_p
                    display block
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    height 20px
                    font-size 13px
                    margin-top 10px
                    text-align center
                    color #333
</style>
