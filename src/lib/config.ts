'use strict'

interface Config {
    getConfig():{
        port:number
    }
}

const config:Config = {
    getConfig:() => {
        return {
            port:3000
        }
    }
}

export default config;