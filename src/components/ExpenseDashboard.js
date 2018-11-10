import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilters'

const ExpenseDashboard = () => (

    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);
export default ExpenseDashboard;