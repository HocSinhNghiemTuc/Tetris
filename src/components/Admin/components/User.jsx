import React from 'react';
import { updateAvatar } from '../../../lib/firebase';
import Upload from '../../Upload/Upload';

const User = (user) => {
    // -------->
    const handleImageChanged = async downlodUrl => {
        await updateAvatar(user, downlodUrl);
    }
    // -------->
    return (
        <div className="container bootstrap snippets bootdey pt-5 pb-5">
            <div className="card-body inf-content">
                <div className="row">
                    <div className="col-md-4">
                        <Upload userImage={user.avatar} onSelectImage={handleImageChanged}/>
                    </div>
                    <div className="col-md-6">
                        <strong>情報</strong><br />
                        <div className="table-responsive">
                            <table className="table table-user-information">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                                ユーザーネーム
                                            </strong>
                                        </td>
                                        <td className="text-primary">
                                            {user.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-user  text-primary"></span>
                                    イーメール
                                </strong>
                                        </td>
                                        <td className="text-primary">
                                            {user.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-cloud text-primary"></span>
                                    ポイント
                                </strong>
                                        </td>
                                        <td className="text-primary">
                                            {user.score}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-bookmark text-primary"></span>
                                    クラース
                                </strong>
                                        </td>
                                        <td className="text-primary">
                                            {user.rank}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User;