import data from "./data";
function Products() {
    return(
        <div className="content">
            <ul className="products">
                {data.products.map((Products)=>(
                  <li>
                    <div className="products">
                        <img
                        className="product-image"
                        src="{product.imageUrl"
                        alt="product"
                        />
                        <div className="product-brand">{Products.brand}</div>
                        <div className="product-price">{Products.price}</div>
                        <div className="product-rating">
                            {Products.brand} stars ({Products.numberOfReviews} reviews)
                            </div>
                    </div>
                  </li>  
                ))}
                ;
            </ul>
        </div>
    );
}

export default Products;