const initialState = {count: 0, counterShown: true}

const counterReducer = (state = initialState, action) =>{
    if(action.type === 'decrement'){
        return {
            ...state,
            count: state.count -1
        }
    }

    if(action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1
        }
    }
    if(action.type === 'reset') {
        return{
            ...state,
            count: 0
        }
    }
    if(action.type === 'toggle') {
        return {
            ...state,
            counterShown: !state.counterShown
        }
    }
    return state
}

export default counterReducer