"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const Maquina_1 = require("./Maquina");
const Maquina_2 = require("./Maquina");
let allProducts = [];
let ran = () => { return Math.round((Math.random() * 10)); };
function load() {
    //Kit Kat
    let prod = new Maquina_1.Product(0, 'Kit Kat', 10, 'Kg');
    let subprd = [
        new Maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 100, ran()),
        new Maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 300, ran()),
        new Maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 600, ran())
    ];
    let products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Donuts
    console.log(allProducts[0]);
}
exports.load = load;
