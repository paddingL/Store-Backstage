import axios from 'axios'
import config1 from '../config';
const instance = axios.create({
    baseURL:config1.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials:false
});

// http request 拦截器
instance.interceptors.request.use(config => {
    if(config.method === 'post') {
        if(!!localStorage.getItem("token")){
             config.headers.Token = localStorage.getItem("token")
        }else{}

    }
    return config
}, err => {
    alert('错误的传参')
    return Promise.reject(err)
})

// http response 拦截器
instance.interceptors.response.use(response => {
    if(response.data.code=='-2'){
        this.$router.push({
                    path: '/login'
                })
        return false
    }
    return response
}, err => {
    if(err.response) {
                this.$router.push(
                   '/login'
                )
        }

    return Promise.reject(err.response.data)
})

export default instance