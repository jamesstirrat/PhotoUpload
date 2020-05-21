const INITIAL_STATE = {
    text: { textInputValue: '' }
};

const postReducer = (state = INITIAL_STATE, action) => {
    console.log('textInputReducer', action);
    switch(action.type){
        case 'POST_CREATE_SUCCESS':
            return {...state, textInputValue: action.payload };
        case 'POST_CREATE_FAILURE':
            return {...state, textInputValue: ''}
    default:
        return state;
    }
}

export default postReducer;
