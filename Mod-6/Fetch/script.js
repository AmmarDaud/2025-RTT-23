function getProductDetails() {
    return new Promise((resolve, reject) => {
        const product = {name: "TV", price: 300};
        
        setTimeout(() => {
            resolve(product)
        }, 500);
    })
}


function getProductReviews() {
    return new Promise((resolve, reject) => {
        const reviews = [{content: "This tv is awesome!"}]

        setTimeout(() => {
            resolve(reviews)
        }, 500)
    })
}


function getRelatedProducts() {
    return new Promise((resolve, reject) => {
        const relatedProducts = [{name: 'ps5', price: 500}];

        setTimeout(() => {
            resolve(relatedProducts);
        }, 500)
    })
}



getProductDetails()
.then(product => {
    console.log(product);
    return getProductReviews();
})
.then(reviews => {
    console.log(reviews);
    return getRelatedProducts();
})
.then(relatedProducts => {
    console.log(relatedProducts);
})

React

Reply

