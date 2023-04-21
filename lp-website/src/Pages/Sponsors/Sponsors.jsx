import React from 'react'
import "./sponsors.css"
import back from './back.jpg'
import comcast from './comcast.png'
import nthg from './NorthropGrummanLogo.png'
import att from './att.png'
import xtern from './xtern.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Sponsors() {
  return (
   <div className="sponsors">
      <div className='BackgroundImage'>
        <img src={back} className="background" alt="logo" />
      </div>

      <div className='FlipUp'>
        Corporate Sponsors
      </div>

      <div className='Bottom-Half'>
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur.
      </div>

      <div className='prev-sponsors'>
        <div className='prev-text'>Previous Sponsors</div>

      <Container>
        <Row>
          <Col md = "2"><img src={att}  className="pic" alt="AT&T Logo" /></Col>

          <Col md = "2"><img src={comcast} className="pic" alt="Comcast Logo" /></Col>

          <Col md = "2"><img src={nthg} className="pic" alt="Northrop Grumman Logo" /></Col>

          <Col md = "2"><img src={xtern} className="pic" alt="Xtern Logo" /></Col>
        </Row>
      </Container>
      </div>
      
   </div>
  )
}
