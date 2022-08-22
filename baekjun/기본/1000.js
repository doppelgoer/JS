"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', function (line) {
    let A = Number(line.split(' ')[0]);
    let B = Number(line.split(' ')[1]);
    console.log(A + B);
    rl.close();
}).on('close', function () {
    process.exit();
});
