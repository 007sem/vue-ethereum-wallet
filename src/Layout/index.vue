<script  setup>
import { ref } from 'vue'

import NavBar from './components/NavBar.vue'

</script>

<template>
    <div class='layout'>
        <div class="main">
            <router-view></router-view>
        </div>
        <NavBar />
    </div>
</template>

<style scoped lang='scss'>
.layout{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}
.main{
    flex:1;
    // background-color: #f0f2f5;
}
</style>