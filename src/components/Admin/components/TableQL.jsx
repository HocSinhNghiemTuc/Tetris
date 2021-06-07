import React from 'react';

import "../assets/styles.css";

const TableQL = () => {
    return (
    <div class="container mt-5">
        <div class="row mb-2">
            <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>
                            <div className="d-flex justify-content-between">
                                <p>ユーザーネーム</p>
                                <div>
                                    <span className="fa fa-lg fa-caret-up" aria-hidden="true" aria-disabled={true}></span>
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-between">
                                <p>メールアドレス</p>
                                <div>
                                    <span className="fa fa-lg fa-caret-up" aria-hidden="true" aria-disabled={true}></span>
                                    <span className="fa fa-lg fa-caret-down" aria-hidden="true"></span>
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
                                    <span className="fa fa-lg fa-caret-down" aria-hidden="true"></span>
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
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>
                            <input type="checkbox" name="" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#a">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#b">1</a></li>
                <li class="page-item"><a class="page-link" href="#c">2</a></li>
                <li class="page-item"><a class="page-link" href="#d">3</a></li>
                <li class="page-item"><a class="page-link" href="#e">Next</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default TableQL;
