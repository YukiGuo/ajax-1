#### 一个请求的一生
##### XMLHttpRequest.readyState 
1. 值为0 ，创建 const request = new XMLHttpRequest()
2. 值为1 ， open request.open('GET', '/style.css')//只用method 和url两个参数
3. 值为2 发送 request.send()
4. 值为3 ， 开始下载，第一个信息出现在页面中
5. 值为4 ， 下载完成
#### JSON 
1. JSON是一门语言 ，全称Javascript Object Notation
2. 支持的数据类型(不支持变量)
  * string -只支持双引号不支持单引号和无引号
  * number -支持科学计数法
  * bool  - true和false
  * null -没有undefined
  * object
  * array
3. Window.JSON
  *  JSON.parse   JSON格式数据转化成JS对应的数据类型 出错是用try catch捕获
  *  JSON.stringify  JS 数据编程符合JSON的数据