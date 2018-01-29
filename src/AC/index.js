import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, SELECT_DATE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticleName(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: { selected }
    }
}

export function selectArticleDate(range) {
    return {
        type: SELECT_DATE,
        payload: { range }
    }
}