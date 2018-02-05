import {SELECT_ARTICLE} from '../constants';

export default (selected = [], action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SELECT_ARTICLE:
            return payload.selected;
    }
    return selected;
}