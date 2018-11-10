import React from 'react';
import {add_expenses }from '../actions/expenses'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'

export class AddExpensePage extends React.Component{
    onSubmit= (expense) =>{
        this.props.add_expenses(expense);
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
                <h1>Add Expense </h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) =>({
    add_expenses: (expense) => dispatch(add_expenses(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage)