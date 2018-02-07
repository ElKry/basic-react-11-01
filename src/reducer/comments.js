import {Map, Record} from 'immutable'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
});

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: false,
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            const newComment = {...payload.comment, id: randomId}
            return state.setIn(['entities', randomId], new CommentRecord(newComment))

        case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ALL_COMMENTS + FAIL:
            return state
                .set('loading', false)
                .set('error', error)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response.records, CommentRecord))
    }

    return state
}