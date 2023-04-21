import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost',
  timeout: 15000,
});


const delay= ms => new Promise(resolve => setTimeout(resolve, ms));

const fakePods = async () => {
  await delay(2000);
  return  [
      {
        'name': 'pod1',
        'status': 'Active',
        'age': Math.round(Math.random(0,100)*100) + 'm',
      },
      {
        'name': 'pod2',
        'status': 'Active',
        'age': Math.round(Math.random(0,100)*100) + 'm',
      },
      {
        'name': 'pod3',
        'status': 'Active',
        'age': Math.round(Math.random(0,100)*100) + 'm',
      }
  ].map( (item, index) => ({...item, key: index}));
}

const fakeNameSpaces = async () => {
  await delay(2000);
  return [
    {
      'name': 'namespace1',
      'status': 'Active',
      'age': Math.round(Math.random(0,100)*100) + 'm',
    },
    {
      'name': 'namespace2',
      'status': 'Active',
      'age': Math.round(Math.random(0,100)*100) + 'm',
    },
    {
      'name': 'namespace3',
      'status': 'Active',
      'age': Math.round(Math.random(0,100)*100) + 'm',
    }
  ].map( (item, index) => ({...item, key: index}));
}
const fakeUsers = async () => {
  await delay(2000);
  return [
    {
      'username': 'user1',
      'last_login': Math.round(Math.random(0,100)*100) + 'm',
    },
    {
      'username': 'user2',
      'last_login': Math.round(Math.random(0,100)*100) + 'm',
    },
    {
      'username': 'user3',
      'last_login': Math.round(Math.random(0,100)*100) + 'm',
    }
  ].map( (item, index) => ({...item, key: index}));
}

const fakeNodes = async () => {
  await delay(2000);
  return [
    {
      'name': 'node1',
      'status': 'Active',
      'age': Math.round(Math.random(0,100)*100) + 'm',
      'version': 'v1.26.3+k3s1'
    },
    {
      'name': 'node2',
      'status': 'Active',
      'age': Math.round(Math.random(0,100)*100) + 'm',
      'version': 'v1.26.3+k3s1'
    },
    {
      'name': 'node3',
      'status': 'Active',
      'age': Math.round(Math.random(0,100)*100) + 'm',
      'version': 'v1.26.3+k3s1'
    }
  ].map( (item, index) => ({...item, key: index}));
}

const fakeClusterInfo = async () => {
  await delay(2000);
  return {
    'control_plane': 'https://127.0.0.1:6443',
    'core_dns': 'https://127.0.0.1:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy'
  };
}






export const API = {
  getNameSpaces() {
    //return instance.get(`/namespaces`);
    return fakeNameSpaces();
  },
  getPods() {
    //return instance.get(`/pods`);
    return fakePods();
  },
  getUsers() {
    //return instance.post(`/users`, data);
    return fakeUsers();
  },
  getNodes() {
    //return instance.get(`/nodes`);
    return fakeNodes();
  },
  getClusterInfo() {
    //return instance.get(`/cluster_info`);
    return fakeClusterInfo();
  },
};