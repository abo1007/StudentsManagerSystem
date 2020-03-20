# Students Manager System

## 1. API接口

### 1.1 登陆验证(未完成)

> http://127.0.0.1:9091/userlogin

* 请求方式 POST
* 返回数据类型 ?
* 返回数据
* 使用组件 : login

### 1.2 获取学生列表数据

> http://127.0.0.1:9091/getall

* 请求方式 GET
* 返回数据类型 JSON字符串
* 返回数据 学生数据列表
* 使用组件：
	+ manager
	+ managerAll
	+ managerAdd
	+ managerDel
	+ managerSel

### 1.3 新增学生

> "http://127.0.0.1:9091/addstu?name=" + this.inputName + "&sex=" + this.SelectSex

* 请求方式 GET
* 返回数据类型 JSON字符串
* 返回数据 新增学生数据
* 使用组件 : managerAdd

### 1.4 删除学生(未完成)

> "http://127.0.0.1:9091/delstu?id=" + this.delid

* 请求方式 GET
* 返回数据类型 JSON字符串
* 返回数据 删除学生数据
* 使用组件 : managerDel

### 1.5 修改学生(未完成)

> "http://127.0.0.1:9091/upstu?id=" + this.delId + "&name=" + this.inputName + "&sex=" + this.SelectSex

* 请求方式 GET
* 返回数据类型 JSON字符串
* 返回数据 修改后的学生数据
* 使用组件 : managerUpdate


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
