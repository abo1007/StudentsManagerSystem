<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>总览页面</h1>
      </el-header>
      <el-main>
        <el-row class="title">
          <p>学生管理系统 总览</p>
        </el-row>
        <el-row class="content">
          <p>当前管理学生人数: &nbsp;  {{studentsNum}}</p>
        </el-row>
        <el-row class="content">
          <p>今日新增学生人数: &nbsp; {{studentsAddNum}}</p>
        </el-row>
        <el-row class="content">
          <p>今日修改学生人数: &nbsp; {{studentsUpdateNum}}</p>
        </el-row>
        <el-row class="content">
          <p>今日业绩完成率</p>
          <el-progress :percentage="workComplete"></el-progress>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "manager-all",
        data(){
          return{
            studentsNum:0,
            studentsAddNum:0,
            studentsUpdateNum:0,
            workComplete:0,
            studentsList:[]
          }
        },
        methods:{
          postStudentsNum(){
            this.$axios.get('http://127.0.0.1:9091/getall').then(result => {
              // console.log(result)
              this.studentsList = result.data
              this.studentsNum = this.studentsList.length
              this.studentsAddNum = this.studentsList.length - 20 // 临时数据
              this.studentsUpdateNum = this.studentsList.length  // 临时数据
              this.workComplete = (this.studentsList.length -20) * 10  // 临时数据
            }).catch(err => {
              console.log(err)
            })
          }
        },
        created() {
          this.postStudentsNum()
        }
    }
</script>

<style scoped>
  *{margin:0;padding:0;}
  h1{
    height:50px;line-height:50px;background:#1E90FF;color:#fff;padding-left:30px;
  }
  .title,.content{
    height:50px;font-size:20px;padding-left:20px;
  }
  .title{
    font-weight:bold;margin:10px 0;
  }
</style>
