import {Map, Record} from 'immutable'
import { ADD_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
});

export default (state = arrToMap(normalizedComments, CommentRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            const newComment = {...payload.comment, id: randomId}
            return state.set(randomId, new CommentRecord(newComment))
    }

    return state
}