import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGoup, Card, Button, ListGroup } from 'react-bootstrap'
import Rating from '../Rating'
import products from '../../products'

const ProductPage = ({ match }) => {
    const product = products.find(p => p._id == match.params.id)
    console.log('products')
    return ( <>
        <Link className='btn btn-dark my-3' to='/'> 
        Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={process.env.PUBLIC_URL + product.image} alt={product.name} />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                <ListGroup.Item >
                    <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.Reviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </>
    )
}

export default ProductPage
