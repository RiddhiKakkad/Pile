import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../ActionTypes";

export const addCharacterToWishlist = character => ({
    type: ADD_TO_WISHLIST,
    payload: character,
});

export const removeCharacterFromWishlist = index => ({
    type: REMOVE_FROM_WISHLIST,
    payload: index,
});