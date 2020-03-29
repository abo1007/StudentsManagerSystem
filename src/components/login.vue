<template>
  <div id="all">
    <div class="top">
      <h3>学生信息管理系统</h3>
    </div>
    <div id="app">
      <h2>学生信息管理系统登录</h2>
      <el-row class="row1">
        <el-col :span="6" class="col1-1">
         用户名
        </el-col>
        <el-col :span="16" class="col1-2">
          <el-input :span="6" v-model="userid" id="usernamee" placeholder="用户名"></el-input>
        </el-col>
      </el-row>
      <el-row class="row2">
        <el-col :span="6" class="col1-1">
          密码
        </el-col>
        <el-col :span="16" class="col1-2">
          <el-input placeholder="请输入密码 1234" id="pass" v-model="userPassword" show-password></el-input>
        </el-col>
      </el-row>
      <el-row class="row3">
        <el-col :span="24" class="col1-1">
          <el-button type="primary" @click="getlogin">登录 Login</el-button>
        </el-col>
      </el-row>
      <el-row class="row3">
        <el-col :span="24" class="col1-1">
          <el-button type="primary" @click="getregister">注册 Register</el-button>
        </el-col>
      </el-row>
      <el-row class="row4">
        <el-col :span="24" class="col1-1">
          <h3 :class="{'active':isactive}">{{ logininformation }}</h3>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return{
          userid:'10001',
          userPassword:'',
          logininformation:'Abo.lnc',
          isactive:false
        }
      },
      methods:{
        getlogin(){
          this.$axios.get('http://127.0.0.1:9091/tomanager?Uid=' + this.userid + '&userPassword=' + this.userPassword).then(result => {
            // console.log(result)
            var userData = result.data
            if(userData.Uid == this.userid && userData.userPassword == this.userPassword ){
              this.$router.push("manager")
            }else if(!userData){
              this.logininformation = '密码错误'
              this.isactive = true
              setTimeout(() =>{
                this.logininformation = 'Abo.lnc'
                this.isactive = false
              },5000)
            }
          }).catch(err => {
            console.log(err)
          })

        },
        getregister(){
          alert('未开放！')
        }
      }
    }
</script>

<style scoped>
  *{margin:0;padding:0;text-decoration:none;list-style:none;}
  #all{
    width:100%;height:100vh;
  }
  .top{
    width:100%;height:40px;background:rgba(30,144,255,0.6);border-bottom:1px solid #4d4d4d;
  }
  .top h3{
    color:#fff;line-height:40px;margin:0;padding-left:20px;
  }
  #app{
    height:400px;width:600px;border:2px solid #00BFFF;
    margin:0 auto;position:relative;top:100px;
    text-align:center;background:rgba(255,255,255,0.4);
  }
  h2{
    margin:20px 0;
  }
  .row1{
    margin-top:30px;height:45px;
  }
  .row2{margin-top:10px}
  .col1-1,.col1-2{
    line-height:45px;height:45px;
  }
  #username{
    width:80%;margin:0 auto;background:rgba(255,255,255,0.6);
  }
  .row3{
    margin:10px 0;
  }
  .row3 button{
    width:70%;height:40px;
  }
  .row4{

  }
  .row4 .active{
    color:red;
  }
</style>
