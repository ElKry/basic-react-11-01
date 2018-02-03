import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    //console.log('--- state before: ', store.getState())
    //console.log('--- action: ', action)
    next(action)
    //console.log('--- state after: ', store.getState())
    switch (action.type) {
        case ADD_COMMENT:
            console.log('---acplid',  action.payload.comment.id)
            const randomId = Math.floor(Math.random() * 1000000);
            action.payload.comment.id = randomId;
            
    }
}