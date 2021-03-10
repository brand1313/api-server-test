'use strict'

import express, {NextFunction, Request, Response} from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

interface Config {
    getConfig():{
        port:number
    }
}

class ApiServer extends http.Server {

    private app:express.Application;
    private config:Config | Object;
    private currentConns:Set<Object>;
    private busy:WeakSet<Object>;
    private stopping:boolean;

    constructor(config:Config | Object){
        const app:express.Application = express();
        super(app);
        this.app = app;
        this.config = config;
        this.currentConns = new Set<Object>();
        this.busy = new WeakSet<Object>();
        this.stopping = false;
    }

    async start(): Promise<ApiServer>{

        this.app.use((req:Request, res:Response, next:NextFunction)=>{
            this.busy.add(req.socket); 
            res.on('finish',() => {
                if(this.stopping) req.socket.end();
                this.busy.delete(req.socket);
            });

            next();
        })
        
        this.app.use(morgan('dev'));
        this.app.use(cookieParser());

        this.app.get('/_health',(req:Request, res:Response) => {
            res.sendStatus(200);
        })

        return this;
    }

    // public getInstance():express.Application{
    //     return this.app;
    // }

    // private router():void{
    //     this.app.get('/',(req:Request, res:Response) => {
    //         res.json({hello:'world'});
    //     })
    // }
}

export default ApiServer;