import { Product } from './Product.js';

class ProductManager {
    constructor() {
        this.products = [];
    }

    sumaId = () => {
        const count = this.products.length;
        const nextId = (count > 0) ? this.products[count - 1].id + 1 : 1;
        return nextId;
    }

    addProduct(product) {
        if (!this.products.find((p) => p.code === product.code)) 
        {
            product['id'] = this.sumaId();
            this.products.push(product);
        }
    }
    getProducts() {
        // this.products.forEach((p) => {
        //     console.log(p.getProductAsStr());
        // });
        return this.products;
    }

    getProductById(id) {
        if (this.products.find((p) => p.id === id)) {
            return this.products.find((p) => p.id === id);
        } else {
            return 'Not found';
        }
    }

}

const product_ = new Product('Protector solar FPS 50', 'Solares', 100, 'https://farmaciaslider.com.ar/352-thickbox_default/dermaglos-protector-solar-con-fps-30-x-250ml.jpg', '1', 100);
const product2 = new Product('mismo id', 'Solares', 100, 'https://farmaciaslider.com.ar/352-thickbox_default/dermaglos-protector-solar-con-fps-30-x-250ml.jpg', '1', 100);
const product3 = new Product('Protector solar FPS 30', 'Solares', 100, 'https://farmaciaslider.com.ar/352-thickbox_default/dermaglos-protector-solar-con-fps-30-x-250ml.jpg', '2', 100);
const product4 = new Product('Protector solar FPS 15', 'Solares', 100, 'https://farmaciaslider.com.ar/352-thickbox_default/dermaglos-protector-solar-con-fps-30-x-250ml.jpg', '3', 100);

console.log('eeeeeeeee');


const productManager = new ProductManager();
productManager.addProduct(product_);
productManager.addProduct(product2); 
productManager.addProduct(product3);
productManager.addProduct(product4);


console.log(productManager.getProducts()); 

console.log(productManager.getProductById(1)); 
console.log(productManager.getProductById(4)); 
