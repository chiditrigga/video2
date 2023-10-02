import React from 'react'
import main from "./assets/main.svg"
import google from "./assets/Google.png"

import line1 from "./assets/Line1.png"
import line2 from "./assets/Line2.png"

import fb from "./assets/fb.svg"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./index.css";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <>
     
    <Container>
<Row className='pt-5'>

    <Col xs={12} >
     <Image fluid src={main} /> <span style={{fontWeight:"700",color:"rgba(16, 10, 66, 1)"}}>HelpMeOut</span>
    </Col>
      

</Row>

<Row>
    <Col className='mx-auto text-center' xs={12} style={{maxWidth:"600px"}}>
          <Col> <h1>Log in or Sign up</h1></Col>
          <Col className='mx-auto' style={{maxWidth:"350px"}}>
               <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
          </Col>
          <Col className='my-3'><Button variant="outline-primary" className='w-100' ><Image fluid src={fb} /> <span  style={{fontSize:"500"}}>Continue with Google</span> </Button></Col>
          <Col><Button variant="outline-warning" style={{fontSize:"500"}} className='w-100'><Image src={google} /> <span style={{fontSize:"500"}}>Continue with Facebook</span> </Button></Col>
          <Col xs={12}>
              
              <Row>

            <Col xs={6} className='p-3'>
                  <Image className='w-100' src={line1} />
            </Col>

            <Col xs={6} className='p-3'>
            <Image className='w-100' src={line2} />
            
            </Col>


              </Row>


            </Col>
          <Col>
          <Form className='text-start'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"500"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:"500"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='w-100' style={{background:"rgba(18, 11, 72, 1)",borderColor:"rgba(18, 11, 72, 1)",fontWeight:"500",color:"rgba(249, 249, 255, 1)"}} type="submit">
        Submit
      </Button>
    </Form>
          </Col>

          <Col>
          
          </Col>

        


    </Col>
</Row>



         







    </Container>
    
    
    </>
  )
}

export default Login