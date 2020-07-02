import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
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

            <Navbar bg="light" expand="lg" className="justify-content-center">
                <Navbar.Brand href="#home">
                    <img src={logo} srcSet={`${logo2x} 2x`} alt='logoIcon' className="logoIcon" />
                </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="link">
                        <img src={glass} srcSet={`${glass2x} 2x`} alt='glassIcon' className="glassIcon" />
                    </Button>
                </Form>
            </Navbar>

        );
    }
}

export default MainSearchBar;