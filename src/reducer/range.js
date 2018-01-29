import {SELECT_DATE} from '../constants';

export default (range = {from: null, to: null}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_DATE:
            return payload.range;
    }

    return range;
}