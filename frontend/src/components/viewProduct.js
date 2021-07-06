import React from "react";
import './viewProduct.css';
//import { Scrollbars } from 'react-custom-scrollbars-2';
//import Items from './Items';
//import { products } from "./products";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Carousel, Row, Navbar, Nav, } from "react-bootstrap";




function viewProduct() {

   // const [item, setItem] = useState(products);

  return(

        <>
            <Navbar>
                <Navbar.Brand href="./mainContent" className="continue-shopping">
                        <img src="./images/icons/arrow2.png" alt="arrow" className="arrow-icon"/>
                        <h3>Continue Shopping</h3>
                </Navbar.Brand>
                <Nav className="cart-icon">
                    <Nav.Link href="./Cart">
                        <img src="./images/icons/cart.png" alt="cart"/>
                        <p>5</p>
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Card>
                <Row>
                    <Carousel>
                    
                        <Carousel.Item>
                        <div className="product-img">
                                <img  src= "./images/equipment/mats/mat2.jpg" alt="First slide"/>
                              </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="product-img">
                                <img className="product-img" src= "./images/equipment/mats/mat3.jpg" alt="second slide" />
                            </div>
                        </Carousel.Item>
                        
                    </Carousel>
                    
                    <div className="info-box" >
                        <Card.Body>
                            <Card.Title>TUNTURI FITNESSMAT PRO MAT 140</Card.Title>
                            <Card.Text>
                            The solid and thick material ensures a comfortable lying down posture during your floor exercises. black in color
                            </Card.Text>
                            <Row>
                                <div className="quantity">
                                    <h2>Quantity: <input type="text" placeholder="1"/></h2>
                                </div>
                            </Row>
                            <Row>
                            <div className="price">
                                <h3>Price: LKR 5500</h3>
                            </div>
                            </Row>
                            
                            <br/>
                            <Row>
                                <Button>
                                    <Row>
                                    <i class="fa fa-shopping-cart"></i>
                                    ADD TO CART
                                    </Row>
                                </Button>
                                <Button>
                                    <Row>
                                    <i class="fas fa-heart"></i>
                                    WishList
                                    </Row>
                                </Button>
                            </Row>
                            
                        </Card.Body>
                    </div>
                </Row>
                
                
                <h1>Related Items</h1>
                <Row className="related-row">
                <Card className="related-card2">
                    <Card.Img variant="top" src="./images/equipment/mats/mat1.jpg" />
                    <Card.Body>
                        <Card.Title>Premium Fitness Mat 15mm - All in Motion</Card.Title>
                        <Card.Text>LKR 6800</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="related-card2">
                    <Card.Img variant="top" src="./images/equipment/mats/mat6.jpg" />
                    <Card.Body>
                        <Card.Title>Thick Yoga Mat With Double Coloured Surface</Card.Title>
                        <Card.Text>LKR 8800</Card.Text>
                    </Card.Body>
                </Card>
                
                <Card className="related-card2">
                    <Card.Img variant="top" src="./images/equipment/mats/mat5.jpg"/>
                    <Card.Body>
                        <Card.Title>adidas 10mm Thick Fitness Mat with Carry Strap</Card.Title>
                        <Card.Text>LKR 9860</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="related-card2">
                    <Card.Img variant="top" src="./images/equipment/mats/mat7.jpg" />
                    <Card.Body>
                        <Card.Title>FOLDING EXERCISE MAT 8’X4’X2″</Card.Title>
                        <Card.Text>LKR 12450</Card.Text>
                    </Card.Body>
                </Card>
                </Row>
            </Card>                
        </>
  )
};

export default viewProduct