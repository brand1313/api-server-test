import express from 'express';
import Server from '../../src/server';

const server:Server = new Server();
const app:express.Application = server.getInstance();

const port:any = process.env.PORT || 3000;

app.listen(port as number, () => {
    console.log(`running at ${port}`);
})

