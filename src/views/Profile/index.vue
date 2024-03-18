<script setup>
import { ref } from "vue";

const funcList = [
  {
    name: "Security",
    path: "/safe",
    icon: "icon-security",
  },
  {
    name: "Setting",
    path: "/setting",
    icon: "icon-setting",
  },
  {
    name: "About",
    path: "/about",
    icon: "icon-about",
  },
];
</script>

<template>
  <div class="profile">
    <div class="userinfo">
      <div class="user-avatar"></div>
      <div class="text">
        <div class="name">Jimmy <i class="iconfont icon-edit"></i></div>
        <div class="address">0x12345667</div>
      </div>
    </div>
    <div class="func-list">
      <div
        class="func-item"
        v-for="item in funcList"
        @click="goPage(item.path)"
      >
        <i class="iconfont" :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.userinfo {
  padding: 2rem 2rem;
  // background-color: coral;
  display: flex;
  align-items: center;
  background-color: var(--main-color);
  color: var(--color-reverse);
  border-bottom: 1px solid var(--border-color);
  .user-avatar {
    width: 100px;
    height: 100px;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    margin-right: 1rem;
  }
  .name {
    font-size: 1.5rem;
    i {
      margin-left: 1rem;
    }
  }
}
.func-list {
  padding: 1rem 2rem;
  .func-item {
    font-size: 1.2rem;
    color: var(--main-color);
    i {
      margin-right: 0.5rem;
    }
    margin-bottom: 1rem;
  }
}
</style>
