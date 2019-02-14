import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import Header from './Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
import TodosLog from './todosLog';
import store from '../store';
import reset from '../css/reset';
import layout from '../css/layout';

const ResetStyle = createGlobalStyle`${reset}`;
const LayoutStyle = createGlobalStyle`${layout}`;

const App = () => 
    <Provider store={store}>
        <React.Fragment>
            <Header />
            <main className="container-flex main">
                <section className="section-flex square">
                    <div className="todo-list">
                        <Todos />
                    </div>
                    <div className="todo-form">
                        <AddTodo />
                    </div>    
                </section>
                <aside className="aside-flex">
                        <TodosLog />
                </aside>
            </main>
            <ResetStyle />
            <LayoutStyle />       
        </React.Fragment>
    </Provider>;
export default App;
