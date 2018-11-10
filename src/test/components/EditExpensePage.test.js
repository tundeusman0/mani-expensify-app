import React from 'react'
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let edit_expenses,removeExpense,history,wrapper;

beforeEach(()=>{
     edit_expenses = jest.fn();
     removeExpense = jest.fn();
     history = {push:jest.fn()}
     wrapper = shallow (
         <EditExpensePage 
            history={history} 
            edit_expenses={edit_expenses}
            removeExpense={removeExpense}
            expense={expenses[2]}
        />)
})

test('should render EditExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle EditExpense ',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(edit_expenses).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
})



test('should handle removeExpense ',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})