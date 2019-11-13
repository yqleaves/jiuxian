import http from "@utils/request";

export const shopListApi = (tabnum)=>http({
    method:"get",
    url:"/m_v1/promote/qgajax.do?t=1573515473880&pagenum=2",
    data:{
        tabnum:tabnum
    }
})
