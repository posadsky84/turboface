

export const GET_NODES = `GET_NODES`;
const SET_NODES_LOADING = `SET_NODES_LOADING`;
const SET_NODES = `SET_NODES`;
export const getNodes = () => ({type: GET_NODES});
export const setNodes = list => ({ type: SET_NODES, list });
export const setNodesLoading = (value) => ({type: SET_NODES_LOADING, value});

const initState = {
  isLoading: false,
  list: [],
};

export const nodesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NODES_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    case SET_NODES:
      return {
        ...state,
        list: action.list.items,
        isLoading: false,
      };
    default:
      return state;
  }
};
