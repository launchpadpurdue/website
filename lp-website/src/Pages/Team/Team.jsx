import React from 'react'
import "./team.css"
import image from './pic.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Team() {

  function ImageObject(props) {
    return (
      <div>
        <img src={props.img} width="150" alt={props.name} className="circle"/>
        <br />
        <a href={props.link} target="_blank">{props.name}</a>
      </div>
    );
  }
  return (
    <div>
        Team
        <Container>
          <Row className="justify-content-md-center">
            <Col md="2"><ImageObject name="Sean Lee" img={image} link="https://google.com" role="President" year="Sophomore"/></Col>
            <Col md="2"><ImageObject name="Joseph Lee" img={image} link="https://google.com" role="Treasurer" year="Sophomore"/></Col>
            <Col md="2"><ImageObject name="Vidya Vuppala" img={image} link="https://google.com" role="Ads/Comm Lead" year="Junior"/></Col>
            <Col md="2"><ImageObject name="Ayushi Mohanty" img={image} link="https://google.com" role="Events Lead" year="Sophomore"/></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="2"><ImageObject name="Jisoo Kim" img={image} link="https://google.com" role="Ads/Comm Team" year="Senior"/></Col>
            <Col md="2"><ImageObject name="Elise Miller" img={image} link="https://google.com" role="Events Team" year="Senior"/></Col>
            <Col md="2"><ImageObject name="Aryan Wadhwani" img={image} link="https://google.com" role="Events Team" year="Senior"/></Col>
            <Col md="2"><ImageObject name="Ishaan Raja" img={image} link="https://google.com" role="Events Team" year="Senior"/></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="2"><ImageObject name="Joey Powers" img={image} link="https://google.com" role="Ads/Comm Team" year="Junior"/></Col>
            <Col md="2"><ImageObject name="Rohan Purandare" img={image} link="https://google.com" role="Webdev Team" year="Junior"/></Col>
            <Col md="2"><ImageObject name="Akshaya Kumar" img={image} link="https://google.com" role="Ads/Comm Team" year="Junior"/></Col>
            <Col md="2"><ImageObject name="Shrinivas Venkatesan" img={image} link="https://google.com" role="Events Team" year="Sophomore"/></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="2"><ImageObject name="Visv Shah" img={image} link="https://google.com" role="Webdev Team" year="Freshman"/></Col>
            <Col md="2"><ImageObject name="Dwayne Asare" img={image} link="https://google.com" role="Webdev Team" year="Freshman"/></Col>
            <Col md="2"><ImageObject name="Jack Jiang" img={image} link="https://google.com" role="Events Team" year="Freshman"/></Col>
            <Col md="2"><ImageObject name="Sanya Mehra" img={image} link="https://google.com" role="Events Team" year="Freshman"/></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="2"><ImageObject name="Katelyn Chen" img={image} link="https://google.com" role="Ads/Comm Team" year="Freshman"/></Col>
            <Col md="2"><ImageObject name="Arielle Dong" img={image} link="https://google.com" role="Ads/Comm Team" year="Freshman"/></Col>
            <Col md="2"><ImageObject name="Joseph Daugherty" img={image} link="https://google.com" role="Webdev Team" year="Freshman"/></Col>
          </Row>
        </Container>
    </div>
  )
}
