import React from 'react'
import {Card} from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card>
          <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
          </a>  
        </Card>
    )
}

export default Product
