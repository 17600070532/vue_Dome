<template>
  <div class="footernav bottom_menu_bar bgfff bottomBox">
    <ul class="footernav_ul">
      <li class="index-a dogon"><span @click="goto('/shouye')">首页</span></li>
      <li class="type-a"><span @click="goto('/fenlei')">分类</span></li>
      <li class="cart-a"><span @click="goto('/gouwuche')">购物车</span></li>
      <li class="myepet-a"><span @click="goto('/chongwu')">我的宠物</span></li>
    </ul>
  </div>
</template>
<script>
export default{
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.bottom_menu_bar
  width 100%
  position fixed
  bottom 0
  left 0
  height 45px
  background #ffffff
  .footernav_ul
    height 45px
    line-height 45px
    width 100%
    z-index 103
    border-top 1px solid #e7e7e7
    box-sizing content-box
    >li
      float left
      height 55px
      width 25%

</style>
