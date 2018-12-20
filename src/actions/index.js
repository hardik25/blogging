import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
      await dispatch(fetchPosts());
      const userIDs = _.uniq(_.map(getState().posts, 'userId'));
      userIDs.forEach(id => dispatch(fetchUser(id)) );
    };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const res =  await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: res.data});
  };
};

export const fetchUser = (userID) => {
  return async (dispatch) => {
    const res = await jsonPlaceholder.get(`/users/${userID}`);
    dispatch({type: 'FETCH_USER', payload: res.data});
  };
};

/*export const fetchUser = (userID) => {
  return async (dispatch) => {
    _fetchUser(userID, dispatch);
  };
};

const _fetchUser = _.memoize(async (userID, dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${userID}`);
  dispatch({type: 'FETCH_USER', payload: res.data});
});*/
