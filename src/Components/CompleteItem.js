import React, {Component} from 'react';

class CompleteItem extends Component {
    render() {
        const {title,handleDeleteCom,clearListCom,todoState}=this.props
        return (

            <div>
                <li className="list-group-item text-capitalize d-flex  justify-content-between my-2">

                    <text style={{width:150}} className="text-danger">{title}</text>
                    <h6>Completed</h6>

                    {console.log(title)}
                    <div>

                        <span className="mx-2 text-danger">
                         <i className="fa fa-trash" onClick={handleDeleteCom}></i>
                     </span>
                    </div>
                </li>
            </div>
        );
    }
}

export default CompleteItem;