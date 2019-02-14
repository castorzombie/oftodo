import React, { Component } from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import { addTodo } from '../actions/todosActions';
import { Boton } from '../css/cmp';

class AddTodo extends Component {

  constructor() {
    super();
    this.state = {
        title: '',
        description: '',
        error: false
    }; 
  }

  titleTodo = e => {
    this.setState({ title: e.target.value });
  }

  descriptionTodo = e => {
    this.setState({ description: e.target.value});
  }

  newTodo = e => {

    e.preventDefault();
    const { title, description } = this.state;
    
    if(title === '' || description === '') {
      this.setState({ error: true });
      return;
    }

    const infoTodo = {
      id : uuid(),
      date: new Date().toLocaleString(),
      title,
      description,
      status: false
    };
    this.props.addTodo(infoTodo);
    this.setState({ 
      title: '',
      description: '',
      error: false
     });

  }

  render() {
    const {error} = this.state;
    return (
        <React.Fragment>
          <div className="todoForm">
          <h2 className="text-center">Add New To Do</h2>
          <form onSubmit={this.newTodo}>
            <div className="form-group">
              <span>Title: </span>
              <input  onChange={this.titleTodo}
                      type="text"
                      value={this.state.title}
                      className="form-control"
                      placeholder="Write title" />
            </div>
            <div className="form-group">
              <span>Description: </span>
              <input  onChange={this.descriptionTodo}
                      type="text"
                      value={this.state.description}
                      className="form-control"
                      placeholder="Write description" />
            </div>
            <Boton type="submit">Add new Todo</Boton>
          </form>
          {error ?
            <span>Fields are required</span>
            : ''
          }
          </div>
        </React.Fragment>
    );
  }
}

export default connect(null, {addTodo})(AddTodo);
