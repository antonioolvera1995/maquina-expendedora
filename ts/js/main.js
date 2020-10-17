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
Object.defineProperty(exports, "__esModule", { value: true });
const load_1 = require("./load");
let money = 30;
let hour = { horas: 8, minutos: 0 };
const percentageError = 10;
const ran = () => {
    return Math.round(Math.random() * 10);
};
let products = load_1.load();
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
                console.log('Restricciones al consumo de alcohol entre las 22h y las 8h establecidas por el gobierno.');
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
function sellProduct(produc) {
    if (money < produc.subPrecio) {
        console.log('Dinero insuficiente, selecciona otro producto');
    }
    else {
        money = money - produc.subPrecio;
        products[produc.id].subProduct[produc.id2].stock -= 1;
        sold();
    }
}
function sold() {
    console.log('Producto vendido con éxito, gracias por su compra.');
}
setInterval(() => {
    checkCard();
}, 5000);
checkCard();
