import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import Loader from './common/Loader'
import {commentsLoadingSelector} from '../selectors'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
        this.props.loadComments()
    }

    render() {
        const {isOpen, toggleOpen, loading} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'

        if (loading) return <Loader />

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article: { comments, id }, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect(state => {
    return {
        loading: commentsLoadingSelector(state)
    }
}, {loadComments})(toggleOpen(CommentList))