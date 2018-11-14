import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'Ng', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '₦'
    }
});

numeral.locale('Ng');

const ExpenseListItem = ({id,description, amount, createdAt}) =>(
    <div>
        <Link to={`/editPage/${id}`}>
            <h3>{description}</h3>  
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMM Do,YYYY')}
        </p>
        
    </div>
);


export default ExpenseListItem