import { takeEvery, all, put } from 'redux-saga/effects';
import { API as api } from '../api';
import { GET_NAMESPACES, setNameSpaces, setNameSpacesLoading } from './namespace-reducer';
import { GET_NODES, setNodes, setNodesLoading } from './nodes-reducer';
import { GET_PODS, setPods, setPodsLoading } from './pods-reducer';
import { GET_USERS, setUsers, setUsersLoading } from './users-reducer';
import { GET_CLUSTERINFO, setClusterInfo, setClusterInfoLoading } from './clusterInfo-reducer';

//Подозрительно что параметр action не использован
//// NAMESPACES
function* workerNameSpaces(action) {
  yield put(setNameSpacesLoading(true));
  const data = yield api.getNameSpaces().then(response => response);
  yield put(setNameSpaces(data));
}

function* watcherGetNameSpaces() {
  yield takeEvery(GET_NAMESPACES, workerNameSpaces);
}

//// NODES
function* workerNodes(action) {
  yield put(setNodesLoading(true));
  const data = yield api.getNodes().then(response => response);
  yield put(setNodes(data));
}

function* watcherNodes() {
  yield takeEvery(GET_NODES, workerNodes);
}

//// PODS
function* workerPods(action) {
  yield put(setPodsLoading(true));
  const data = yield api.getPods().then(response => response);
  yield put(setPods(data));
}

function* watcherPods() {
  yield takeEvery(GET_PODS, workerPods);
}

//// USERS
function* workerUsers(action) {
  yield put(setUsersLoading(true));
  const data = yield api.getUsers().then(response => response);
  yield put(setUsers(data));
}

function* watcherUsers() {
  yield takeEvery(GET_USERS, workerUsers);
}

////CLUSTERINFO
function* workerClusterInfo(action) {
  yield put(setClusterInfoLoading(true));
  const data = yield api.getClusterInfo().then(response => response);
  yield put(setClusterInfo(data));
}

function* watcherClusterInfo() {
  yield takeEvery(GET_CLUSTERINFO, workerClusterInfo);
}


export default function* rootSaga() {
  yield all([
    watcherGetNameSpaces(),
    watcherNodes(),
    watcherPods(),
    watcherUsers(),
    watcherClusterInfo(),
  ])
};