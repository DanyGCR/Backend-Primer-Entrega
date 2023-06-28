import { promises as fs } from "fs";

export default class ProductManager {

    constructor(ruta) {
        this.ruta = ruta;
    }


    async getById(id) {

        const search = this.products.find((item) => item.id === id)

        return search ? search : console.log("Product not found");

    }

    async getAll() {
        try {
            const products = await promises.readFile(this.ruta, 'utf-8');
            return JSON.parse(products);
        }   catch (error) {
            console.log(error);
            return [];
        }
    }

    async deleteById(id) {
        try {
            const products = await promises.readFile(this.ruta, 'utf-8');
            return JSON.parse(products);
        }   catch (deleteById) {
            console.log(deleteById);
            return [];
        }


    }

    async deleteAll() {
        try {
            const products = await promises.readFile(this.ruta, 'utf-8');
            return JSON.parse(products);
        }   catch (deleteAll) {
            console.log(deleteAll);
            return [];
        }

        
    }
}
