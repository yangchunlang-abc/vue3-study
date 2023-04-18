<template>
  <div class="room-list">
    <template v-for="item in listArr" v-key="index">
      <div class="room-item">
        <div class="item-inner">
          <div class="image"><img :src="item.picture_url" alt=""></div>
          <div class="info">
            <div>{{ }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="price">{{ item.price_format }}/晚</div>
            <div>{{ item.bottom_info.content }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps({
  listArr: {
    type: Object,
    default: () => ({})
  }
})
// 计算属性通过 props拿到值
const titleStr = computed(() => {
  return props.listArr.list.verify_info.messages.join(" ")
})
</script>

<style scoped lang="less">
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -8px;

  .room-item {
    width: 50%;

    .item-inner {
      margin: 0 8px 12px;
      color: #484848;
      font-weight: 800;

      img {
        width: 100%;
        border-radius: 3px;
      }

      .info {
        .title {
          margin-top: 8px;
          font-size: 12px;
        }
      }
    }

  }
}
</style>