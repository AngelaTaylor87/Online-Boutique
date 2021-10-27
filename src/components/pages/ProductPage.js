
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGoup, Card, Button } from 'react-bootstrap'
import Rating from '../Rating'
import products from '../../products'

const ProductPage = ({match}) => {
    const product = products.find(p => p.id === match.params.id)
    return (
        <>
        <Link className='btn btn-dark my-3' to='/'> Back
            </Link>
            
        </>
    )
}

export default ProductPage
