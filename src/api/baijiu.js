import http from "@utils/request";

export const baijiuApi = (pageNum)=>http({
    method:"get",
    url:"/m_v1/statics/getzx.htm?topicId=1165",
    data:{
        pageNum:pageNum
    }
})

export const searchApi = (str)=>http({
    method:"get",
    url:"/BtCApi/Search/GetSearchStr",
    data:{
        str
    }
})