function ProductDetails() {
    return (
        <div>
            <h2>Product Details</h2>
            <p>This is a product details component</p>
        </div>
    )
}


export default function Product() {
  return (
    <div>
      <h2>Product</h2>
      <p>This is a product component</p>

      <ProductDetails />
    </div>
  );
}