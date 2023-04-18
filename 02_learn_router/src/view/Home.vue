<template>
  <div>
    <h1>这是home组件</h1>
    <h1>Count:{{ counterStore.count }}</h1>
    <button @click="add">Count++</button>
    <h1>解构赋值拿到的count:{{ count }}</h1>
    <hr>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
// 导入store中的函数
import { toRefs } from 'vue';
import useCounter from '../stores/counter';
// 实例化函数
const counterStore = useCounter()
const { count } = toRefs(counterStore) //解构赋值拿到的 不能响应式
function add() {
  counterStore.count++
}
</script>

<style scoped></style>