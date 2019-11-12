import http from "@utils/request";

export const shopListApi = (tabnum)=>http({
    methods:"get",
    url:"/m_v1/promote/qgajax.do?1573515473880&pagenum=2&tabnum=1",
    data:{
        tabnum:tabnum
    }
})

// 1573515473880&pagenum=2&tabnum=1

export const recommendListApi = (topicId)=>http({
    methods:"get",
    url:"/m_v1/statics/getzx.htm?topicId=1165",
    data:{
        topicId:topicId
    }
})




