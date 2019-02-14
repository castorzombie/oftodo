import React, { Component } from 'react';
import {connect} from 'react-redux';
import { showTodos } from '../actions/todosActions';
import Todo from './Todo';

class Todos extends Component {
  
  componentDidMount() {
    this.props.showTodos();
  }

  render() {
    const {todos} = this.props;
    return (
    <React.Fragment>
        <h2>Todo Do List</h2>
        {todos.map(todo => (
            <Todo
              key={todo.id}
              info={todo}
            />
        ))}
    </React.Fragment>
    );
  }

}

const mapStateToProps = state => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, { showTodos })(Todos);

