import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import glass from '../../assets/ic_Search.png';
import glass2x from '../../assets/ic_Search@2x.png.png';
import logo from '../../assets/Logo_ML.png';
import logo2x from '../../assets/Logo_ML@2x.png.png';

class MainSearchBar extends Component {
    render() {
        return (

            // <Navbar bg="light" expand="lg">
            //     <Container>
            //         <Row>
            //             <Col md={1, { offset: 1 }}>
            //                 <Navbar.Brand href="#home">
            //                     <img src={logo} srcSet={`${logo2x} 2x`} alt='logoIcon' className="logoIcon" />
            //                 </Navbar.Brand>
            //             </Col>
            //             <Col md={9}>
            //                 <Form inline>
            //                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            //                     <Button variant="link">
            //                         <img src={glass} srcSet={`${glass2x} 2x`} alt='glassIcon' className="glassIcon" />
            //                     </Button>
            //                 </Form>
            //             </Col>
            //         </Row>
            //     </Container>
            // </Navbar>

            // <Navbar bg="light" expand="lg">
            //     <Container>
            //         <Navbar.Brand href="#home">
            //             <img src={logo} srcSet={`${logo2x} 2x`} alt='logoIcon' className="logoIcon" />
            //         </Navbar.Brand>
            //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //         <Navbar.Collapse id="basic-navbar-nav">
            //             <Form inline>
            //                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            //                 <Button variant="link">
            //                     <img src={glass} srcSet={`${glass2x} 2x`} alt='glassIcon' className="glassIcon" />
            //                 </Button>
            //             </Form>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a class="navbar-brand" href="#home">
                        <img src={logo} srcSet={`${logo2x} 2x`} alt='logoIcon' className="logoIcon" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-link" type="submit">
                                <img src={glass} srcSet={`${glass2x} 2x`} alt='glassIcon' className="glassIcon" />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        );
    }
}

export default MainSearchBar;