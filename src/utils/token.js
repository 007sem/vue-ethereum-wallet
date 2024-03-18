const token_name = "web3_wallet_token"

export const getToken = () => {
    let token = localStorage.getItem(token_name)

    return token || false
}

export const setToken = (token) => {

}