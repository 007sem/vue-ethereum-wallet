<script  setup>
import { ref } from 'vue'

import Top from "./components/Top.vue"
import Card from "./components/Card.vue"
import Erc20List from './components/Erc20List.vue';
import Erc20handle from "./components/Erc20handle"

</script>

<template>
    <div class='page'>
        <Top />
        <Card />
        <Erc20List />
        <Erc20handle />
    </div>
</template>

<style scoped lang='scss'>

</style>