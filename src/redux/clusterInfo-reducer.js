

export const GET_CLUSTERINFO = `GET_CLUSTERINFO`;
const SET_CLUSTERINFO_LOADING = `SET_CLUSTERINFO_LOADING`;
const SET_CLUSTERINFO = `SET_CLUSTERINFO`;
export const getClusterInfo = () => ({type: GET_CLUSTERINFO});
export const setClusterInfo = list => ({ type: SET_CLUSTERINFO, list });
export const setClusterInfoLoading = (value) => ({type: SET_CLUSTERINFO_LOADING, value});

const initState = {
  isLoading: false,
  list: [],
};

export const clusterInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CLUSTERINFO_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    case SET_CLUSTERINFO:
      return {
        ...state,
        list: action.list,
        isLoading: false,
      };
    default:
      return state;
  }
};
