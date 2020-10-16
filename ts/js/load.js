"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const maquina_1 = require("./maquina");
const maquina_2 = require("./maquina");
let allProducts = [];
let ran = () => { return Math.round((Math.random() * 10)); };
function load() {
    //Kit Kat----------------------------------------
    let prod = new maquina_1.Product(0, 'Kit Kat', 10, 'Kg');
    let subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.100, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.300, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 0.600, ran())
    ];
    let products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Donuts---------------------------------
    prod = new maquina_1.Product(0, 'Donuts', 9.95, 'Kg');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.300, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.600, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 1, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Galletas Oreo---------------------------------
    prod = new maquina_1.Product(0, 'Galletas Oreo', 9.25, 'Kg');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.200, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.500, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 0.900, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Chicles Trident---------------------------------
    prod = new maquina_1.Product(0, 'Chicles Trident', 46.90, 'Kg');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.020, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.100, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 0.120, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Chicles Orbit---------------------------------
    prod = new maquina_1.Product(0, 'Chicles Orbit', 41.02, 'Kg');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.020, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.100, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 0.120, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Patatas Lays---------------------------------
    prod = new maquina_1.Product(0, 'Patatas Lays', 9.44, 'Kg');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.160, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.200, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 0.300, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Doritos---------------------------------
    prod = new maquina_1.Product(0, 'Doritos', 9.32, 'Kg');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.160, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.200, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 0.300, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Agua de Lanjaron---------------------------------
    prod = new maquina_1.Product(0, 'Agua de Lanjaron', 0.35, 'L');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.500, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 1.500, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 2.500, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Cerveza Mahou---------------------------------
    prod = new maquina_1.Product(0, 'Cerveza Mahou', 2.20, 'L');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.250, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.500, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 1, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Cerveza Heineken---------------------------------
    prod = new maquina_1.Product(0, 'Cerveza Heineken', 2.15, 'L');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.250, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.500, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 1, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Coca Cola---------------------------------
    prod = new maquina_1.Product(0, 'Coca Cola', 0.93, 'L');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.250, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.500, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 2, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    //Pepsi---------------------------------
    prod = new maquina_1.Product(0, 'Pepsi', 0.85, 'L');
    subprd = [
        new maquina_2.SubProduct(prod.id, prod.name, 'Pequeño', prod.precio, prod.tipo, 0.250, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Mediano', prod.precio, prod.tipo, 0.500, ran()),
        new maquina_2.SubProduct(prod.id, prod.name, 'Grande', prod.precio, prod.tipo, 2, ran())
    ];
    products = { product: prod, subProduct: subprd };
    allProducts.push(products);
    return allProducts;
}
exports.load = load;
