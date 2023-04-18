<template>
  <RouterView></RouterView>
  <!-- <div class="content">
    <areaHeader :title="highScore.title" :subtitle="highScore.subtitle">
    </areaHeader>
    <roomList :list-arr="highScore.list"></roomList>
  </div> -->
</template>



<script setup lang="ts">
import highScore from '../src/data/high_score.json'
import areaHeader from './components/area-header.vue';
import roomList from './components/room-list.vue';

</script>

<style scoped lang="less">
.content {
  width: 1032px;
  margin: 0 auto;
}
</style>