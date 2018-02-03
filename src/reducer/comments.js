import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

/*const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})*/

function arrToObj (arr) {
    return arr.reduce((acc, arrItem) => ({
        ...acc,
        [arrItem.id]: arrItem
    }), {})
}

export default (state = arrToObj(defaultComments), action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            let newComments = defaultComments.map(item => item);
                newComments.push(payload.comment);
            return arrToObj(newComments)
    }

    return state
}