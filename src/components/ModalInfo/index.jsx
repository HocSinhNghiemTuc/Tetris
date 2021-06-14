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
                                    src={`${info.avatar}`} 
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
                                {info.score}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={4}>
                                ランク
                            </Col>
                            <Col md={8} xs={8}>
                                {info.rank}
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

// <Card>
//   <Card.Body>
//     <Row>
//       <Col md={{span: 1}}>1</Col>
//       <Col md={{span: 8, offset:1}}>
//         <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDF7DeX7k7oJSCSmCy6GFv0N_STMQuWTS-ew&usqp=CAU" 
//         roundedCircle 
//         height="32"
//         />
//         Le Duc Do
//       </Col>
//       <Col md={{span: 1}}>1</Col>
//     </Row>
//   </Card.Body>
// </Card>
