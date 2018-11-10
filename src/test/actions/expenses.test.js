import {removeExpense,edit_expenses,add_expenses} from '../../actions/expenses';


test('should test the remove expense',()=>{
    const result = removeExpense({id:123})
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id:123
    })
})

test('should test the edit expense',()=>{
    const result = edit_expenses(234,{note:'okay'})
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id:234,
        updates:{
            note:'okay'
        }
    })
})

test('should test the add expense',()=>{
    const expenseData = {
        description : 'test01',
        note : 'test',
        amount : 10,
        createdAt : 100
    }
    const result = add_expenses(expenseData)
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
        id: expect.any(String)
    }
    })
})

test('should test the add expense',()=>{
    const expenseData = {
        
    }
    const result = add_expenses(expenseData)
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
    }
    })
})