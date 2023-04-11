<template>
  <div>
    <h1>reactive</h1>
    <form action="">
      账号：<input type="text" v-model="count.username">
      密码：<input type="password" v-model="count.password">
    </form>
  </div>
  <hr>
  <div>
    <h1>ref</h1>
    <form action="">
      账号：<input type="text" v-model="info.username">
      密码：<input type="password" v-model="info.password">
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
// 对象，数组数据中有所联系的使用reactive
const count = reactive({
  username: 'zs',
  password: '123'
})
// ref也能对复杂数据进行响应
const info = ref({
  username: 'lisi',
  password: '4567'
})
</script>

<style lang="scss" scoped></style>
