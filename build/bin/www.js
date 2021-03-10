"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../build/server"));
const server = new server_1.default();
const app = server.getInstance();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`running at ${port}`);
});
