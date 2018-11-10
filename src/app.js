console.log('we are here')
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'


import {add_expenses} from './actions/expenses'
import { setTextFilter} from './actions/filters'

const store = configureStore();


store.dispatch(add_expenses({ description: 'water bill', amount: 3320, createdAt: 1000 }))
store.dispatch(add_expenses({ description: 'Gas bill', amount: 6000, createdAt: 0 }))
store.dispatch(add_expenses({ description: 'rent', amount: 30000, createdAt: 21000 }))


const state = store.getState()
const visibleState = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleState)

const jsx = (
    <Provider store={store}>
        <AppRouter />

    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'))