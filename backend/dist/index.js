"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = express_1.default();
exports.app = app;
const port = 5000;
app.get('/', (_, res) => {
    res.status(200).send('Hello, world!');
});
const server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
exports.server = server;
//# sourceMappingURL=index.js.map