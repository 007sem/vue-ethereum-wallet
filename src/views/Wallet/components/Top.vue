<script  setup>
import { ref } from 'vue'
import Avatar from "@/components/Avatar"

const AcountDrawerFlag = ref(false)
const NetworkDrawerFlag = ref(false)
const BackupDrawerFlag = ref(false)


</script>
<template>
    <div class='top'>
        <div class="left">
            <Avatar name="User" size="2.2"/>
            <div class="user-name">username</div>
        </div>
        <div class="mid">
            <div class="icon">
                <i class="iconfont icon-back"></i>
            </div>
            <span>select network</span>
        </div>
        <div class="right">
            <i class="iconfont icon-gengduo"></i>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.top{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:10px;
    background-color: var(--main-color);
    color: #fff;
}
.left{
    display:flex;
    align-items:center;
}
.mid{
    display: flex;
    align-items: center;
    justify-content: center;
    .icon{
        display: block;
        margin-top: 4px;
        margin-right: 4px;
        transform:rotateZ(-90deg) scale(0.8);
    }
}
.right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>