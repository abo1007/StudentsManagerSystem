<template>
    <div id="app">
      <div class="top">
        <h3>学生信息展示系统
          <span @click="goToLogin">后台入口</span>
        </h3>
      </div>
      <div class="content">
        <el-container>
          <el-row class="row1">
            <el-col :span="2">搜索ID</el-col>
            <el-col :span="6">
              <el-input v-model="inputId" placeholder="请输入内容" class="op50"></el-input>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">搜索关键字</el-col>
            <el-col :span="6">
              <el-input v-model="inputName" placeholder="请输入内容" class="op50"></el-input>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">性别筛选</el-col>
            <el-col :span="3">
              <el-select v-model="value" placeholder="请选择性别" class="op50">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-container>
        <el-table
          :data="studentsNewList"
          style="width:100%"
          class="eltable1">
          <el-table-column
            prop="id"
            label="ID"
            width="200">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="200">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="180">
          </el-table-column>
          <el-table-column
            prop="ctime"
            label="创建时间">
          </el-table-column>
        </el-table>

      </div>
    </div>
</template>

<script>
    export default {
      name: "publicPage",
      data(){
        return{
          studentsNewList:[],
          studentsList:[],
          inputName:'',
          inputId:null,
          options:[
            {value:0,label:'全部'},
            {value:1,label:'男'},
            {value:2,label:'女'}
          ],
          value:0


        }
      },
      methods:{
        getStudentsNum() {
          this.$axios.get('http://127.0.0.1:9091/getall').then(result => {
            // console.log(result)
            this.studentsNewList = this.studentsList = result.data
          }).catch(err => {
            console.log(err)
          })
        },
        goToLogin(){
          this.$router.push('login')
        },
        searchId(keywords) {
          return this.studentsList.filter(item =>{
            if(item.id == keywords) {
              return item
            }
          })
        },
        searchName(keywords) {
          return this.studentsList.filter(item =>{
            if(item.name.includes(keywords)){
              return item
            }
          })
        },
        searchsex(keywords) {
          return this.studentsList.filter(item =>{
            if(item.sex.includes(keywords)){
              return item
            }
          })
        },
        numberToSex(num){
          return num==1?'男':'女'
        }
      },
      created() {
        this.getStudentsNum();
      },watch:{
        inputId: function(val) {
          if(val == ''){
            this.studentsNewList = this.studentsList
          }else{
            this.studentsNewList = this.searchId(val)
          }
        },
        inputName: function(val) {
          if(val == ''){
            this.studentsNewList = this.studentsList
          }else{
            this.studentsNewList = this.searchName(val)
          }
        },
        value: function(val) {
          if(val == 0){
            this.studentsNewList = this.studentsList
          }else{
            // console.log(this.numberToSex(val))
            this.studentsNewList = this.searchsex(this.numberToSex(val))
          }
        }
      }
    }
</script>

<style scoped>
  *{margin:0;padding:0;text-decoration:none;list-style:none;}
  #app{
    width:100%;height:100vh;
  }
  .top{
    width:100%;height:40px;background:rgba(30,144,255,0.6);border-bottom:1px solid #4d4d4d;
  }
  .top h3{
    color:#fff;line-height:40px;margin:0;padding-left:20px;position:relative;
  }
  .top h3 span{
    width:80px;height:30px;line-height:30px;border:2px solid #ccc;font-weight:500;text-align:center;
    position:absolute;right:3%;top:10%;
  }
  .content{
    width:85%;margin:0 auto;
  }
  .content .eltable1{
    opacity:0.6;
  }
  .row1{
    width:100%;height:60px;line-height:60px;background:rgba(255,255,255,0.5);
  }
  .op50{opacity:0.4;}
</style>
