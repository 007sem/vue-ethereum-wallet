<script setup>
import { ref, computed } from "vue";
import { routes } from "@/router/routes";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const navList = ref(routes.filter((item) => item.path == "/")[0].children);

const currentPath = computed(() => route.path);

function goPath(path) {
  router.push(path);
}
</script>

<template>
  <div class="nav">
    <div
      class="nav-item"
      :class="currentPath == item.path ? 'active' : ''"
      v-for="item in navList"
      @click="goPath(item.path)"
    >
      <div class="icon">
        <i class="iconfont" :class="item.icon"></i>
      </div>
      <div class="title">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid var(--border-color);
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    .icon i {
      font-size: 1.6rem;
      color: var(--desc-color);
    }
    .title {
      line-height: 0.9rem;
      font-size: 0.9rem;
      color: var(--desc-color);
    }
  }
  .nav-item.active {
    .icon i {
      color: var(--main-color);
    }
    .title {
      color: var(--main-color);
    }
  }
}
</style>
