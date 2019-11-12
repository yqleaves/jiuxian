import http from "@utils/request";

export const baijiuApi = (pageNum)=>http({
    method:"get",
    url:"/m_v1/statics/getzx.htm?topicId=1165",
    data:{
        pageNum:pageNum
    }
})

//https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=4

export const searchApi = (wd,_)=>http({
    method:"get",
    url:"/m_v1/search/getSuggestKeyword?jsoncallback=jQuery16204199633724587226_1573569939647",
    data:{
        wd,
        _
    }
})

//https://mlist.jiuxian.com/m_v1/search/getSuggestKeyword?
//jsoncallback=jQuery16204199633724587226_1573569939647&wd=h&_=1573569951816