function ProductItem({ product }) {
  return (
    <div className="product">
        <div className="product-image-container">
            <img className="product-image" src={product.image} alt={product.name} />
        </div>
        <div className="product-details p-5">
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <button className="bg-primary w-100 text-white m-b-10">${product.price}</button>
        </div>
    </div>
  );
}
export default ProductItem