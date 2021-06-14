import React, {useState } from 'react';

import "../assets/styles.css";

import useUser from "../../../hooks/useUsers";

import Person from './Person';

const count_one_page = 10;

const TableQL = () => {

    const [items, setItems, updateBlock] = useUser();
    const [users, setUsers] = React.useState([]);
    const [pagination, setPagination] = React.useState(0);
    const [page, setPage] = React.useState(1);

    const [Sort, setSort] = useState({
        name: true,
        email: true,
        rank: true,
    });

    React.useEffect(() => {
        const _items = items.slice(0, count_one_page);
        setUsers([..._items]);
        setPagination(Math.ceil(items.length/count_one_page));
    }, [items])

    const clickPagination = (_page) => {
        let start = (_page - 1) * count_one_page;
        let end = _page * count_one_page;

        const _items = items;
        const list = _items.slice(start, end);

        setPage(_page);
        setUsers([...list]);
    }

    const sortInformation = (name) => {
        let prs = users;

        switch (name) {
            case 'name':
                if (Sort.name){
                    prs = prs.sort((a,b) => {
                        return b.name.length - a.name.length;
                    });
                } else {
                    prs = prs.sort((a,b) => {
                        return a.name.length - b.name.length;
                    });
                }
                setUsers([...prs]);
                setSort({...Sort, name: !Sort.name});
                break;
            case 'email':
                if (Sort.email) {
                    prs = prs.sort((a,b) => {
                        return b.email.length - a.email.length;
                    });
                } else {
                    prs = prs.sort((a,b) => {
                        return a.email.length - b.email.length;
                    });
                }
                setUsers([...prs]);
                setSort({...Sort, email: !Sort.email});
                break;
            case 'rank':
                if (Sort.rank) {
                    prs = prs.sort((a,b) => {
                        return b.rank - a.rank;
                    });
                } else {
                    prs = prs.sort((a,b) => {
                        return a.rank - b.rank;
                    });
                }
                setUsers([...prs]);
                setSort({...Sort, rank: !Sort.rank});
                break;
            default: return;
        }
    }

    const updateStatus = (id) => {
        updateBlock(id);
    }

    const renderPagination = (count) => {
        let render = [];
        for (let i = 0; i < count; i++) {
            render.push(
                <li className="page-item">
                    <a className="page-link" href="#b" onClick={()=>{clickPagination(i+1)}}>{i+1}</a>
                </li>
            )
        }

        return render;
    }

    return (
    <div className="container mt-5">
        <div className="row mb-2">
            <table id="example" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                <thead>
                    <tr>
                        <th>
                            <div className="d-flex justify-content-between">
                                <p>ユーザーネーム</p>
                                <div onClick={() => {sortInformation('name')}} style={{cursor: 'pointer'}}>
                                    <span 
                                        className={`fa fa-lg fa-caret-${Sort.name? 'up' : 'down'}`} 
                                        aria-hidden="true"
                                    ></span>
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-between">
                                <p>メールアドレス</p>
                                <div>
                                    <span 
                                        className={`fa fa-lg fa-caret-${Sort.email? 'up' : 'down'}`}  
                                        style={{cursor: 'pointer'}}
                                        aria-hidden="true"
                                        onClick={() => {sortInformation('email')}}
                                    ></span>
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-between">
                                <p>点</p>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-between">
                                <p>ランク</p>
                                <div>
                                    <span 
                                        className={`fa fa-lg fa-caret-${Sort.rank? 'up' : 'down'}`}  
                                        aria-hidden="true"
                                        style={{cursor: 'pointer'}}
                                        onClick={() => {sortInformation('rank')}}
                                    ></span>
                                </div>
                            </div>
                        </th>
                        <th>
                        <div className="d-flex justify-content-between">
                                <p>ステータス</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((person, index) => {
                        return <Person person={person} key={index} updateStatus={updateStatus} />
                    })}
                </tbody>
            </table>
        </div>
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
    );
}

export default TableQL;
