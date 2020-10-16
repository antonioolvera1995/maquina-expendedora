import { load } from "./load";

let money: number = 300;
let hour = { horas: 10, minutos: 13 }; //crear interface
const percentageError: number = 10;
const ran = ():number=>{return Math.round((Math.random()*10));}
let products = load();

interface Card{
    name:string,
    cardNumber:number,
    expiration:string,
    cvv:number
}

function select() {
    
    let blockCard = false;
    let card:Card = {
        name:'Antonio',
        cardNumber:1234567891234567,
        expiration:'16/22',
        cvv: 123
    }
    
    if(card.name.length>0){
        if (card.cardNumber>999999999999999 && card.cardNumber<99999999999999999) {
            if (card.expiration.length==5) {
                if (card.cvv > 99 && card.cvv < 999) {
                    console.log('correcto');
                    
                }else{blockCard = true;alert('El número de la tarjeta debe se de 3 dígitos');}
            }else{blockCard = true;alert('Rellene la fecha de caducidad correctamente');}
        }else{blockCard = true;alert('El número de la tarjeta debe se de 16 dígitos');}
    }else{blockCard = true; alert('Por favor, rellene el campo nombre');}

    

    
}
select()

// 16 card number, expiration: 12/45, cvv 123