import React, {Component} from 'react';

import CompleteItem from "./CompleteItem";

class CompleteList extends Component {

    render() {
        const {completeItems,head,handleDeleteCom,clearListCom} =this.props
        const finalTodo = completeItems.reverse()
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center text">{head}</h3>
                {
                    finalTodo.map(item =>{

                        return (
                            <CompleteItem key={item.id}
                                      title={item.title}
                                      todoState={item.todoState}
                                      handleDeleteCom={()=>handleDeleteCom(item.id)}



                            />
                        )
                    })
                }

                <button className="btn btn-danger text-capitalize mt-3 btn-block"  onClick={clearListCom}>Clear List</button>
            </ul>
        )
    }
}

export default CompleteList;