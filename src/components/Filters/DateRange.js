import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {selectArticleDate} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    /* state = {
        from: null,
        to: null
    } */

    //handleDayClick = (day) => this.setState(DateUtils.addDayToRange(day, this.state))
    handleDayClick = (day) => {
        const {selectArticleDate} = this.props;
        selectArticleDate(DateUtils.addDayToRange(day, this.props));
    }


    render() {
        const { from, to } = this.props
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

//export default DateRange

export default connect(state => ({
    ...state.range
}), { selectArticleDate })(DateRange)