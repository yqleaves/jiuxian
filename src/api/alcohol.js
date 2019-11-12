import http from "@utils/request";

export const shopListApi = (tabnum)=>http({
    methods:"get",
    url:"/m_v1/promote/qgajax.do?t=1573515473880&pagenum=2",
    data:{
        tabnum:tabnum
    }
})

// 1573515473880&pagenum=2&tabnum=1

export const recommendListApi = (pageNum)=>http({
    methods:"get",
    url:"/m_v1/statics/getzx.htm?topicId=1165",
    data:{
        pageNum:pageNum
    }
})






