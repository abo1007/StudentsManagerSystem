# Students Manager System

## 0. 启动项目

### 0.1 安装依赖

```
npm install
```

### 0.2 下载配套后端 并运行(nodejs)

> https://github.com/abo1007/StudentsManagerSystem-Server

### 0.3 启动项目

```
npm run dev
```

## 1. API接口

### 1.1 登陆验证(不安全)

> 'http://127.0.0.1:9091/tomanager?Uid='+this.userid+'&userPassword='+this.userPassword

* 请求方式 GET
* 请求方法 getlogin()
* 返回数据类型 JSON字符串
* 返回数据 用户登录信息
* 使用组件 : login

### 1.2 获取学生列表数据

> http://127.0.0.1:9091/getall

* 请求方式 GET
* 请求方法 getStudentsNum()
* 返回数据类型 JSON字符串
* 返回数据 学生数据列表
* 使用组件：
	+ manager
	+ managerAll
	+ managerAdd
	+ managerDel
	+ managerSel
	+ publicPage

### 1.3 新增学生

> "http://127.0.0.1:9091/addstu?name=" + this.inputName + "&sex=" + this.SelectSex

* 请求方式 GET
* 请求方法 getStu()
* 返回数据类型 JSON字符串
* 返回数据 新增学生数据
* 使用组件 : managerAdd

### 1.4 删除学生

> "http://127.0.0.1:9091/delstu?id=" + row.id

* 请求方式 GET
* 请求方法 getDelStu(row)
* 返回数据类型 JSON字符串
* 返回数据 删除后的学生数据
* 使用组件 : managerDel

### 1.5 修改学生

> http://127.0.0.1:9091/upstu?id= + this.updateId + '&name=' + this.updateName + '&sex=' + this.sex(要文字)

* 请求方式 GET
* 请求方法 getupdateStu()
* 返回数据类型 JSON字符串
* 返回数据 修改后的学生数据
* 使用组件 : managerUpdate


## 2.学生数据格式

> {id:1,name:'余强',sex:'男',ctime:new Date()}

## 3. 配套后端（重要）

* 请见我的项目里的StudentsManagerSystem-Server项目，目前为临时后端，尚未与数据库进行连通！
* 该配套服务端只能在一个生命周期内实现增删改查

## 4. 相关问题（重要）

* bug肯定有的，因为还没有对每个输入框都进行正则表达式匹配。
* 传输介质也不安全，自己玩玩算了。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
