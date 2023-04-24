

export const GET_PODS = `GET_PODS`;
const SET_PODS_LOADING = `SET_PODS_LOADING`;
const SET_PODS = `SET_PODS`;
export const getPods = () => ({type: GET_PODS});
export const setPods = list => ({ type: SET_PODS, list });
export const setPodsLoading = (value) => ({type: SET_PODS_LOADING, value});

const initState = {
  isLoading: false,
  list: [],
};

export const podsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PODS_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    case SET_PODS:
      return {
        ...state,
        list: action.list.items,
        isLoading: false,
      };
    default:
      return state;
  }
};
