import {
    useState,
    useEffect
  } from "react";

import React from "react";

import {
  Popover,
  PopoverBody,
  PopoverHeader,
  Card,
  Container,
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Carousel
  } from "react-bootstrap";
  

import './style.css'   
import iphonephone from '../../image/iphonephone.jpg'
import iphonelogo from '../../image/iphonelogo.png'
import infinixlogo from '../../image/infinixlogo.jpg'
import samsunglogo from '../../image/samsunglogo.jpg'
import oppologo from '../../image/oppologo.jpg'
import realmelogo from '../../image/realmelogo.jpg'
import sonylogo from '../../image/sonylogo.jpg'
import xiaomilogo from '../../image/xiaomilogo.jpg'
import pocologo from '../../image/pocologo.jpg'
import asuslogo from '../../image/asuslogo.jpg'
import vivologo from '../../image/vivologo.jpg'
import nokialogo from '../../image/nokialogo.jpg'
import samsungphone from '../../image/samsungphone.jpg'
import smartphone from '../../image/smartphone.jpg'
import vivophone from '../../image/vivophone.jpg'
import iphonephone2 from '../../image/iphonephone2.png'
import oppophone from '../../image/oppophone.jpg'
import ip from '../../image/ip.jpg'
import samsungflip from '../../image/samsungflip.jpg'
import oppophone2 from '../../image/oppophone2.jpg'


const Index = () =>{


    return (
        <>
      <Container>  
        <div className="navbarmenu">
          <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">Blue Tech Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link active href="/" className="hover-underline-animation">Home</Nav.Link>
                <Nav.Link href="/aboutus" className="hover-underline-animation">About Us</Nav.Link>
                <NavDropdown title="Type" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Type 1</NavDropdown.Item>
                    <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">Type 2</NavDropdown.Item>
                    <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Type 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/login" className="hover-underline-animation">Login</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       </div>
    </Container>

      <Container>
        <div className="main">
        <Row style={{textAlign:"center"}}>
          <Col lg="6" className="welcome">
              <p className="intro">Welcome to Blue Tech</p>
              <p style={{textShadow:" 2px 2px 8px black"}}>The best platform to get your phone</p>
          </Col>

          <Col lg="6" style={{textAlign:"center"}} >
            <div>
            <Carousel fade className="carouselsetting">
            <Carousel.Item>
              <img
                style={{borderRadius: "20px"}}
                className="d-block w-100 carouselpictsize"
                src={iphonephone2}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Iphone</h3>
                <p>Elegant, Modern, Trendy</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{borderRadius: "20px"}}
                className="d-block w-100 carouselpictsize"
                src={samsungphone}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Samsung</h3>
                <p>Modern, Classic, Slim</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{borderRadius: "20px"}}
                className="d-block w-100 carouselpictsize"
                src={oppophone}
                alt="Third slide"
              />

              <Carousel.Caption color="primary">
                <h3>Oppo</h3>
                <p>Colorful, Stylish, Modern</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
          </Col>
        
        </Row>
        </div>
      </Container>


      <Container className="first">
        <Row>
          <Col lg="3" style={{marginTop:"30px"}} className="ourpartner" >
            <h3 style={{fontFamily:"Yanone Kaffeesatz, sans-serif",fontSize:"50px"}}>Our Partner</h3>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <img src={iphonelogo} alt="iphonelogo" className="partner" />
          </Col>
          <Col lg="3">
            <img src={sonylogo} alt="sonylogo" className="partner" />
          </Col>
          <Col lg="3">
            <img src={oppologo} alt="oppologo" className="partner" />
          </Col>
          <Col lg="3">
            <img src={pocologo} alt="pocologo" className="partner" />
          </Col>
        </Row>
        <Row>
            <Col lg="4">
              <img src={xiaomilogo} alt="xiaomilogo" className="partner" />
            </Col>
            <Col lg="4">
              <img src={samsunglogo} alt="samsunglogo" className="partner" />
            </Col>
            <Col lg="4">
              <img src={realmelogo} alt="realmelogo" className="partner" />
            </Col>
        </Row>
        <Row>
          <Col lg="3">
            <img src={asuslogo} alt="asuslogo" className="partner" />
          </Col>
          <Col lg="3">
            <img src={vivologo} alt="vivologo" className="partner" />
          </Col>
          <Col lg="3">
            <img src={nokialogo} alt="nokialogo" className="partner" />
          </Col>
          <Col lg="3">
            <img src={infinixlogo} alt="infinixlogo" className="partner" />
          </Col>
        </Row>
        <br /><br />
      </Container>

      <Container className="second">
        <Row className="d-flex justify-content-end">
  
          <Col lg ="3" className="promo" style={{marginTop:"30px"}}>
            <h3 style={{fontFamily:"Yanone Kaffeesatz, sans-serif",fontSize:"60px"}}>Today's Promo</h3>
          </Col>
        </Row>

        <Row style={{marginTop:"20px"}}>

            <Col lg="4" className="d-flex justify-content-center">
              <Card style={{ width: '15rem'}} className="cardstyle">
                <Row>
                  <img src={ip} alt="iphone12" className="imgsizing" />
                </Row>
                <div className="boxpromo">
                <Row>
                  <Col lg="12">
                    <Card.Header className="cardtitle">Iphone 12</Card.Header>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p style={{textDecoration:"line-through"}}>Rp 12.000.000</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p className="discount"> Disc 30%</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p style={{fontFamily:'Yanone Kaffeesatz sans-serif',fontSize:"30px"}}>Rp 8.400.000</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button>Buy Now</Button>
                  </Col>
                </Row>
                <br />
                </div>
              </Card>
            </Col> 

            <Col lg="4" className="d-flex justify-content-center">
              <Card style={{ width: '15rem'}} className="cardstyle">
                <Row>
                  <img src={samsungflip} alt="samsungflip" className="imgsizing" />
                </Row>
                <div className="boxpromo">
                <Row>
                  <Col lg="12">
                    <Card.Header className="cardtitle">Samsung Z Flip</Card.Header>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p style={{textDecoration:"line-through"}}>Rp 15.000.000</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p className="discount"> Disc 30%</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p style={{fontFamily:'Yanone Kaffeesatz sans-serif',fontSize:"30px"}}>Rp 10.500.000</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button>Buy Now</Button>
                  </Col>
                </Row>
                <br />
                </div>
              </Card>
            </Col> 

            <Col lg="4" className="d-flex justify-content-center">
              <Card style={{ width: '15rem'}} className="cardstyle">
                <Row>
                  <img src={oppophone2} alt="Oppo Phone" className="imgsizing" />
                </Row>
                <div className="boxpromo">
                <Row>
                  <Col lg="12">
                    <Card.Header className="cardtitle">Oppo Reno</Card.Header>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p style={{textDecoration:"line-through"}}>Rp 10.000.000</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p className="discount"> Disc 30%</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="d-flex justify-content-center">
                  <Card.Text><p style={{fontFamily:'Yanone Kaffeesatz sans-serif',fontSize:"30px"}}>Rp 7.000.000</p></Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button>Buy Now</Button>
                  </Col>
                </Row>
                <br />
                </div>
              </Card>
            </Col> 
          
        </Row>
      <br /><br />
      </Container>

      <Container>
        <div className="footer">
            <Row>
              <Col lg="6">
                <h2  className="footertitle">Blue Tech Shop</h2>  
                <Row>
                  <Col lg="12" className="footertext" style={{marginLeft:"5px",textAlign:"justify"}}>
                  Menjadi tempat favorit anda dalam mendapatkan gadget impian anda. Berbagai kemudahan, kenyamanan, dan pelayanan terbaik yang bisa anda dapatkan melalui kami.
                  </Col>
                </Row>
              </Col>

              <Col lg ="3">
                <h3 className="footertitle">Follow Us</h3>
              </Col>

              <Col lg="3" style={{width:"300px",height:"300px",overflowY:"scroll"}}>
                <h3 className="footertitle">Feedback</h3>
                <Row>
                  <Col lg="12" className="footertext">
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Button type="submit"> 
                        Submit
                      </Button>
                    </Form>
                    <br />
                  </Col>
                </Row>
              </Col>
            </Row>
        </div>
      </Container>  
      </>
    )

} 

export default Index