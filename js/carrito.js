class Producto{
    constructor(precio){
        this.precio = precio;
    }
}


class Carrito {

    constructor() {
        saldo=0;
    }
    agregarProducto(producto){
        saldo=producto.precio;
    }
    removerProducto(producto){
        saldo=saldo-producto.precio;
    }
    
  }

let remera=Producto(50);
let pantalon=Producto(10);
let jean=Producto(5);


