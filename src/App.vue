<template>
  <div id="app">
    <router-view></router-view>
    <Footera/>
  </div>
</template>

<script>
import Footera from './components/Footer/Footer.vue'

export default {
  components: {
    Footera
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
