import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensestotal }) => {
    const expensesWord = expenseCount > 1?'expenses':'expense';
    const formatExpensesTotal = numeral(expensestotal / 100).format('$0,0.00')
    return (
        <div>
            <h1>
                viewing {expenseCount} {expensesWord} totalling {formatExpensesTotal}
            </h1>
        </div>
    );
}

const mapStateToProps = (state) =>{
    const visibleExpenses = selectExpenses(state.expenses,state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensestotal: expensesTotal(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary)
