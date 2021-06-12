import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
}));
const User = () => {
  const classes = useStyles();
  return (
    <div className="container bootstrap snippets bootdey pt-5 pb-5">
    <div className="card-body inf-content">
        <div className="row">
            <div className="col-md-4">
                <img alt="" style={{width:`600px`}} title="" className="rounded-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario" /> 
                <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    アップロード
                    </Button>
                </label>
                </div>
            </div>
            
            <div className="col-md-6">
                <strong>情報</strong><br/>
                <div className="table-responsive">
                <table className="table table-user-information">
                    <tbody>
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                    ユーザネーム                                               
                                </strong>
                            </td>
                            <td className="text-primary">
                                tuandung     
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
                                tuandung@gmail.com  
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
                                1500
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
                                A
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