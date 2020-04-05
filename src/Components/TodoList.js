import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {


    render() {

        const {ItemObject,clearList,handleDelete,handleEdit,handleState,head} = this.props;
        const finalItem =  ItemObject.reverse()
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">{head}</h3>
                {
                    finalItem.map(item =>{
                            return (
                            <TodoItem key={item.id}
                                      title={item.title}
                                      todoState={item.todoState}
                                      handleDelete={()=>handleDelete(item.id)}
                                      handleEdit={()=> handleEdit(item.id)}
                                      handleState ={() =>handleState(item.id)}

                            />
                        )
                    })
                }

                <button className="btn btn-danger text-capitalize mt-3 btn-block" onClick={clearList}>Clear List</button>
            </ul>
        )
    }
}
