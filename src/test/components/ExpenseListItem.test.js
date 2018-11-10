import React from 'react'
import {shallow} from 'enzyme';
import ExpenselistItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expenses',()=>{
    const wrapper = shallow(<ExpenselistItem expenses={{...expenses[0]}}/>)
    expect(wrapper).toMatchSnapshot()
})
