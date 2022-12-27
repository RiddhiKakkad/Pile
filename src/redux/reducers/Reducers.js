import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../ActionTypes";

const reducers = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload];

        case REMOVE_FROM_WISHLIST:
            const removedCharcterArray = state.filter((item, index) => {
                return index !== action.payload;
            })
            return removedCharcterArray;

        default:
            return state;
    }
}

export default reducers;