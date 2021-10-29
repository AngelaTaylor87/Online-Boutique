import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Product'
import products from '../../products'




const HomePage = () => {//setProducts
    //const [products] = useState([])

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await app.get('/api/products')
            
    //         setProducts(data)
    //     }
    //     fetchProducts()
    // }, [])
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

export default HomePage



