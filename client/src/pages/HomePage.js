import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

import axios from 'axios'




const HomePage = () => {
    
     const [products, setProducts] = useState([])

     useEffect(() => {
         
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            
            setProducts(data)
       }
         fetchProducts()
     }, [])
    return (
        <>
            <h1> Fall Fashion </h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id}>
                        {/* <h3>{product.name}</h3> */}
                        <Product product={product} />
                    </Col>))}
            </Row>
        </>
    )
}

export default HomePage



