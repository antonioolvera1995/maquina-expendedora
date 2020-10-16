"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_1 = require("./load");
let money = 300;
let hour = { horas: 10, minutos: 13 }; //crear interface
let percentageError = 10;
let ran = () => { return Math.round((Math.random() * 10)); };
load_1.load();
