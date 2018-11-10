import React from 'react'
import {shallow} from 'enzyme';
import {Expenselist} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses',()=>{
    const wrapper = shallow(<Expenselist expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty expenses',()=>{
    const wrapper = shallow(<Expenselist expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

