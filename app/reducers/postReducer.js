const INITIAL_STATE = {
    image: { imageData: null }
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'POST_CREATE_SUCCESS':
            return {...state, imageData: null };
        case 'POST_CREATE_FAILURE':
            return {...state, imageData: imageData }
    default:
        return state;
    }
}

export default postReducer;
