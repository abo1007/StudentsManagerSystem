

<template>
  <div id="app">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App',
  data:function () {
    return {flag:true}
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
  *{margin:0;padding:0;}
  body{
    background:url(../static/timg.jpg);
  }
.v-enter,.v-leave-to{
  opacity:0;
  transform:translateX(50px);
}
.v-enter-active,.v-leave-active{
  transition:all 0.6s ease;
}
</style>
