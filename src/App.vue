<template>
  <div id="app">
    <router-view></router-view>
    <tabs></tabs>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'


export default {
  components: { Tabs }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: url("./assets/img/back.jpg") 18% 50%/cover  no-repeat;
} */

</style>
