<template>
    <div id="app">
      <el-container>
        <el-header>
          <el-row class="row1">
            <h1>添加组件</h1>
          </el-row>
        </el-header>
        <el-main class="main">
          <el-row class="row2 rowcenter">
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="2">姓名</el-col>
            <el-col :span="10">
              <el-input v-model="inputName" placeholder="请输入姓名"></el-input>
            </el-col>
            <el-col :span="6">
              <p :class="IsInputNameRight == false?'waring':''">{{checkAddNameTips}}</p>
            </el-col>
          </el-row>
          <el-row class="rowtop rowcenter">
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="2">性别</el-col>
            <el-col :span="10">
              <el-select v-model="SelectSex" class="selsex">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6">&nbsp;</el-col>
          </el-row>
          <el-row class="rowtop">
            <el-col :span="9">&nbsp;</el-col>
            <el-col :span="6">
              <el-button type="primary" round class="getbtn" @click="getStu">添加信息</el-button>
            </el-col>
          </el-row>
          <el-table
            :data="resultList"
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
          </el-table>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "managerAdd",
      data(){
          return{
            inputName:'',
            SelectSex:'',
            options:[
              {label:'男',value:'男'},
              {label:'女',value:'女'}
            ],
            resultList:[],
            checkAddNameTips:'请输入2-4位中文汉字',
            IsInputNameRight:false
          }
      },
      methods:{
        getStu() {
            if(this.SelectSex && this.IsInputNameRight){
              this.$axios.get("http://127.0.0.1:9091/addstu?name="+this.inputName+"&sex="+this.SelectSex).then(result =>{
                  this.resultList.push(result.data)
                  console.log(this.resultList)
                  alert("添加成功！数据展示如下")
              }).catch(err => {
                console.log(err)
              })
            }else{
              alert("请输入正确的姓名并选择性别后提交")
            }
        },
        checkAddData(inputName){
          var regName =/^[\u4e00-\u9fa5]{2,4}$/;
          if(!regName.test(inputName)){
            this.checkAddNameTips = '请核查后输入2-4位中文姓名'
            this.IsInputNameRight = false
          }else{
            this.checkAddNameTips = ''
            this.IsInputNameRight = true
          }
        }
      },
      watch:{
        inputName:function () {
          this.checkAddData(this.inputName)
        }
      }
    }
</script>

<style scoped>
  *{margin:0;padding:0;}
  .row1{width:100%;height:60px;line-height:60px;background:rgba(204,204,204,0.6);margin-bottom:30px;}
  .row1 h1{padding-left:30px;}
  .rowcenter{height:60px;line-height:60px;}
  .rowtop{margin-top:15px;}
  .selsex{width:100%;}
  .main,.eltable1{margin-top:50px;}
  .getbtn{width:80%;}
  .eltable1{margin-left:2%;}
  .waring{color:#ff0000;font-weight:bold;padding-left:20px;}
</style>
