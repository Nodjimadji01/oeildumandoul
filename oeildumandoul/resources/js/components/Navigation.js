 import React from "react";
 //import Navbar from 'react-bootstrap/Navbar';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Navbar, Nav, Container, Form, FormControl , Button} from 'react-bootstrap';
 import "../pages/app.css";

 const Navigation = () => {
    return (
        <div className="navigation" >

             <Navbar bg="black" fixed="">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features"  style={{ color: 'white' }} ><a href="/" className="nomJournal">L'oeil<a style={ { color : 'blue'}}>du</a>Mandoul</a></Nav.Link>
                                </Nav>
                            <Nav>
                            <Nav.Link href="#deets"  ><a className="abonner">ABONNEZ-VOUS</a></Nav.Link>
                                <Nav.Link href="#deets"  ><a href="../pages/Notfound"  className="conneter">Se connecter</a></Nav.Link>
                                {/* <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link> */}
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/>
            <Navbar fixed="" collapseOnSelect  expand="lg"  bg="dark" variant="dark" >
                <Container>
                    {/* <Navbar.Brand href="/" >Home</Navbar.Brand> */}

                    <Navbar.Toggle  aria-aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link href="/">
                                A la une
                            </Nav.Link>
                            <Nav.Link href="/">
                               Finance
                            </Nav.Link>
                            <Nav.Link href="/">
                               Sport
                            </Nav.Link>
                             <Nav.Link href="/">
                                Education
                            </Nav.Link>
                            <Nav.Link href="/">
                               Science
                            </Nav.Link>
                            <Nav.Link href="/">
                               Divers
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {/* <Nav.Link>More deets</Nav.Link> */}
                             <Nav.Link expand="lg" style={ { color : 'red'}}>.</Nav.Link>
                        </Nav>


                    </Navbar.Collapse>

                </Container>
            </Navbar>



        </div>
   );
 }

 export default Navigation;
