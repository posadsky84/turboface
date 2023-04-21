import logo from './logo.svg';
import 'antd/dist/reset.css';
import './App.css';
import { Button, Menu } from 'antd';
import { Layout, Space } from 'antd';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import NameSpaces from './components/NameSpaces/NameSpaces';
import Nodes from './components/Nodes/Nodes';
import { Provider } from 'react-redux';
import store from './redux/store';
import Pods from './components/Pods/Pods';
import Users from './components/Users/Users';
import ClusterInfo from './components/ClusterInfo/ClusterInfo';


const items = [
  {
    path: "/",
    label: "Пространство имен",
  },
  {
    path: "/pods",
    label: "Поды",
  },
  {
    path: "/users",
    label: "Пользователи",
  },
  {
    path: "/nodes",
    label: "Ноды",
  },
  {
    path: "/clusterInfo",
    label: "Кластер",
  },
].map((item, index) => {
  return {
    key: index,
    label: <NavLink to={item.path}>{item.label}</NavLink>,
  };
});




const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


function App() {

  const { Header, Footer, Content } = Layout;



  return (

    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Header style={headerStyle}>
            <Menu mode="horizontal" items={items} />

          </Header>
          <Content style={contentStyle}>
            <Routes>
              <Route element={<NameSpaces />} path="/" />
              <Route element={<Nodes />} path="/nodes" />
              <Route element={<Pods />} path="/pods" />
              <Route element={<Users />} path="/users" />
              <Route element={<ClusterInfo />} path="/clusterInfo" />
            </Routes>
          </Content>
          {/*<Footer style={footerStyle}>Footer</Footer>*/}
        </Layout>

        {/*<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />*/}

        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
