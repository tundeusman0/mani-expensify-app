import React from 'react';
import {edit_expenses, removeExpense }from '../actions/expenses'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'


export class EditExpensePage extends React.Component{
    onSubmit= (expense) =>{
        this.props.edit_expenses(this.props.expense.id,expense);
        this.props.history.push('/');
    };
    onRemove = ()=>{
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render(){
        return (
            <div> 
                <ExpenseForm 
                    expense={this.props.expense} 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }

};
const mapStateToProps = (state,props) =>({
        expense:state.expenses.find((expense)=>expense.id === props.match.params.id)
    })

const mapDispatchToProps = (dispatch,props) => ({
    edit_expenses:(id, expense) => dispatch(edit_expenses(id,expense)),
    removeExpense:(data) =>dispatch(removeExpense(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)