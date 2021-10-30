import React from "react";
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
const ContactPage = () =>  {
  
  
  

  return (
    <>
   <Link className='btn btn-dark my-3' to='/'> 
        Back
        </Link>
    <h1>Send us a message</h1>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name: Email</Form.Label>
    <Form.Control type="email" placeholder="email@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>
    
    </>
  );
}

export default ContactPage
