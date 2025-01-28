import React from 'react'

const Product = ({product}) => {

  return (
    <section className="product">

    <img src={product.image} alt="" />

    <div className = "product_details ">
        <h4 className="product_title">{product.title}</h4>
        <p>Price : ${product.price}</p>
        <p>Rating : {product.rating.rate}</p>
        <p className="product__desc">Description: {product.description}</p>
        <button className="product__btn btn">Add to cart</button>
    </div>
    </section>
  )
}

export default Product