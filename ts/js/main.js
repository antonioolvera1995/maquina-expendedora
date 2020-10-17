"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
class Product {
    constructor(id, name, precio, tipo) {
        this.id = id;
        this.name = name;
        this.precio = precio;
        this.tipo = tipo;
    }
}
class SubProduct extends Product {
    constructor(id, name, subName, precio, tipo, peso, stock) {
        super(id, name, precio, tipo);
        this.subName = subName;
        this.peso = peso;
        this.stock = stock;
    }
    priceCalc() {
        let subPrecio;
        subPrecio = this.precio * this.peso;
        return subPrecio;
    }
}
let allProductss = [];
let ran = () => {
    return Math.round(Math.random() * 10);
};
function load() {
    let prod = new Product(0, "Kit Kat", 10, "Kg");
    let subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.1, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.3, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 0.6, ran()),
    ];
    let products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(1, "Donuts", 9.95, "Kg");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.3, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.6, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 1, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(2, "Galletas Oreo", 9.25, "Kg");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.2, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.5, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 0.9, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(3, "Chicles Trident", 46.9, "Kg");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.02, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.1, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 0.12, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(4, "Chicles Orbit", 41.02, "Kg");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.02, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.1, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 0.12, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(5, "Patatas Lays", 9.44, "Kg");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.16, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.2, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 0.3, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(6, "Doritos", 9.32, "Kg");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.16, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.2, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 0.3, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(7, "Agua de Lanjaron", 0.35, "L");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.5, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 1.5, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 2.5, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(8, "Cerveza Mahou", 2.2, "L");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.25, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.5, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 1, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(9, "Cerveza Heineken", 2.15, "L");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.25, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.5, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 1, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(10, "Coca Cola", 0.93, "L");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.25, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.5, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 2, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    prod = new Product(11, "Pepsi", 0.85, "L");
    subprd = [
        new SubProduct(prod.id, prod.name, "Pequeño", prod.precio, prod.tipo, 0.25, ran()),
        new SubProduct(prod.id, prod.name, "Mediano", prod.precio, prod.tipo, 0.5, ran()),
        new SubProduct(prod.id, prod.name, "Grande", prod.precio, prod.tipo, 2, ran()),
    ];
    products = { product: prod, subProduct: subprd };
    allProductss.push(products);
    return allProductss;
}
let money = 30;
let hour = { horas: 8, minutos: 0 };
const percentageError = 10;
let products = load();
function checkCard() {
    let blockCard = false;
    let card = {
        name: "Antonio",
        cardNumber: 1234567891234567,
        expiration: "16/24",
        cvv: 123,
    };
    if (card.name.length > 0) {
        if (card.cardNumber > 999999999999999 &&
            card.cardNumber < 9999999999999999) {
            if (card.expiration.length == 5) {
                if (card.cvv > 99 && card.cvv < 999) {
                    console.log("Tarjeta Aceptada con exito");
                }
                else {
                    blockCard = true;
                    console.log("El número de la tarjeta debe se de 3 dígitos");
                }
            }
            else {
                blockCard = true;
                console.log("Rellene la fecha de caducidad correctamente");
            }
        }
        else {
            blockCard = true;
            console.log("El número de la tarjeta debe se de 16 dígitos");
        }
    }
    else {
        blockCard = true;
        console.log("Por favor, rellene el campo nombre");
    }
    if (!blockCard) {
        checkProduct(0, 0);
    }
}
function connectionIssues() {
    let acept = new Promise((resolve, reject) => {
        setTimeout(() => {
            let blockPor = false;
            var prob = Math.round(100 * Math.random());
            for (let i = 0; i < Math.round(percentageError); i++) {
                if (i === prob) {
                    blockPor = true;
                }
            }
            if (!blockPor) {
                resolve("Conexión establecida");
            }
            else {
                reject("Error al intentar establecer la conexión");
            }
        }, 3000);
    });
    return acept;
}
function checkProduct(id, id2) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let connect = yield connectionIssues();
            console.log(connect);
            let actuallProduct = {
                id: products[id].subProduct[id2].id,
                id2: id2,
                name: products[id].subProduct[id2].name,
                subName: products[id].subProduct[id2].subName,
                precio: products[id].subProduct[id2].precio,
                subPrecio: products[id].subProduct[id2].priceCalc(),
                tipo: products[id].subProduct[id2].tipo,
                peso: products[id].subProduct[id2].peso,
                stock: products[id].subProduct[id2].stock,
            };
            let blockHour = false;
            if (id === 8 || id === 9) {
                let hor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
                for (const i of hor) {
                    if (hour.horas === i) {
                        if (hour.horas === 8 && hour.minutos > 0) {
                        }
                        else {
                            blockHour = true;
                        }
                    }
                }
            }
            if (!blockHour) {
                if (actuallProduct.stock <= 0) {
                    console.log(`Lo sentimos, nos hemos quedado sin Stock de: ${actuallProduct.name} ${actuallProduct.subName}`);
                }
                else {
                    sellProduct(actuallProduct);
                }
            }
            else {
                console.log("Restricciones al consumo de alcohol entre las 22h y las 8h establecidas por el gobierno.");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
function sellProduct(produc) {
    if (money < produc.subPrecio) {
        console.log("Dinero insuficiente, selecciona otro producto");
    }
    else {
        money = money - produc.subPrecio;
        products[produc.id].subProduct[produc.id2].stock -= 1;
        sold();
    }
}
function sold() {
    console.log("Producto vendido con éxito, gracias por su compra.");
}
function loadingHtml() {
    let contenido = "";
    for (let i = 0; i < products.length; i++) {
        let cont = ` <div class="item-${i}">
    <div class="title">
        <p class="title-1" id="name-${i}">${products[i].product.name}</p>
        <p class="title-2" id="precio-${i}">${products[i].product.precio}€ ${products[i].product.tipo}</p>
    </div>
    <div class="img"><img id="img-${i}" src="./img/img-${i}.jpg" alt=""></div>
    <div class="bt" id="bt-${i}" value="${i}">
        <p>COMPRAR</p>
    </div>

    <div class="select">
        <select name="size">
            <option value="0">Pequeño</option>
            <option value="1">Mediano</option>
            <option value="2">Grande</option>
        </select>
    </div>
</div>`;
        contenido += cont;
    }
    contenido +=
        `<div class="finally">

   <div class="finally-1"></div>
</div>`;
    let main = document.getElementById("main");
    main.innerHTML = contenido;
}
loadingHtml();
(_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    console.log(e.composedPath()[1].getAttribute('value'));
});
