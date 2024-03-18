<script setup>
/*
      params:
          src: 图片url地址
          name: 名字
          size: 头像大小 单位rem
  */
import { ref, computed } from "vue";

let props = defineProps(["src", "size", "name"]);
let urlIsOk = ref(false);
let text = computed(() => {
  return props.name.slice(0, 1).toUpperCase();
});

function strHashColor(str) {
  let colorArray = [
    "#E3F4F4",
    "#E9FFC2",
    "#FDFFAE",
    "#F8E8EE",
    "#FEA1A1",
    "#FFF8E3",
    "#E3DFFD",
    "#B4CFB0",
  ];

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return colorArray[hash % 8];
}
let color = strHashColor(props.name);

function init(src) {
  const image = new Image();
  image.onload = function () {
    urlIsOk.value = true;
  };

  image.onerror = function () {
    urlIsOk.value = false;
  };
  image.src = src;
}

init(props.src);
</script>

<template>
  <div
    class="avatar"
    :style="{
      backgroundColor: color,
      width: size + 'rem',
      height: size + 'rem',
      fontSize: size / 2 + 'rem',
    }"
  >
    <img v-if="urlIsOk" :src="props.src" alt="" />
    <div v-else class="text-avatar">{{ text }}</div>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--desc-color);
  margin: 0.5rem;
  margin-left: 0;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .text-avatar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
