import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Product'
import products from '../../products'


const Home = () => {
    return (
        <>
            <h1> Fall Fashion </h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id}>
                        <h3>{product.name}</h3>
                        <Product product={product} />
                    </Col>))}
            </Row>
        </>
    )
}

export default Home



