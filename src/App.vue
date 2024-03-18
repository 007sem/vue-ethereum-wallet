<script setup>
import { ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import { getToken } from "@/utils/token";
import { useAccountStore } from "@/store/account"


const router = useRouter()
const route = useRoute()

const accountStore = useAccountStore()


watch(route, function(val){

  if(val.path.includes("/guide")){
    return
  } else {
    // 验证是否存在账户  如果不存在则跳转到guide
    if(accountStore.isAccountEmpty()) return router.push("/guide")

    if(!getToken()) return router.push("/auth")
  }
})





</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
