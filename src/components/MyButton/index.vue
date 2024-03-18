<script  setup>
import { ref } from 'vue'

const props = defineProps(['type',"width"])


</script>

<template>
    <div class='button' :class="props.type" :style="{
        width: width || '100%' ,
    }">
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>
.button{
    padding: .3rem 2rem;
    background-color:var(--main-color);
    border-radius: 6px;
    color: #fff;
    text-align: center;
}
.line{
    border: 1px solid var(--main-color);
    color: var(--main-color);
    background-color: #fff;
}

</style>