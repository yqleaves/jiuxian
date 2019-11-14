import http from "@utils/request";

// 城市列表接口
export const cityApi = _=>http({
    method:"get",
    url:"/api/cityList"
})
// http://39.97.33.178/api/cityList