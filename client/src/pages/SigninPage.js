import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SigninPage = () => {
    return (
        <>
        <Link className='btn btn-dark my-3' to='/'> 
        Back
        </Link>
            <h2>Sign In</h2>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </>
    )
}

export default SigninPage
