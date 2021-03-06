const path  = require('path');

module.exports = {
    devServer:{
        proxy:{
           
            "/m_v1":{
                target:"https://m.jiuxian.com",
                changeOrigin:true
            },
            "/BtCApi":{
                target:"http://m.gjw.com",
                changeOrigin:true,
            },
            // "/":{
            //     target:"https://jc.jiuxian.com",
            //     changeOrigin:true
            // },
            "/api":{
                target:"http://39.97.33.178",
                changeOrigin:true
            },
            "/users":{
                target:"http://10.60.13.248:4000",
                changeOrigin:true
            }
        },
        
       
    },
    // 别名配置
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@router":path.join(__dirname,"./src/router"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@utils":path.join(__dirname,"./src/utils"),
            }
        }
    }

}

// /promote/qgajax.do?t=1573453803273&pagenum=1&tabnum=1

//http://m.gjw.com/BtCApi/Search/GetSearchStr?str=d