import React from 'react'
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let add_expenses,history,wrapper;

beforeEach(()=>{
     add_expenses = jest.fn();
     history = {push:jest.fn()}
     wrapper = shallow (<AddExpensePage history={history} add_expenses={add_expenses}/>)
})

test('should render AddExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit ',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(add_expenses).toHaveBeenLastCalledWith(expenses[1])
})