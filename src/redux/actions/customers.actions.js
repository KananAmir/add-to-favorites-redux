export const addToFavoritesAction = (customer) => {
    return ({
        type: 'ADD_TO_FAVORITES',
        payload: customer
    })
}
export const removeFromFavoritesAction = (customer) => {
    return ({
        type: 'REMOVE_FROM_FAVORITES',
        payload: customer
    })
}
export const emptyFavoritesAction = () => {
    return ({
        type: 'EMPTY_FAVORITES',
    })
}