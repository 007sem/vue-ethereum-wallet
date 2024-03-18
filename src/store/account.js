import { defineStore } from "pinia"
import { hdkey } from '@ethereumjs/wallet'
import { ref } from 'vue'

const EthereumHDKey = hdkey.EthereumHDKey


export const useAccountStore = defineStore("Account",()=>{
    const MN = ref('')
    const Accounts = ref([])

    function isAccountEmpty(params) {
        return Accounts.value.length == 0
    }

    return {
        isAccountEmpty
    }
},{
    persist:true
})
