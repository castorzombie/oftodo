import { SHOW_TODOS, SHOW_TODO, ADD_TODO, DELETE_TODO, STATUS_TODO, GET_LOGS} from '../actions/types';

const initialState = {
    todos: [],
    actionLog: []
};

export default function(state=initialState, action) {
    switch(action.type){
        case SHOW_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        case SHOW_TODO:
            return {
                ...state,
                todos: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                actionLog: [...state.actionLog, `${action.type} at ${new Date().toLocaleString()}`]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                actionLog: [...state.actionLog, `${action.type} at ${new Date().toLocaleString()}`]
            };
        case STATUS_TODO:
            return {
                ...state,
                todos: state.todos.map(
                    todo => (todo.id === action.payload.id)
                    ? (todo = action.payload): 
                    todo
                ),
                actionLog: [...state.actionLog, `${action.type} at ${new Date().toLocaleString()}`]
            };
        case GET_LOGS:
            return {
                ...state
            };  
        default:
            return state;
    }
}