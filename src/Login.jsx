import React from 'react'
import main from "./assets/main.svg"
import google from "./assets/Google.png"
import fb from "./assets/fb.svg"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./index.css";
import Button from "react-bootstrap/Button";

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
    <Col className='mx-auto text-center' xs={12} style={{maxWidth:"800px"}}>
          <Col> <h1>Log in or Sign up</h1></Col>
          <Col className='mx-auto' style={{maxWidth:"350px"}}>
               <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
          </Col>
          <Col className='my-3'><Button variant="outline-primary" className='w-100' style={{fontSize:"500"}}><Image src={fb} />Continue with Google</Button></Col>
          <Col><Button variant="outline-warning" style={{fontSize:"500"}} className='w-100'><Image src={google} />Continue with Facebook</Button></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>


    </Col>
</Row>



         







    </Container>
    
    
    </>
  )
}

export default Login