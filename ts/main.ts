//--------------------------------------Maquina---------------------------------------------------------------------------

class Product {
  readonly id: number;
  readonly name: string;
  readonly precio: number;
  readonly tipo: string;

  constructor(id: number, name: string, precio: number, tipo: string) {
    this.id = id;
    this.name = name;
    this.precio = precio;
    this.tipo = tipo;
  }
}

class SubProduct extends Product {
  readonly subName: string;
  readonly peso: number;
  public stock: number;

  constructor(
    id: number,
    name: string,
    subName: string,
    precio: number,
    tipo: string,
    peso: number,
    stock: number
  ) {
    super(id, name, precio, tipo);
    this.subName = subName;
    this.peso = peso;
    this.stock = stock;
  }

  public priceCalc(): number {
    let subPrecio: number;
    subPrecio = this.precio * this.peso;
    return subPrecio;
  }
}

//-------------------------------------------Load----------------------------------------------

let allProductss: Products[] = [];
let ran = (): number => {
  return Math.round(Math.random() * 10);
};

interface Products {
  product: Product;
  subProduct: SubProduct[];
}

function load() {
  //Kit Kat----------------------------------------
  let prod: Product = new Product(0, "Kit Kat", 10, "Kg");
  let subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.1,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.3,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.6,
      ran()
    ),
  ];
  let products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Donuts---------------------------------
  prod = new Product(1, "Donuts", 9.95, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.3,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.6,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      1,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Galletas Oreo---------------------------------
  prod = new Product(2, "Galletas Oreo", 9.25, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.2,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.9,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Chicles Trident---------------------------------
  prod = new Product(3, "Chicles Trident", 46.9, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.02,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.1,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.12,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Chicles Orbit---------------------------------
  prod = new Product(4, "Chicles Orbit", 41.02, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.02,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.1,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.12,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Patatas Lays---------------------------------
  prod = new Product(5, "Patatas Lays", 9.44, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.16,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.2,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.3,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Doritos---------------------------------
  prod = new Product(6, "Doritos", 9.32, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.16,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.2,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.3,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Agua de Lanjaron---------------------------------
  prod = new Product(7, "Agua de Lanjaron", 0.35, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      1.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      2.5,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Cerveza Mahou---------------------------------
  prod = new Product(8, "Cerveza Mahou", 2.2, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.25,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      1,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Cerveza Heineken---------------------------------
  prod = new Product(9, "Cerveza Heineken", 2.15, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.25,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      1,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Coca Cola---------------------------------
  prod = new Product(10, "Coca Cola", 0.93, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.25,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      2,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Pepsi---------------------------------
  prod = new Product(11, "Pepsi", 0.85, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.25,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      2,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  return allProductss;
}
//-------------------------------------------Load----------------------------------------------

let money: number = 30;
let hour = { horas: 8, minutos: 0 }; //crear interface
const percentageError: number = 10; // probabilidad de error
let products = load();

interface Card {
  name: string;
  cardNumber: number;
  expiration: string;
  cvv: number;
}

interface ActuallProduct {
  id: number;
  id2: number;
  name: string;
  subName: string;
  precio: number;
  subPrecio: number;
  tipo: string;
  peso: number;
  stock: number;
}

function checkCard() {
  let blockCard: boolean = false;
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
      let blockPor: boolean = false;
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
    let blockHour: boolean = false;

    if (id === 8 || id === 9) {
      let hor: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
      for (const i of hor) {
        if (hour.horas === i) {
          if (hour.horas === 8 && hour.minutos > 0) {
          } else {
            blockHour = true;
          }
        }
      }
    }
    if (!blockHour) {
      if (actuallProduct.stock <= 0) {
        console.log(
          `Lo sentimos, nos hemos quedado sin Stock de: ${actuallProduct.name} ${actuallProduct.subName}`
        );
      } else {
        sellProduct(actuallProduct);
      }
    } else {
      console.log(
        "Restricciones al consumo de alcohol entre las 22h y las 8h establecidas por el gobierno."
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function sellProduct(produc: ActuallProduct) {
  if (money < produc.subPrecio) {
    console.log("Dinero insuficiente, selecciona otro producto");
  } else {
    money = money - produc.subPrecio;
    products[produc.id].subProduct[produc.id2].stock -= 1;
    sold();
  }
}

function sold() {
  console.log("Producto vendido con éxito, gracias por su compra.");
}



//------------------------------------------------Cargar html----------------------------------------------------------------------------

function loadingHtml() {
  let contenido: string = "";

  for (let i = 0; i < products.length; i++) {

    let cont: string = ` <div class="item-${i}">
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



  let main = document.getElementById("main") as HTMLInputElement;
  main.innerHTML = contenido;
}
loadingHtml();


document.querySelector('html')?.addEventListener('click',(e)=>{

  
console.log(e.composedPath()[1].getAttribute('value'));


});