'use strict'

interface Config {
    getConfig():{
        port:number
    }
}

const config:Config = {
    getConfig:() => {
        return {
            port:8080
        }
    }
}

export default config;