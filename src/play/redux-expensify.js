console.log('we are here')
import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSES
const add_expenses = (
    {
        description= '',
        note= '',
        amount= 0,
        createdAt= 0
    } ={} 
) => ({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSES
const remove_expenses = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSES
const edit_expenses = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// SET_TEXT_FILTER
const setTextFilter = (text='') => ({
    type:'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortBydate = () => ({
    type: 'SORT_BY_DATE',
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const expensesReducerDefaultState = []

const expensesReducer = (state= expensesReducerDefaultState ,action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ]
    
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) =>id !==action.id)
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id === action.id){
               return {
                   ...expense, 
                   ...action.updates
               } 
            }else{
                return expense
            }
        })
    
        default:
            return state
    }
}
const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefault,action) =>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
    
        default:
           return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof stateDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); 

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1
        }
    })
} 

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    })
)

store.subscribe(()=>{
    const state = store.getState();
    const visibleState = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleState)
})

store.dispatch(add_expenses({ description: 'water bill', amount: 3320, createdAt: 1000 }))
store.dispatch(add_expenses({ description: 'Gas bill', amount: 600, createdAt: 0 }))
store.dispatch(add_expenses({ description: 'rent', amount: 30000, createdAt: 21000 }))
// const expenseOne = store.dispatch(add_expenses({ description: 'Rent', amount: 3320, createdAt:-21000}))
// const expenseTwo = store.dispatch(add_expenses({description:'coffee',note:'oya na',amount:600,createdAt:-1000}))

// store.dispatch(remove_expenses({id:expenseOne.expense.id}))
// store.dispatch(edit_expenses(expenseTwo.expense.id, {amount:500}))

// store.dispatch(setTextFilter('okay'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortBydate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));


const demoState = {
    expenses:[{
        id:'dkmffmofm',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount,
        startdate: undefined,
        endDate: undefined
    }
}