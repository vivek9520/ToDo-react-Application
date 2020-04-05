import React,{Component} from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';


import uuid from 'react-uuid'


import './App.css';
import CompleteList from "./Components/CompleteList";

class App extends Component{

  state ={
    items :[],
    title :"",
    id:uuid(),
    todoState:"open",
    editTitle :false,
    completeItems:[],
    comState: false


  }

  handleChange = (e)=>{
    this.setState({
      title : e.target.value

    });
  };

  handleSubmit = (e) =>{

    const newItem={
      id:this.state.id,
      title:this.state.title,
      todoState:this.state.todoState,
      comState:this.state.comState,

    }
    e.preventDefault();

    const updatedItem = [...this.state.items,newItem];

    this.setState({
      items:updatedItem,
      id:uuid(),
      title:"",
      todoState:'open',
      editTitle:false,
      comState:false
    });


  }

  clearList = ()=>{
    this.setState({
      items:[]
    })
  }

  handlerDelete = (id)=>{
    const  filteredItems = this.state.items.filter(item => item.id != id)
    this.setState({
      items:filteredItems
    })
  }



  handleEdit =(id)=>{
    const filteredItems = this.state.items.filter(item =>item.id != id);
    const selectedItem = this.state.items.find(item=>item.id ===id);

    this.setState({
      items:filteredItems,
      title:selectedItem.title,
      id:id,
      editTitle:true,
      comState:true,
    })
console.log(this.state.editTitle)
  }

  handleState =(id) =>{
    const findItem = this.state.items.find(item =>item.id === id);


    const complete =[...this.state.completeItems,findItem]
    this.setState({
      comState:true,
      todoState:'Complete',
      completeItems:complete,



    })
    console.log(findItem)

  }

  ////////////////////////////////////////////////////////////////////

   handlerDeleteCom = (id)=>{
    const  filteredItems = this.state.completeItems.filter(item => item.id != id)
    this.setState({
      completeItems:filteredItems
    })
  }

  clearListCom = ()=>{
    this.setState({
      completeItems:[]
    })
  }

  ////////////////////////////////////////////////////////////////////
  render() {
    return(
    <div className="container jumbotron jumbotron jumbotron-billboard">
      <div className="row ">
        <div className = "col-12 ">
          <h3 align="center" className="font-weight-bold -font-awesome-flag">Daily Task Manager.</h3>
          <h2 className="text-capitalize text-center font-weight-bold -font-awesome-flag">
            TODO INPUT
          </h2>

          <TodoInput title={this.state.title}
                     handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                     handleEdit={this.handleEdit}
                     EditTitle={this.state.editTitle}/>
          <div className="row">
          <div className="col-lg-6 col-sm-12" >
          <TodoList ItemObject ={this.state.items}
                    clearList ={this.clearList}
                    handleDelete={this.handlerDelete}
                    handleEdit={this.handleEdit}

                    handleState={this.handleState}
                    head="TODO LIST" />
          </div>
            <div className="col-lg-6 col-sm-12">
              <CompleteList completeItems={this.state.completeItems}
                         clearListCom ={this.clearListCom}
                        handleDeleteCom={this.handlerDeleteCom}
                       // handleState={this.handleState}
                        head="COMPLETED LIST"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
