import React, { Component } from 'react'


export default class TodoItem extends Component {
    state ={
        buttonState:false
    }

    changeButtonState =()=>{
        this.setState({
            buttonState:true
        })
    }
    render() {
        const {title,key,todoState,handleDelete,handleEdit,handleState,comState} = this.props
        return (
            <div>

                <li className="list-group-item text-capitalize d-flex  justify-content-between my-2">

              <text style={{width:150}} >  {this.state.buttonState ? <strike> {title} </strike>:  title }</text>
                    <h6>Open</h6>
                    <button disabled={this.state.buttonState} className={this.state.buttonState ? "btn-secondary":"btn-outline-dark btn-sm"} onClick={()=>{handleState() ;this.changeButtonState()}}>To Complete</button>
                 <div className="">
                     <span className="mx-2 text-success">
                     <i className="fa fa-pencil-square" onClick={handleEdit}></i>
                     </span>
                     <span className="mx-2 text-danger">
                         <i className="fa fa-trash" onClick={handleDelete}></i>
                     </span>
                </div>
                </li>
            </div>
        )


    }

}
