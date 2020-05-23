export const createPost = ( imageData ) => {
// export const createPost = (title, description, imageData) => {
  return (dispatch, getState) => {
    // const currentUser = getState().currentUser

    //need a uri to push the image
    fetch ('http://localhost:3000/api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        // 'X-User-Email': currentUser.email,
        // 'X-User-Token': currentUser.authentication_token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       post: {
         // title,
         // description,
         image: imageData.data,
         // file_name: imageData.fileName,
       }
     })
   }).then(response => {
     if (response.ok) {
       return response.json().then((data) => {
         dispatch({
           type: 'POST_CREATE_SUCCESS',
           payload: data
         });
       });
     } else {
       dispatch({
         type: 'POST_CREATE_FAILURE'
       })
       return Promise.reject('error')
     };
   }).catch(e => {
     return Promise.reject(e)
   })
 };
};

//syntax for uploading a specific user
// fetch(`${BASE_URL}api/v1/users/${userId}/events`, {

// export const addEvent = (eventData, userId) => {
//     return dispatch => {
//         dispatch(addingEvent());
//         var event = new FormData();
//         for(var name in eventData){
//             event.append(name, eventData[name]);
//         }
//
//         fetch(`${BASE_URL}api/v1/users/${userId}/events`, {
//             method: 'POST',
//             body: event
//         })
//         .then(resp => {
//             return resp.json()
//         })
//         .then( eventData => {
//             if(!eventData.ok){
//                 dispatch(eventsHasErrored(eventData.errors))
//             } else{
//                 dispatch(addEventData(eventData.data))
//             }
//         })
//         .catch(e => dispatch(eventsHasErrored(e)))
//     }
