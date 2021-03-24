const PROXY_CONFIG = [
    {
        context: [
            "/search/?query"
        ],
        target: "https://www.metaweather.com/api/location",
        secure: false,
        changeOrigin: true,

    }
]

module.exports = PROXY_CONFIG;
