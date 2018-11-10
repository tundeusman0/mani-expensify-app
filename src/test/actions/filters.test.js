import moment from 'moment'
import {setTextFilter,sortBydate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';


test('should test for setTextFilter',()=>{
    const result = setTextFilter('testing')
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'testing'
    })
})

test('should test for setTextFilter empty text',()=>{
    const result = setTextFilter()
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    })
})

test('should test for sortBydate',()=>{
    const result = sortBydate()
    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should test for sortByAmount',()=>{
    const result = sortByAmount()
    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should test for setStartDate',()=>{
    const startDate = moment(0)
    const result = setStartDate(startDate)
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)
    })
})

test('should test for setEndDate',()=>{
    const result = setEndDate(10000)
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate:10000
    })
})