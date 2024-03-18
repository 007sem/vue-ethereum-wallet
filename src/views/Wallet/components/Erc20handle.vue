<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="erc-20-handle">
    <div class="handle-item addition">
      <i class="iconfont icon-add"></i>
      <span>添加代币</span>
    </div>
    <div class="handle-item refresh">
      <i class="iconfont icon-refresh1"></i>
      <span>刷新列表</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.erc-20-handle {
  padding: 1rem 2rem 0;
  .handle-item {
    display: flex;
    align-items: center;
    color: var(--main-color);
    font-size: 1.1rem;
    margin-bottom: 1rem;
    i {
      font-size: 1.3rem;
      margin-right: 0.5rem;
      margin-bottom: -0.3rem;
    }
  }
}
</style>
