import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectArticleName} from '../../AC'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    /* state = {
        selected: null
    } */

   // handleChange = selected => this.setState({ selected })
   handleChange = selected => {
       const {selectArticleName} = this.props;
       selectArticleName(selected);
   }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected}
            onClick={this.handleChange}
            multi
        />
    }
}

//export default SelectFilter

export default connect(state => ({
    selected: state.selected
}), { selectArticleName })(SelectFilter)