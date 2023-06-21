import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();

const productmanager = new ProductManager('./productos.json');

app.use(express.urlencoded({extended: true}));

app.get('/products', async (req, res) => {
    const products = await productmanager.getAll();
    res.send(products);
})

app.get('/', async (req, res) =>{
  const products = await productmanager.getAll();
  res.send({products});

})

app.listen(8000,()=>console.log("Listening on 8080"))
