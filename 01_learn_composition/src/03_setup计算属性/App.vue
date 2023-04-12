<template>
  <div>
    <h1>计算属性:{{ a }} + {{ b }} = {{ sum }}</h1>
  </div>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity'
const a = ref(0)
const b = ref(0)
const add = computed(() => {
  return a.value + b.value
})
// 可以设置set和 get   set在get前对数据进行操作
const sum = computed({
  get: () => a.value + b.value,
  set: () => a.value * b.value
})
</script>

<style lang="scss" scoped></style>
