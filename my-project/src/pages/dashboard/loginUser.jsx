import React from "react";

import {
  useState,
  useEffect
} from "react";

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
    FloatingLabel,
    Carousel
    } from "react-bootstrap";


const loginRegister = () =>{

    return(
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
                        <Nav.Link href="/" className="hover-underline-animation">Home</Nav.Link>
                        <Nav.Link href="/aboutus" className="hover-underline-animation">About Us</Nav.Link>
                        <NavDropdown title="Type" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Type 1</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4">Type 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Type 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link active href="/login" className="hover-underline-animation">Login</Nav.Link>
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
            
          {/* login */}
            <Container>
              <div className="loginform">
                <Row >
                  <Col lg="12" >
                    <p className="loginregistertitle">Login</p>
                  </Col>
                </Row>

                <Row>
                <Col lg="6" >
                <div className="formloginfield ">
                  <Form>
                  <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <br />
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
                </Col>

                <Col lg="6" style={{textAlign:'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
                      <p>Dont have an account? <a href="/register">Sign Up Now</a> </p>
                </Col>
                </Row>
                </div>
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

export default loginRegister