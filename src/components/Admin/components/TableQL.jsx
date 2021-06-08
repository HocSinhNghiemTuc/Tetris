import React, {useState, useEffect} from 'react';

import "../assets/styles.css";

import Person from './Person';

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

const TableQL = () => {

    const [pagi, setPagi] = useState({
        pre: false,
        next: false,
    });
    const [persons, setPersons] = useState(data);
    const [Sort, setSort] = useState({
        name: true,
        email: true,
        rank: true,
    });

    useEffect(() => {
        const sortCore = () => {
            let prs = persons.sort((a, b) => b.core - a.core);
            for (let index = 0; index < prs.length; index++) {
                prs[index] = {...prs[index], rank: index+1};
            }
            setPersons([...prs]);
        }

        sortCore();
        // eslint-disable-next-line
    }, []);

    const sortInformation = (name, value) => {
        let prs = persons;

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
                setPersons([...prs]);
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
                setPersons([...prs]);
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
                setPersons([...prs]);
                setSort({...Sort, rank: !Sort.rank});
                break;
            default: return;
        }
    }

    const updateStatus = (id) => {
        const prs = persons;

        if (prs.length > 0) {
            const index = prs.findIndex(item => item.id === id);
            if (index !== -1) {
                prs[index] = {...prs[index], block: !prs[index].block};
                setPersons([...prs]);
            }
        }
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
                    {persons.map((person, index) => {
                        return <Person person={person} key={index} updateStatus={updateStatus} />
                    })}
                </tbody>
            </table>
        </div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${pagi.pre? '' : 'disabled'}`}><a className="page-link" href="#a">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#b">1</a></li>
                <li className={`page-item ${pagi.next? '': 'disabled'}`}><a className="page-link" href="#e">Next</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default TableQL;
