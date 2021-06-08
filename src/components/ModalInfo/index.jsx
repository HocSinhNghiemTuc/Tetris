import React from 'react';

import {
    Modal,
    Row,
    Col,
    Container,
    Image
} from 'react-bootstrap';

const index = (props) => {
    const {info} = props;
    return (
        <Modal 
            {...props}
            animation={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    インフォメーション
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    {info?
                    <div>
                        <Row className="justify-content-md-center mb-4">
                            <Col xs={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} >
                                <Image
                                    src={`https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg`} 
                                    roundedCircle 
                                    style={{height: '45px', width: '50px'}}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={4}>
                                ニックネーム
                            </Col>
                            <Col md={4} xs={4}>
                                {info.name}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={4}>
                                メールアドレス
                            </Col>
                            <Col md={4} xs={4}>
                                {info.email}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={4}>
                                点
                            </Col>
                            <Col md={8} xs={8}>
                                {info.core}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={4}>
                                ランク
                            </Col>
                            <Col md={8} xs={8}>
                                4
                            </Col>
                        </Row>
                </div>
                : 
                    <Row　className="justify-content-md-center">
                        <Col md={{ span: 8, offset: 2}} xs={{ span: 8, offset: 2}}>
                            インフォメーションなし
                        </Col>
                    </Row>
                }
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default index;
