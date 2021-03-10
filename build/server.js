"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.router();
    }
    getInstance() {
        return this.app;
    }
    router() {
        this.app.get('/', (req, res) => {
            res.json({ hello: 'world' });
        });
    }
}
exports.default = Server;
