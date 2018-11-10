import React from 'react';
import {connect} from 'react-redux'
import { DateRangePicker } from 'react-dates';
import {setTextFilter,sortBydate,sortByAmount,setStartDate,setEndDate} from '../actions/filters' 

export class ExpenseListFilters extends React.Component{
    state={
        calenderFocused:null
    }
    onDatesChange = ({startDate, endDate}) =>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusedChange = (calenderFocused) => {
        this.setState(()=>( {calenderFocused} ));
    }
    onTextChange = (e)=>{
            this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e)=>{
            e.target.value === 'date'?
            this.props.sortBydate():this.props.sortByAmount()
    }
            
    render (){
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusedChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>
        );
    }
}

const mapstateToprops =(state)=>({
    filters:state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter:(text) => dispatch(setTextFilter(text)),
    sortBydate:() =>dispatch(sortBydate()),
    sortByAmount:() =>dispatch(sortByAmount()),
    setStartDate:(startDate) =>dispatch(setStartDate(startDate)),
    setEndDate:(endDate) =>dispatch(setEndDate(endDate))
})

export default connect(mapstateToprops,mapDispatchToProps)(ExpenseListFilters)