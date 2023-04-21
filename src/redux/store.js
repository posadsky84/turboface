import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { nameSpacesReducer } from './namespace-reducer';
import rootSaga from './sagas';
import { podsReducer } from './pods-reducer';
import { nodesReducer } from './nodes-reducer';
import { usersReducer } from './users-reducer';
import { clusterInfoReducer } from './clusterInfo-reducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  nameSpaces: nameSpacesReducer,
  users: usersReducer,
  pods: podsReducer,
  nodes: nodesReducer,
  clusterInfo: clusterInfoReducer,
});

const store = legacy_createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
