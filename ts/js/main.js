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
var _a, _b, _c;
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
        subPrecio = Math.round(subPrecio * 100);
        subPrecio = subPrecio / 100;
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
let carBlockCheck = false;
let card = {
    name: "",
    cardNumber: 1,
    expiration: "",
    cvv: 0,
};
function checkCard(id, id2) {
    if (carBlockCheck) {
        checkProduct(id, id2);
    }
    else {
        alert('Verifica la tarjeta de crédito');
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
        sold(produc);
    }
}
function sold(produc) {
    console.log("Producto vendido con éxito, gracias por su compra.");
    let id3;
    let stock;
    let valu = produc.id;
    id3 = document.getElementById(`select-${valu}`);
    stock = document.getElementById(`stock-${valu}`);
    stock.textContent = `Stock: ${products[Number(valu)].subProduct[Number(produc.id2)].stock}`;
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
        <p value="${i}">COMPRAR</p>
    </div>

    <div class="select">
        <select num="${i}" id="select-${i}" name="size">
            <option value="0">Pequeño ${products[i].subProduct[0].peso} ${products[i].subProduct[0].tipo}</option>
            <option value="1">Mediano ${products[i].subProduct[1].peso} ${products[i].subProduct[0].tipo}</option>
            <option value="2">Grande ${products[i].subProduct[2].peso} ${products[i].subProduct[0].tipo}</option>
        </select>
    </div>

    <div class="info" >
        <p id="stock-${i}">Stock: ${products[i].subProduct[0].stock}</p>
        <p id="subprecio-${i}">Precio: ${products[i].subProduct[0].priceCalc()}€</p>
    </div>

</div>`;
        contenido += cont;
    }
    contenido += `<div class="finally">

   <div class="finally-1"></div>
</div>`;
    let main = document.getElementById("main");
    main.innerHTML = contenido;
}
loadingHtml();
(_a = document.querySelector("html")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
    let value = e.target.getAttribute("value");
    let id2;
    let stock;
    let subprice;
    let id3;
    if (e.target.name == 'size') {
        let valu = e.target.getAttribute('num');
        id3 = document.getElementById(`select-${valu}`);
        stock = document.getElementById(`stock-${valu}`);
        subprice = document.getElementById(`subprecio-${valu}`);
        stock.textContent = `Stock: ${products[Number(valu)].subProduct[Number(id3.value)].stock}`;
        subprice.textContent = `Precio: ${products[Number(valu)].subProduct[Number(id3.value)].priceCalc()}€`;
    }
    switch (value) {
        case "0":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "1":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "2":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "3":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "4":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "5":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "6":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "7":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "8":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "9":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "10":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        case "11":
            id2 = document.getElementById(`select-${value}`);
            checkCard(Number(value), Number(id2.value));
            break;
        default:
            break;
    }
});
let cardNumb1 = document.getElementById('number-card');
cardNumb1.addEventListener('keyup', () => {
    if (cardNumb1.value.length > 16) {
        cardNumb1.value = (cardNumb1.value).substring(0, 16);
    }
});
let cardCvv = document.getElementById('cvv-card');
cardCvv.addEventListener('keyup', () => {
    if (cardCvv.value.length > 3) {
        cardCvv.value = (cardCvv.value).substring(0, 3);
    }
});
let cardExp = document.getElementById('expiration-card');
cardExp.addEventListener('keyup', () => {
    if (cardExp.value.length > 5) {
        cardExp.value = (cardExp.value).substring(0, 5);
    }
    if (cardExp.value.length === 5 || cardExp.value.length === 3) {
        cardExp.value = (cardExp.value).substring(0, 2) + '-' + (cardExp.value).substring(3, 5);
    }
});
(_b = document.getElementById('bt-card')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    let nam = document.getElementById('name-card');
    let num = document.getElementById('number-card');
    let exp = document.getElementById('expiration-card');
    let cvv = document.getElementById('cvv-card');
    carBlockCheck = true;
    card.name = nam.value;
    card.cardNumber = Number(num.value);
    card.expiration = exp.value;
    card.cvv = Number(cvv.value);
    let blockCard = false;
    if (card.name.length > 0) {
        if (card.cardNumber > 999999999999999 &&
            card.cardNumber < 9999999999999999) {
            if (card.expiration.length == 5) {
                if (card.cvv > 99 && card.cvv < 999) {
                    console.log("Tarjeta Aceptada con exito");
                }
                else {
                    blockCard = true;
                    alert("El número de la tarjeta debe se de 3 dígitos");
                }
            }
            else {
                blockCard = true;
                alert("Rellene la fecha de caducidad correctamente");
            }
        }
        else {
            blockCard = true;
            alert("El número de la tarjeta debe se de 16 dígitos");
        }
    }
    else {
        blockCard = true;
        alert("Por favor, rellene el campo nombre");
    }
    if (!blockCard) {
        carBlockCheck = true;
        document.getElementById('bt-card').classList.remove('bt2');
        if (document.getElementById('save').checked === true) {
            localStorage.setItem('name', card.name);
            localStorage.setItem('name', card.expiration);
            localStorage.setItem('name', card.expiration);
            localStorage.setItem('name', card.expiration);
        }
    }
    else {
        document.getElementById('bt-card').classList.add('bt2');
        carBlockCheck = false;
    }
});
(_c = document.getElementById('save')) === null || _c === void 0 ? void 0 : _c.click();
