import React, { useState }from 'react';

import {
    Navbar,
    Nav,
    NavDropdown,
    Row,
    Col,
    Image
} from 'react-bootstrap';

import ModalInfo from "../../ModalInfo";

const data = [
    {
        id: 1,
        name: 'ホアン・チュン・ヒエウ',
        email: 'hoanghieu@gmail.com',
        core: 1200,
        block: false
    },
    {
        id: 2,
        name: 'グエン・ヴ・ロン',
        email: 'long@gmail.com',
        core: 1100,
        block: true
    },
    {
        id: 3,
        name: 'ファム・トゥアン・ズン',
        email: 'phamdung@gmail.com',
        core: 1050,
        block: true
    },
    {
        id: 4,
        name: 'レー・ドゥック・ドー',
        email: 'ledo@gmail.com',
        core: 1000,
        block: true
    },
];

const Header = () => {

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    const [information, setInformation] = useState({});

    const searchInfo = () => {
        let info = data.find((item)=> item.name === search);

        if (info) {
            setInformation(info);
        } else {
            setInformation(null);
        }
        setShow(true);
    }

    return (
        <div>
            <Navbar bg={`light`} expand={`lg`} style={{display: 'block'}}>
                <Row>
                    <Col md={2} xs={2}>
                        Logo
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
                                onChange={(event)=> {setSearch(event.target.value);}}
                                onKeyDown={(event)=> {
                                    if (event.keyCode === 13) {
                                        searchInfo();
                                    }
                                }}
                            />
                        </div>
                    </Col>
                    <Col md={2} xs={3}>
                        <Nav className="mr-auto ml-5">
                            <NavDropdown 
                                title={
                                    <Image 
                                        src={`https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg`} 
                                        roundedCircle 
                                        style={{height: '45px', width: '50px'}}
                                    />
                                } 
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">プロフィール</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">サインアウト</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
            <ModalInfo show={show} info={information} onHide={()=>{setShow(false);}} />
        </div>
    );
}

export default Header;
