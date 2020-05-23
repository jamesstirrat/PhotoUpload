const INITIAL_STATE = {
    imageData: null
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'POST_CREATE_SUCCESS':
            return {...state, imageData: null};
        case 'POST_CREATE_FAILURE':
            return {...state }
            console.log('failed')
    default:
        return state;
    }
}

export default postReducer;
