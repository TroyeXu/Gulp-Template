module.exports = {
    proxyList: {
        "/": {
            // 测试环境
            target: "http://bcwap.lanrentool.com", // 接口域名https://web.api-bc-1.com //http://bcwab.lanrentool.com
            changeOrigin: true, //是否跨域
            pathRewrite: {
                "^/": "" //需要rewrite重写的,
            }
        }
    }
};

