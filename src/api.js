import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-sim.dev.turbo.vdi/api',
  timeout: 15000,
});




export const API = {
  getNameSpaces() {
    return instance.get(`/namespaces`);
  },
  getPods() {
    return instance.get(`/pods`);
  },
  getUsers() {
    return instance.post(`/users`, data);
  },
  getNodes() {
    return instance.get(`/nodes`);
  },
  getClusterInfo() {
    return instance.get(`/cluster_info`);
  },
};