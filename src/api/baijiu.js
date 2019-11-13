import http from "@utils/request";

export const baijiuApi = (pageNum)=>http({
    method:"get",
    url:"/m_v1/statics/getzx.htm?topicId=1165",
    data:{
        pageNum:pageNum
    }
})

export const searchApi = (wd,_)=>http({
    method:"get",
    url:"/m_v1/search/getSuggestKeyword?jsoncallback=jQuery16204199633724587226_1573569939647",
    data:{
        wd,
        _
    }
})
