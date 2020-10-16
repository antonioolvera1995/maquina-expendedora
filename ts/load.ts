import { Product } from "./Maquina";
import { SubProduct } from "./Maquina";

let allProducts:Products[] = [];
let ran = ():number=>{return Math.round((Math.random()*10));}

interface Products {
  product: Product;
  subProduct: SubProduct[];
}


export function load(){

    //Kit Kat
    let prod:Product = new Product(0,'Kit Kat', 10, 'Kg' );
    let subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 100, ran()),
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 300, ran()),
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 600, ran())
    ];
    let products = { product:prod, subProduct:subprd};

      allProducts.push(products);

    //Donuts
    console.log(allProducts[0]);
    
}
