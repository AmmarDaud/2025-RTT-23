import axios from 'axios'

async function fetchProducts(){
    try {
        const response = await axios.get('https://dummyjson.com/products')
        console.log(response.data);
        
    } catch (error) {
        console.error(error);
    }
}

async function createProduct(){
    try {
        const newProduct = {
            title: "test",
            price: 999
        }
        const response = await axios.post("https://dummyjson.com/products/add", newProduct)
        console.log(response.data);
        
    } catch (error) {
        console.error(error);
        
    }
}

// fetchProducts()
createProduct()