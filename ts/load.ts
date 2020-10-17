import { Product } from "./maquina";
import { SubProduct } from "./maquina";

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
     prod = new Product(1,'Donuts', 9.95, 'Kg' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.300, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.600, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 1, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Galletas Oreo---------------------------------
     prod = new Product(2,'Galletas Oreo', 9.25, 'Kg' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.200, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.500, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 0.900, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);
    

          //Chicles Trident---------------------------------
     prod = new Product(3,'Chicles Trident', 46.90, 'Kg' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.020, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.100, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 0.120, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Chicles Orbit---------------------------------
     prod = new Product(4,'Chicles Orbit', 41.02, 'Kg' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.020, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.100, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 0.120, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Patatas Lays---------------------------------
     prod = new Product(5,'Patatas Lays', 9.44, 'Kg' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.160, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.200, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo,  0.300, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Doritos---------------------------------
     prod = new Product(6,'Doritos', 9.32, 'Kg' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.160, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.200, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo,  0.300 , ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Agua de Lanjaron---------------------------------
     prod = new Product(7,'Agua de Lanjaron', 0.35, 'L' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.500, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 1.500, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo,  2.500, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Cerveza Mahou---------------------------------
     prod = new Product(8,'Cerveza Mahou', 2.20, 'L' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.250, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.500, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo,  1, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Cerveza Heineken---------------------------------
     prod = new Product(9,'Cerveza Heineken', 2.15, 'L' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.250, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.500, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 1, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Coca Cola---------------------------------
     prod = new Product(10,'Coca Cola', 0.93, 'L' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.250, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.500, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 2, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

          //Pepsi---------------------------------
     prod = new Product(11,'Pepsi', 0.85, 'L' );
     subprd = [
        new SubProduct(prod.id, prod.name, 'Pequeño',prod.precio, prod.tipo, 0.250, ran()),
        new SubProduct(prod.id, prod.name, 'Mediano',prod.precio, prod.tipo, 0.500, ran()),
        new SubProduct(prod.id, prod.name, 'Grande',prod.precio, prod.tipo, 2, ran())
    ];
     products = { product:prod, subProduct:subprd};
      allProducts.push(products);

      return allProducts;
}
