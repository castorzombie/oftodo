import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deleteTodo, statusTodo } from '../actions/todosActions';
import { TodoItem, Boton, Date} from '../css/cmp';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.info.status
    };
  }

  deleteTodo = () => {
    const {id} = this.props.info;
    this.props.deleteTodo(id);
  }

  handleCheck = () => {
    const {id, date, title, description} = this.props.info;
    const infoTodo = {
      id,
      date,
      title,
      description,
      status: !this.state.checked
    };
    this.setState({checked: !this.state.checked});
    this.props.statusTodo(infoTodo);

  }

  render() {
    
    const {title, description, date, id} = this.props.info;

    let msg;
    this.state.checked ? msg = "finished" : msg = "unfinished";
    
    return (
      <React.Fragment>
        <TodoItem className="article-flex">
          <h3>{title}</h3>
          <Date>Published at:{date}</Date>
          <p>{description}</p>
          <Boton onClick={this.deleteTodo} key={`${id}btn`} type="button">Delete</Boton>
          <input  type="checkbox"
                  className="checkB" 
                  key={`${id}inp`}
                  onChange={this.handleCheck}
                  defaultChecked={this.state.checked}/>
          <span>Task {msg}</span>
        </TodoItem>
      </React.Fragment>
    );

  }

}

export default connect(null, { deleteTodo, statusTodo })(Todo);
