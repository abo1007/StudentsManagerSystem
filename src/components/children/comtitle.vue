<template>
    <div id="app">
        <h1>{{ titlemsg }}</h1>
    </div>
</template>

<script>
    export default {
      name: "comtitle",
      data(){
        return{
        }
      },
      props:['titlemsg']
    }
</script>

<style scoped>
  *{margin:0;padding:0;}
  h1{
    height:50px;line-height:50px;background:#1E90FF;color:#fff;padding-left:30px;
  }
</style>
