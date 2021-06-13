import React from 'react';
import { auth }  from "../../../lib/firebase";
import {
    Navbar,
    Nav,
    NavDropdown,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const logout = () => {
    auth.signOut();
  };

const Header = (user) => {
    return (
        <div>
            <Navbar bg={`light`} expand={`lg`} style={{display: 'block'}}>
                <Row>
                    <Col md={1} xs={1}>
                        Logo
                    </Col>
                    <Col md={1} xs={1}>
                        <Link to="/" style={{textDecoration: 'none'}}>ホーム</Link>
                    </Col>
                    <Col md={8} xs={6}>
                        <div className="input-group border rounded-pill p-1" style={{width: '65%'}}>
                            <div className="input-group-prepend border-0">
                                <button id="button-addon4" type="button" className="btn btn-link text-info">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                            <input type="search" 
                                placeholder="What're you searching for?" 
                                aria-describedby="button-addon4" 
                                className="form-control border-0" 
                                style={{background: "none"}}
                            />
                        </div>
                    </Col>
                    <Col md={2} xs={3}>
                        <Nav className="mr-auto ml-5">
                            <NavDropdown 
                                title={
                                    <Image 
                                        src={user.avatar} 
                                        roundedCircle 
                                        style={{height: '45px', width: '50px'}}
                                    />
                                } 
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item >
                                    <Link to="/users" style={{textDecoration: 'none'}} >
                                        プロフィール
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/login" onClick={logout}>サインアウト</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
        </div>
    );
}

export default Header;
