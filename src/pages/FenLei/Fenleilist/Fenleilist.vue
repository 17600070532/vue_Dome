<template>
  <div class="bottom">
    <div  class="bottom_left wrapper">
      <ul class="content">
        <li :class="{in:indexs===index}" @click="indexss(index)" v-for="(data,index) in data1.categorys" :key="index">{{data.name}}</li>
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
        <!--<li>为你推荐</li>-->
      </ul>
    </div>
    <div class="bottom_right wrapper" v-if="list.length">
      <div class="content con">
        <div class="bottom_right_img" v-for="(lis,index) in list[indexs].cate_list" :key="index"  >
          <a href="#" >{{lis.title}}</a>
          <!--lis.title 分类名-->
          <ul class="ul_s">
            <li class="ul_li"  v-for="(li,i) in lis.list" :key="i">
              <a href="#" class="ul_li_a">
                <div class="ul_li_a_div"><img :src="li.photo||li.logo"></div>
                <p class="ul_li_a_p">{{li.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
export default{
  data(){
    return{
      indexs:0,
    }
  },
  mounted(){
    new BScroll('.bottom_left',{
      bounce:false,
      click: true
    })


    this.$store.dispatch('fenlei')
    this.$store.dispatch('list',()=>{
      this.$nextTick(()=>{
        new BScroll('.bottom_right',{
          bounce:false,
          click: true
        })
      })
    })
  },
  methods:{
    indexss(index){
      this.indexs = index
    },
    path(url){
      this.$router.replace(url)
    }
  },
  computed:{
    ...mapState(['data1','list']),
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .bottom
    width 100%
    margin-top 40px
    .bottom_left
      width 75px
      height 590px
      float left
      /*position fixed*/
      /*left 0*/
      /*top 40px*/
      /*bottom 0*/
      /*padding-bottom 45px*/
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
      height 627px
      border-top 5px solid #f3f4f5
      float left
      .con
        padding-bottom 55px
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
          overflow hidden
          border-bottom 1px solid #f3f4f5
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
