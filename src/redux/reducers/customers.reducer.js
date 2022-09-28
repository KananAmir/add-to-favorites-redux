
export const customerReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return [...state, action.payload]

        case 'REMOVE_FROM_FAVORITES':
            console.log(state);
            return [...state.filter(q => q.id !== action.payload.id)]

        case 'EMPTY_FAVORITES':
            return []

        default:
            return state;
    }
}
