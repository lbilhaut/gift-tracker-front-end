import * as ActionTypes from './ActionTypes'

export const Kids = (state = {
    isLoading: true,
    errMess: null,
    kids: []
}, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_KIDS:
            return { ...state, isLoading: false, errMess: null, kids: action.payload }

        case ActionTypes.KIDS_LOADING:
            return { ...state, isLoading: true, errMess: null, kids: [] }

        case ActionTypes.KIDS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, kids: [] }

        // case ActionTypes.ADD_KID:
        //     var kid = action.payload
        //     return { ...state, kids: kid }

        default:
            return state
    }
}