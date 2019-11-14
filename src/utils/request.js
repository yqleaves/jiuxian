import axios from "axios"
// import loading from "@lib/loading/index.js"
const server = axios.create({
    timeout:5000,

    withCredentials:true,
})
// 请求拦截器
server.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }
    // loading.loadingMount();
    return config;
    // config.headers["content-type"] = "application/json";
},(err)=>{
    return Promise.reject(err);
})

server.interceptors.request.use( config => {
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
      }
   
      return config;
    },
    error => {
      return Promise.reject(error);
    });

// 响应拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        // loading.loadingDestroy();
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})


export default server
