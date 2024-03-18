<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

function copy(){
    try {
        navigator.clipboard.writeText(props.address)
        notice.success("内容已经复制到剪贴板")
    } catch (error) {
        notice.error("操作失败")
    }
}

</script>

<template>
  <div class="card">
    <div class="address">
                    <div class="button" @click="copy">
                        <span>address</span>
                        <i class="iconfont icon-copy"></i>
                    </div>
                    
                </div>
                <div class="balance">balance</div>
                <div class="op-list">
                    <div class="op-item" @click="router.push('/trans/'+ props.symbol)">
                        <i class="iconfont icon-send-o"></i>
                        <span>发送</span>
                    </div>
                    <div class="op-item" @click="router.push('/records/'+ props.symbol)">
                        <i class="iconfont icon-narrow"></i>
                        <span>交易记录</span>
                    </div>
                </div>
  </div>
</template>

<style scoped lang="scss">
.card{
        // background-color: var(--sec-color);
        background: linear-gradient(-135deg, var(--sec-color) 15%, var(--main-color) 100%);
        color: var(--color-reverse);
        margin: 2rem;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.266);
        .address{
            display: flex;
            flex-direction: row-reverse;
            margin: 0 0 .6rem;
            .button{
                float: right;
            }
            i{
                margin-left: .5rem;
            }
        }
        .balance{
            font-size: 2rem;
            letter-spacing: 1px;
            margin: 0 0 1.4rem;
        }
        .op-list{
            display: flex;
            justify-content: space-between;
            .op-item{
                width: 50%;
                display: flex;
                align-items: center;
                i{
                    font-size: 1.5rem;
                    margin-right: .5rem;
                }
            }
        }
    }

</style>
