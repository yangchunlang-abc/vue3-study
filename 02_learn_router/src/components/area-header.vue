<template>
  <div class="area-header">
    <h1>{{ title }}</h1>
    <text>{{ subtitle }}</text>
  </div>
</template>

<script setup lang="ts">
// 自定义属性
defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  subtitle: {
    type: String,
    default: "默认描述"
  }
})
</script>

<style scoped lang="less">
.area-header {
  text {
    font-size: 25px;
  }
}
</style>