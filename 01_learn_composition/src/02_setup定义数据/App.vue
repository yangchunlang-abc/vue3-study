<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">修改MSG</button>
  </div>
  <h1>账号:{{ account.username }}</h1>
  <h1>密码:{{ account.password }}</h1>
  <button @click="changeAccount">修改账号</button>
</template>

<script setup>
import { reactive, ref } from 'vue'
// 使用setup语法糖 不用在return了
// 定义响应式数据 reactive函数--定义复杂的数据
// -----------对象，数组------------------------
const account = reactive({
  username: 'zs',
  password: 1234
})
// -----------可变响应式对象--------------------
// 普通数据用ref响应，ref返回一个对象 要.value才能取值
const message = ref('Hello World!')
// 改变文本方法
function changeMessage() {
  // 普通数据用ref响应，ref返回一个对象 要.value才能取值
  message.value = 'Hello Yangchunlang'
  console.log(message)
}
// 改变账号
function changeAccount() {
  account.password = 12321
  account.username = 'LIs'
}
</script>

<style lang="scss" scoped></style>
