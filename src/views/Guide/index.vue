<script  setup>
import { ref } from 'vue'

import MyButton from "@/components/MyButton"

</script>

<template>
    <div class='guide'>
        <div class="title">
            <h2>欢迎使用</h2>
            <h2 class="en">Vue-Web3-Wallet</h2>
            <h2>请先创建账户</h2>
        </div>
        <div class="cover">
            <img src="@/assets/images/guide-welcome.png" alt="">
        </div>
        <div class="btns">
            <MyButton type="line">创建新钱包</MyButton>
            <MyButton type="line">助记词导入</MyButton>
            <MyButton type="line">KeyStore导入</MyButton>
            <MyButton type="line">私钥导入</MyButton>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.guide{
    margin:4rem 2rem;
    display:flex;
    flex-direction:column;
    align-items:center;

    >div{
        margin-bottom:2rem;
    }

    .title{
        display:flex;
        flex-direction:column;
        align-items:center;
        h2 {
            font-weight: 400;
            letter-spacing: 2px;
            margin: 0 0 1rem;
        }
        .en {
            letter-spacing: 1px;
        }
    }

    .cover{
        width:100%;
        img{
            width:100%;
            display:block;
        }
    }

    .btns{
        width: 70%;
        >div{
            margin-bottom:10px;
        }
    }

}
</style>