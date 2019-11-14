import http from "@utils/request";

export const clearApi = (pageNum)=>http({
    method:"get",
    url:"/m_v1/dynamic/mob01ajax/151763",
    data:{
        pageNum:pageNum
    }
})
// https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=2