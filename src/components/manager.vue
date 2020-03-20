<template>
  <div id="all">
    <div class="top">
      <h3>学生信息管理系统</h3>
      <h4>欢迎 {{userName}}</h4>
    </div>
    <div id="app">
      <div class="left">
        <ul>
          <li v-for="(item,index) in funcList"
              @click="getfunc(index,item.com)"
              :class="active == index?'active':''">
            {{ item.name }}
          </li>
          <li @click="getout()">退出登录</li>
        </ul>
      </div>
      <div class="right">
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
      name: "manager",
      data(){
        return{
          funcList:[
            {name:'信息总览',com:'managerAll'},
            {name:'新增管理',com:'managerAdd'},
            {name:'删除管理',com:'managerDel'},
            {name:'查询功能',com:'managerSel'},
            {name:'修改功能',com:'managerUpdate'},
            {name:'关于系统',com:'managerAbout'}
          ],
          active:0,
          userName:'Abo'
        }
      },methods:{
        postStudentsNum(){
          this.$axios.get('http://127.0.0.1:9091/getall').then(result => {
            console.log(result)
            // 保留 目前无作用
          }).catch(err => {
            console.log(err)
          })
        },
        getfunc(index,com){
          this.active = index
          this.$router.push(com)
        },
        getout(){
          if(confirm('确认退出吗？')){
            this.$router.push('/')
          }
        }
      },
      created() {
        this.postStudentsNum()
      }
    }
</script>

<style scoped>
  *{margin:0;padding:0;text-decoration:none;list-style:none;}
  .top{
    width:100%;height:40px;background:#00BFFF;border-bottom:1px solid #4d4d4d;display:flex;
  }
  .top h3{
    flex:8;
  }
  .top h3,.top h4{
    color:#fff;line-height:40px;margin:0;padding-left:30px;
  }
  .top h4{flex:1;}
  .top h4:hover{text-decoration:underline;}
  #app{
    width:100%;height:95vh;display:flex;
  }
  .left{
    flex:2;
    background:#6495ED;
    flex-direction:column;
  }
  .right{
    flex:7;
    background:#B0E0E6;
  }
  .left ul{
    margin-top:10px;
  }
  .left ul li{
    height:12vh;
    line-height:12vh;
    text-align:center;
    color:#ccc;
    font-size:20px;
    font-weight:500;
  }
  .left ul .active{
    background:#B0E0E6;
    color:#000;
    transition:all 0.8s ease;
  }
  .v-enter,.v-leave-to{
    opacity:0;
    transform:translate(150px,150px);
  }
  .v-enter-active,.v-leave-active{
    transition:all 0.4s ease;
  }
</style>
