"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubProduct = exports.Product = void 0;
class Product {
    constructor(id, name, precio, tipo) {
        this.id = id;
        this.name = name;
        this.precio = precio;
        this.tipo = tipo;
    }
}
exports.Product = Product;
class SubProduct extends Product {
    constructor(id, name, subName, precio, tipo, peso, stock) {
        super(id, name, precio, tipo);
        this.subName = subName;
        this.peso = peso;
        this.stock = stock;
    }
}
exports.SubProduct = SubProduct;
