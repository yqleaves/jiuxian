import http from "@utils/request";

export const shopListApi = (tabnum)=>http({
    method:"get",
    url:"/m_v1/promote/qgajax.do?t=1573780012255&pagenum=1",
    data:{
        tabnum:tabnum
    }
})
//https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1573780012255&pagenum=1&tabnum=1

export const recommendListApi = (pageNum)=>http({
    method:"get",
    url:"/m_v1/statics/getzx.htm?topicId=1165",
    data:{
        pageNum:pageNum
    }
})






