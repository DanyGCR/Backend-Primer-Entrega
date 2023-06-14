class ProductManager {
    constructor() {
        this.products = [];
    }


getProducts = () => {
    return this.products;
}


addProduct(product) {

    if (

      product.title,

      product.description ,

      product.price, 

      product.thumbnail,

      product.stock, 

      product.code

    ) {

      console.log(

        "Informacion erronea, revisar propiedades"

        );

        return

    }



    if (this.products.find(item => item.code === product.code)) {

        console.log("Este producto ya existe en el carrito")

        return

    }


    const productToAdd = {

        ...product, id: this.products.length +1

    }

    this.products.push(productToAdd);

}

getProducts() {

    return this.products

}

getProductById(id) {

    const search = this.products.find((item) => item.id === id)

    return search ? search : console.log("Product not found");

     }

}

const manejadorProductos = new ProductManager ();
manejadorProductos.addProduct ('Regla', 'Transparente', 100, 'sin imagen', 'abc123', 50);
manejadorProductos.addProduct ('Goma', 'Transparente', 60, 'sin imagen', 'dfg456', 30);
manejadorProductos.addProduct ('Lapicera', 'Transparente', 50, 'sin imagen', 'hij789', 20);

manejadorProductos.getProductsById(1);
manejadorProductos.getProductsById(2);
manejadorProductos.getProductsById(3);


console.log(manejadorProductos.getProducts()); 


