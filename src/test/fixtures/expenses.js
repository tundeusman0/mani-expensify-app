import moment from 'moment'
const expenses=[
    {
        description : 'Gum',
        note : '',
        amount : 195,
        createdAt : 0,
        id: 1
    },
    {
        description : 'paste',
        note : '',
        amount : 109500,
        createdAt : moment(0).subtract(4,'days').valueOf(),
        id: 2
    },
    {
        description : 'Credit card',
        note : '',
        amount : 4500,
        createdAt : moment(0).add(4,'days').valueOf(),
        id: 3
    }
]

export default expenses;