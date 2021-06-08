import React from 'react';

import {
    Card,
    ListGroup,
    Row,
    Image,
    Col
} from 'react-bootstrap';

import Header from '../Admin/components/Header';

const index = () => {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <Card style={{ width: '50rem', marginLeft: '9rem'}} className="mb-3">
                    <Card.Header>ランキング</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col md={{span: 1}}>1</Col>
                                <Col md={{span: 7, offset:1}}>
                                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDF7DeX7k7oJSCSmCy6GFv0N_STMQuWTS-ew&usqp=CAU" 
                                        roundedCircle 
                                        height="32"
                                        style={{marginRight: '2rem'}}
                                    /> 
                                    Le Duc Do
                                </Col>
                                <Col md={{span: 2}}>10000</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col md={{span: 1}}>1</Col>
                                <Col md={{span: 7, offset:1}}>
                                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDF7DeX7k7oJSCSmCy6GFv0N_STMQuWTS-ew&usqp=CAU" 
                                        roundedCircle 
                                        height="32"
                                        style={{marginRight: '2rem'}}
                                    /> 
                                    Le Duc Do
                                </Col>
                                <Col md={{span: 2}}>10000</Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${undefined? '' : 'disabled'}`}><a className="page-link" href="#a">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#b">1</a></li>
                        <li className={`page-item ${undefined? '': 'disabled'}`}><a className="page-link" href="#e">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default index;
