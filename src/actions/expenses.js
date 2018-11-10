import uuid from 'uuid'
// ADD_EXPENSES
export const add_expenses = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSES
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSES
export const edit_expenses = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})