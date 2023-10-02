import React from 'react'
import Navv from './Navv'

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import profile from "./assets/profile.png";
import main from "./assets/main.svg";
import down from "./assets/down.png";
import "./index.css";
import { Link } from "react-router-dom";




function VideoList() {
  return (
   <>
   <Container>
     <Row>
       <Col xs={6}>
          <Link style={{textDecoration:"none"}} to="/"><Image fluid src={main} /> <span style={{fontWeight:"700",color:"rgba(16, 10, 66, 1)"}}>HelpMeOut</span></Link>
       </Col>
       <Col className='d-flex justify-content-end'  xs={6}>
        <Image  fluid src={profile} />  <p className='pt-2'>John Mark </p>
       </Col>

     </Row>






   </Container>
    
   
   
   </>
  )
}

export default VideoList