<template>
    <div id="app">
      <el-container>
        <el-header class="header">
          <comtitle :titlemsg="'查询组件'"></comtitle>
        </el-header>
        <el-main class="content">
          <el-row class="row1">
            <el-col :span="2">搜索ID</el-col>
            <el-col :span="6">
              <el-input v-model="inputId" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">搜索关键字</el-col>
            <el-col :span="6">
              <el-input v-model="inputName" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">性别筛选</el-col>
            <el-col :span="3">
              <el-select v-model="value" placeholder="请选择性别">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-table
            :data="studentsNewList"
            style="width:95%"
            class="eltable1">
            <el-table-column
              prop="id"
              label="ID"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
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
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button  @click.native.prevent="getDetails(scope.row)" type="warning" round>修改数据</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
      <div id="update" :style="IsUpdateActive == true?'display:block;':'display:none;'">
        <el-container>
          <el-header>
            <el-row class="up-row1">
              <p @click="updateWindowHide">
                修改数据
                <span id="up-row1-span">点击此区域关闭窗口</span>
              </p>
            </el-row>
          </el-header>
          <el-main>
            <el-row class="in-row">
              <el-col :span="2">
                &nbsp;
              </el-col>
              <el-col :span="6">
                ID
              </el-col>
              <el-col :span="16">
                <el-input v-model="updateId" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <el-row class="in-row">
              <el-col :span="2">
                &nbsp;
              </el-col>
              <el-col :span="6">
                姓名
              </el-col>
              <el-col :span="16">
                <el-input v-model="updateName" placeholder="请输入内容"></el-input>
              </el-col>
            </el-row>
            <el-row class="in-row">
              <el-col :span="2">
                &nbsp;
              </el-col>
              <el-col :span="6">
                性别
              </el-col>
              <el-col :span="16">
                <el-select v-model="newvalue" placeholder="请选择性别">
                  <el-option
                    v-for="item in updateOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row class="in-row">
              <el-col :span="4">
                &nbsp;
              </el-col>
              <el-col :span="16">
                <el-button type="warning" class="updatebutton" @click="getupdateStu">点击修改</el-button>
              </el-col>
              <el-col :span="4">

              </el-col>
            </el-row>
          </el-main>
          <el-footer>

          </el-footer>
        </el-container>


      </div>
    </div>
</template>

<script>
  import comtitle from "./children/comtitle";
    export default {
        name: "managerUpdate",
      data(){
        return{
          studentsList:[],
          studentsNewList:[],
          inputName:'',
          inputId:null,
          options:[
            {value:0,label:'全部'},
            {value:1,label:'男'},
            {value:2,label:'女'}
          ],
          value:0,
          updateName:'',
          newvalue:1,
          IsUpdateActive:false,
          updateId:0,
          updateOptions:[
            {value:1,label:'男'},
            {value:2,label:'女'}
          ]
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
        },
        getDetails(row) {   // 这里可以获得当前行的数据
          console.log(row.id)// 此时就能拿到整行的信息
          this.IsUpdateActive = true
          this.updateId = row.id
          this.updateName = row.name
          this.updatesex = row.sex

        },    // 修改方法
        getupdateStu() {
          this.$axios.get
          ('http://127.0.0.1:9091/upstu?id=' + this.updateId + '&name=' + this.updateName + '&sex=' + this.numberToSex(this.newvalue) )
            .then(result => {
              this.studentsNewList = result.data
              alert('修改成功')
              this.updateWindowHide()
            }).catch(err => {
            console.log(err)
          })
        },
        updateWindowHide(){
          console.log(1);
          this.IsUpdateActive = false
        }
      },
      created() {
        this.getStudentsNum()
      },
      watch:{
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
      },
      components:{
          comtitle
      }
    }
</script>

<style scoped>
  *{margin:0;padding:0;}
  .header{
    width:100%;
    margin-bottom:30px;
  }
  .content{
    padding-left:30px;
  }
  .row1{
    height:60px;line-height:60px;margin:10px 0;
  }
  .in-row{margin:15px 0;height:50px;line-height:50px;}
  .eltable1{overflow: scroll;}
  #update{
    position:fixed;display:none;
    height:400px;width:600px;
    top:50%;left:50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    transition:all 1s ease;
    -webkit-transition:all 1s ease;
    background:#fff;border:2px solid #4d4d4d;border-radius:5px;
  }
  .up-row1{
    background:#FFA500;
    font-size:20px;color:#fff;font-weight:400;
    height:50px;line-height:50px;padding-left:10px;
  }
  #up-row1-span{
    float:right;font-size:12px;
  }
  .updatebutton{width:100%;height:40px;font-weight:600;}
</style>
