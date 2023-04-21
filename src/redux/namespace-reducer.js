

export const GET_NAMESPACES = `GET_NAMESPACES`;
const SET_NAMESPACES_LOADING = `SET_NAMESPACES_LOADING`;
const SET_NAMESPACES = `SET_NAMESPACES`;
export const getNameSpaces = () => ({type: GET_NAMESPACES});
export const setNameSpaces = list => ({ type: SET_NAMESPACES, list });
export const setNameSpacesLoading = (value) => ({type: SET_NAMESPACES_LOADING, value});

const initState = {
  isLoading: false,
  list: [],
};

export const nameSpacesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NAMESPACES_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    case SET_NAMESPACES:
      return {
        ...state,
        list: action.list,
        isLoading: false,
      };
    default:
      return state;
  }
};
