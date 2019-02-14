import axios from 'axios';
import { SHOW_TODOS, SHOW_TODO, ADD_TODO, DELETE_TODO, STATUS_TODO, GET_LOGS} from './types';

export const showTodos = () => async dispatch => {
    const response = await axios.get('http://localhost:3000/todos');
    dispatch({
        type: SHOW_TODOS,
        payload: response.data
    });
};

export const showTodo = id => async dispatch => {
    const response = await axios.get(`http://localhost:3000/todos/${id}`);
    dispatch({
        type: SHOW_TODO,
        payload: response.data
    });
};

export const deleteTodo = id => async dispatch => {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    dispatch({
        type: DELETE_TODO,
        payload: id
    });
};

export const addTodo = todo => async dispatch => {
    const response = await axios.post('http://localhost:3000/todos', todo);
    dispatch({
        type: ADD_TODO,
        payload: response.data
    });
};

export const statusTodo = todo => async dispatch => {
    const response = await axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
    dispatch({
        type: STATUS_TODO,
        payload: response.data
    });
};

export const getTodoLog = () => {
    return {
        type: GET_LOGS
    };
};
