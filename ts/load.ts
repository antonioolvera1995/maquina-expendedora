import { Product } from "./Maquina";
import { SubProduct } from "./Maquina";

let allProducts:Products[] = [];
let ran = ():number=>{return Math.round((Math.random()*10));}

interface Products {
  product: Product;
  subProduct: SubProduct[];
}


export function load(){

    //Kit Kat----------------------------------------
    let prod:Product = new Product(0,'Kit Kat', 10, 'Kg' );
    let subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.100, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.300, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 0.600, ran())
    ];
    let products = { product:prod, subProduct:subprd};
      allProducts.push(products);

    //Donuts---------------------------------
     prod = new Product(0,'Donuts', 9.95, 'Kg' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.300, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.600, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 1, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);
    
}
