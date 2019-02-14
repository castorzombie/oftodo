import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTodoLog } from '../actions/todosActions';

class TodosLog extends Component {

  componentDidMount() {
    this.props.getTodoLog();
  }

  render() {
    const {actionLog} = this.props;
    return (
      <React.Fragment>
        <div className="wrapp">
          <h2>Log</h2> 
          {actionLog.map((log, index) =>
            <p key={index}>{log}</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    actionLog: state.todos.actionLog
});

export default connect(mapStateToProps, {getTodoLog}) (TodosLog);
