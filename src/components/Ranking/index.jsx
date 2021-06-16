import React from 'react';

import {
    Card,
    ListGroup,
    Row,
    Image,
    Col
} from 'react-bootstrap';

import useUser from "../../hooks/useUsers";

const count_one_page = 10;

const Ranking = () => {

    const [items, setItems] = useUser();
    const [users, setUsers] = React.useState([]);
    const [pagination, setPagination] = React.useState(0);
    const [page, setPage] = React.useState(1);

    React.useEffect(()=> {
        const _items = items.slice(0, count_one_page);
        setUsers([..._items]);
        setPagination(Math.ceil(items.length/count_one_page));
    }, [items]);

    const clickPagination = (_page) => {
        let start = (_page - 1) * count_one_page;
        let end = _page * count_one_page;

        const _items = items;
        const list = _items.slice(start, end);

        setPage(_page);
        setUsers([...list]);
    }

    const renderPagination = (count) => {
        let render = [];
        for (let i = 0; i < count; i++) {
            render.push(
                <li className="page-item">
                    <a className="page-link" href={`#${i + 1}`} onClick={()=>{clickPagination(i+1)}}>{i+1}</a>
                </li>
            )
        }

        return render;
    }

    const renderRank = (list) => {
        let ranks = [];

        if (list.length > 0) {
            ranks = list.map(item => {
                return (
                    <ListGroup.Item key={item.id}>
                        <Row>
                            <Col md={{span: 1}}>{item.rank}</Col>
                            <Col md={{span: 7, offset:1}}>
                                <Image src={`${item.avatar}`}
                                    roundedCircle 
                                    height="38"
                                    width="40"
                                    style={{marginRight: '2rem'}}
                                /> 
                                {item.name}
                            </Col>
                            <Col md={{span: 2}}>{item.score}</Col>
                        </Row>
                    </ListGroup.Item>
                )
            })
        }
        return ranks;
    }

    return (
        <div>
            <div className="container mt-5">
                <Card style={{ width: '50rem', marginLeft: '9rem'}} className="mb-3">
                    <Card.Header>ランキング</Card.Header>
                    <ListGroup variant="flush" style={{height: `25rem`, overflow: 'auto'}}>
                        {renderRank(users)}
                    </ListGroup>
                </Card>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${(page-1) !== 0? '' : 'disabled'}`}>
                            <a className="page-link" href="#a" onClick={() =>{clickPagination(page-1)}}>Previous</a>
                        </li>
                        {renderPagination(pagination)}
                        <li className={`page-item ${(page+1) <= pagination? '': 'disabled'}`}>
                            <a className="page-link" href="#e" onClick={() =>{clickPagination(page+1)}}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Ranking;
