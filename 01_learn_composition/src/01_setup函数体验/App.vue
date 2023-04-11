<template>
  <h1>{{ count }}</h1>
  <button @click="add">ADD</button>
</template>

<script>
import { ref } from 'vue'
export default {
  // 函数式API 复用性更强
  // 使用ref 数据才能响应到页面
  setup() {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return {
      count,
      add
    }
  }
}
</script>

<style lang="less"></style>
