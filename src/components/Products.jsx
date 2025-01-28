import React from 'react';
import Product from './Products';


const Products = (props) => {
  const {products} = props;

  return (
    <div className='products'>
        {
           products.map ( (product) => (
            <Product key= {products.id} product = {product} />
           ))
        }
    </div>
  )
}

export default Products