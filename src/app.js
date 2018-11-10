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

const state = store.getState()
const visibleState = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
    <Provider store={store}>
        <AppRouter />

    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'))