import React from 'react'
import Navv from './Navv'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Form from 'react-bootstrap/Form';
import fb from './assets/fb.svg'
import { Link } from "react-router-dom";
import main2 from "./assets/main2.svg";
import tele from "./assets/telegram.svg";
function Getstarted() {
  
  return (
      <>
      <Navv />
      
      <Container>
 <Row>
   {/* first ###################start############################# */}
     <Col xs={12} md={6} className='mt-5' >
       <Row style={{borderRight:"2px solid rgba(244, 246, 248, 1)"}}>
  
    <Col xs={12}>
        <h1>Your video is ready!</h1>
    </Col>

    <Col xs={12}>
         Name
         <Form.Control
        type="text"
        placeholder="Untitled_Video_20232509 "
        aria-label="Disabled input example"
        disabled
        readOnly
        style={{color:"rgba(65, 60, 109, 1)",fontWeight:"600"}}
      />
      <br />
      </Col>

      <Col xs={12}>
        <p>Video Url</p>
      <Form.Control
        type="text"
        placeholder="enter email of receiver"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      </Col>

      <Col xs={12}>
      <p>Video Url</p>
      <Form.Control
        type="text"
        placeholder="enter email of receiver"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      </Col>

      <Col xs={12} md={12}>
      <p style={{fontFamily:"Sora', sans-serif"}}>Share your video </p>
      
       <Button className='me-1' variant="outline-primary"> <Image fluid src={fb} /> Facebook</Button >
        <Button className='me-1' variant="outline-success">WhatsApp</Button>
         <Button  variant="outline-info"> <Image fluid src={tele} /> Telegram</Button>
    
        
      </Col>

       </Row>
     </Col>
      {/* first ###################stop############################# */}

      {/* second ###################start############################# */}
     <Col xs={12} md={6}> 

     </Col> 
       {/* second ###################stop############################# */}




 </Row>






      </Container>
     <Container fluid>
      <Row className='py-5 pt-3'>
        <Col xs={12} style={{background:"rgba(231, 231, 237, 0.2)"}} className='text-center '> 
               <h4 className='mx-auto py-3 pt-md-5' style={{maxWidth:"600px"}}>To ensure the availability and privacy of your video, we recommend saving it to your account.</h4>
               <Button  style={{fontWeight:"500",background:"rgba(18, 11, 72, 1)",borderColor:"rgba(18, 11, 72, 1)",fontWeight:"500"}}>Save Video</Button>
               <span><h3 className='py-3' style={{color:"rgba(126, 126, 126, 1)"}}>Don’t have an account? <Link to="/login" style={{color:"rgba(18, 11, 72, 1)"}}>Create account</Link> </h3></span>
        </Col>
      </Row>
     </Container>
      
     <Container fluid>
        <Row
          className="p-5 "
          style={{
            backgroundColor: "rgba(18, 11, 72, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          <Col xs={12} md={3}>
            <Row>
              <Col xs={2}>
                {" "}
                <Image className="w-100" src={main2} fluid />{" "}
              </Col>
              <Col style={{ color: "rgba(255, 255, 255, 1)" }} xs={10}>
                <h3>HelpMeOut</h3>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={3}>
            <h3>Menu</h3>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>Home</p>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>Converter</p>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>How it Works</p>
          </Col>

          <Col xs={12} md={3}>
            <h3>About us</h3>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>About</p>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>Contact Us</p>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>Privacy Policy</p>
          </Col>

          <Col xs={12} md={3}>
            <h3>Screen Record</h3>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>Brower Window</p>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>Desktop</p>
            <p style={{fontFamily: 'Work Sans sans-serif'}}>Application</p>
          </Col>
        </Row>
      </Container>
      
      
      
      </>
   
  )
}

export default Getstarted