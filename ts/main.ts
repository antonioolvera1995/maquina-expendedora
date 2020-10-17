import { load } from "./load";

let money: number = 30;
let hour = { horas: 8, minutos: 0 }; //crear interface
const percentageError: number = 10; // probabilidad de error
const ran = (): number => {
  return Math.round(Math.random() * 10);
};
let products = load();

interface Card {
  name: string;
  cardNumber: number;
  expiration: string;
  cvv: number;
}

interface ActuallProduct {
  id:number,
  id2:number,
  name: string;
  subName: string;
  precio: number;
  subPrecio:number;
  tipo: string;
  peso: number;
  stock: number;
}

function checkCard() {
  let blockCard:boolean = false;
  let card: Card = {
    name: "Antonio",
    cardNumber: 1234567891234567,
    expiration: "16/24",
    cvv: 123,
  };

  if (card.name.length > 0) {
    if (
      card.cardNumber > 999999999999999 &&
      card.cardNumber < 9999999999999999
    ) {
      if (card.expiration.length == 5) {
        if (card.cvv > 99 && card.cvv < 999) {
          console.log("Tarjeta Aceptada con exito");
        } else {
          blockCard = true;
          //alert("El número de la tarjeta debe se de 3 dígitos");
          console.log("El número de la tarjeta debe se de 3 dígitos");
        }
      } else {
        blockCard = true;
        //alert("Rellene la fecha de caducidad correctamente");
        console.log("Rellene la fecha de caducidad correctamente");
      }
    } else {
      blockCard = true;
      //alert("El número de la tarjeta debe se de 16 dígitos");
      console.log("El número de la tarjeta debe se de 16 dígitos");
    }
  } else {
    blockCard = true;
    //alert("Por favor, rellene el campo nombre");
    console.log("Por favor, rellene el campo nombre");
  }

  //Cambiar numero por id original
  if (!blockCard) {
    checkProduct(0, 0);
  }
}

function connectionIssues() {
  let acept = new Promise((resolve, reject) => {
    setTimeout(() => {
      let blockPor:boolean = false;
      var prob = Math.round(100 * Math.random());
      for (let i = 0; i < Math.round(percentageError); i++) {
        if (i === prob) {
          blockPor = true;
        }
      }
      if (!blockPor) {
        resolve("Conexión establecida");
      } else {
        reject("Error al intentar establecer la conexión");
      }
    }, 3000);
  });

  return acept;
}

async function checkProduct(id: number, id2: number) {
  try {
    let connect = await connectionIssues();
    console.log(connect);

    let actuallProduct: ActuallProduct = {
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

    //-----Restriccion del horario de consumo de alcohol-----
    let blockHour:boolean = false;

    if (id === 8 || id === 9) {
        let hor:number[] = [0,1,2,3,4,5,6,7,8,22,23];
        for (const i of hor) {
            if (hour.horas === i) {
                if (hour.horas === 8 && hour.minutos > 0) {
                }else{ blockHour = true;}
            }
        }
    }
    if (!blockHour) {
        if (actuallProduct.stock <=0) {
            console.log(`Lo sentimos, nos hemos quedado sin Stock de: ${actuallProduct.name} ${actuallProduct.subName}`);
            
        }else{
            sellProduct(actuallProduct);
        }
      
    }else{
        console.log('Restricciones al consumo de alcohol entre las 22h y las 8h establecidas por el gobierno.');
    }



  } catch (error) {
    console.log(error);
  }
}


function sellProduct(produc:ActuallProduct) {
    
if (money < produc.subPrecio) {
    console.log('Dinero insuficiente, selecciona otro producto');
}
else{
    money = money - produc.subPrecio;
    products[produc.id].subProduct[produc.id2].stock -= 1;  
    sold(); 
}

}

function sold() {
    
  console.log('Producto vendido con éxito, gracias por su compra.');
  
    }



    //Borrar cuando la interfaz este completa
    setInterval(() => {
        checkCard();
    }, 5000);
checkCard();
