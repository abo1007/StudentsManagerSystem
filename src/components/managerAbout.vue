<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>关于本系统</h1>
      </el-header>
      <el-main>
        <el-row class="title">
          <p>学生管理系统 @Abo.com 2020</p>
        </el-row>
        <el-row class="content">
          <p>相关技术: Vue VueRouter VueComponent</p>
        </el-row>
        <el-row class="content">
          <p>技术支持: VueJs NodeJS ElementUI MongoDB（-_- 用没用到我也不知道）</p>
        </el-row>
        <el-row class="content">
          <p>开发作者: AI Thabo</p>
        </el-row>
        <el-row class="content">
          <p>前端系统版本: 0.0.5</p>
        </el-row>
        <el-row class="content">
          <p>后端系统版本: 0.0.0</p>
        </el-row>
      </el-main>
      <el-footer>
        <el-row class="date">
          <p>{{newDate}}</p>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "managerAbout",
        data(){
          return{
            newDate:new Date()
          }
        }
    }
</script>

<style scoped>
  *{margin:0;padding:0;}
  h1{
    height:50px;line-height:50px;background:#1E90FF;color:#fff;padding-left:30px;
  }
  .title,.content{
    margin:20px 0;
    padding-left:20px;
    font-size:20px;
  }
  .title{
    font-weight:bold;
  }
  .content{

  }
  .date p{
    text-align: center;
  }
</style>
