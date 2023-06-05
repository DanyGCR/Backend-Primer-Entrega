class ProductManager {
    constructor() {
        this.products = [];
    }


getProducts = () => {
    return this.products;
}


addProduct = (title, description, price, thumbnail, code, stock,) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: []
    }

if (this.products.length === 0 ) {
    product.id = 1
} else {
    product.id = this.products [this.products.length-1 ].id + 1
}

this.products.push(product)

}

getProductsById = (idProduct) => {
    const productIndex = this.products.findIndex(product => product.id === idProduct);

    if (productIndex === -1) {
        console.log("Not Found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log("Se agrego correctamente el Producto");
        return;
    }
    this.products[productIndex].product.push(idProduct)
}
};

const manejadorProductos = new ProductManager ();
manejadorProductos.addProduct ('Regla', 'Transparente', 100, 'sin imagen', 'abc123', 50);
manejadorProductos.addProduct ('Goma', 'Transparente', 60, 'sin imagen', 'dfg456', 30);
manejadorProductos.addProduct ('Lapicera', 'Transparente', 50, 'sin imagen', 'hij789', 20);

manejadorProductos.getProductsById(1);
manejadorProductos.getProductsById(2);
manejadorProductos.getProductsById(3);


console.log(manejadorProductos.getProducts()); 


