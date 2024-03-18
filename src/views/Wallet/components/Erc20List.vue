<script setup>
import { ref } from "vue";
import Avatar from "@/components/Avatar"

const name = ref("name")

</script>

<template>
  <div class="erc-20-list">
    <!-- 第一项永远是eth -->
    <div class="erc-20-item">
      <Avatar size="2" :name="name" ></Avatar>
      <div class="text">
        <span class="name">symbol</span>
        <span class="balance">balance</span>
      </div>
    </div>

    <div
      class="erc-20-item"
    >
      <Avatar size="2" :name="name" ></Avatar>
      <div class="text">
        <span class="name">symbol</span>
        <span class="balance">balance</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.erc-20-list {
  padding: 1rem 2rem 0;
  .erc-20-item {
    // background-color: aqua;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .text {
      display: flex;
      flex-direction: column;
      span {
        line-height: 1rem;
      }
      .name {
        font-size: 1.1rem;
        margin-bottom: 0.2rem;
      }
      .balance {
        color: var(--desc-color);
      }
    }
  }
}
</style>
