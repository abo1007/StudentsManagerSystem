<template>
  <div id="app">
    <el-table
      :data="studentsNewList"
      style="width:95%">
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
          <el-button  @click.native.prevent="getrows(scope.row)" type="warning" round>修改数据</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      name: "demo1",
      data(){
        return{
          studentsNewList : [
            {id:1,name:'余强',sex:'男',ctime:2012},
            {id:2,name:'萧芳',sex:'女',ctime:2012},
            {id:3,name:'康敏',sex:'女',ctime:2012},
            {id:4,name:'吕丽',sex:'女',ctime:2012}
          ],
        }
      },
      methods:{
        getrows(row){
          console.log(row.id)
          console.log(row.name)
          console.log(row.sex)
        }
      }
    }
</script>

<style scoped>

</style>
