

export const GET_USERS = `GET_USERS`;
const SET_USERS_LOADING = `SET_USERS_LOADING`;
const SET_USERS = `SET_USERS`;
export const getUsers = () => ({type: GET_USERS});
export const setUsers = list => ({ type: SET_USERS, list });
export const setUsersLoading = (value) => ({type: SET_USERS_LOADING, value});

const initState = {
  isLoading: false,
  list: [],
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    case SET_USERS:
      return {
        ...state,
        list: action.list.items,
        isLoading: false,
      };
    default:
      return state;
  }
};
