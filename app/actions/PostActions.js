export const createPost = (title, description, imageData) => {
  return (dispatch, getState) => {
    const currentUser = getState().currentUser

    return fetch(`${URL}posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          image: imageData.data,
          file_name: imageData.fileName,
        }
      })
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch({
            type: 'POST_CREATE_SUCCESS',
            payload: data
          });
        });
      } else {
        dispatch({
          type: 'POST_CREATE_FAILED'
        })

        return Promise.reject('error')
      };
    }).catch(e => {
      return Promise.reject(e)
    })
  };
};
