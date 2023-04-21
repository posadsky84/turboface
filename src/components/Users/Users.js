import { Table } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/users-reducer';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  users: state.users,
});

const columns = [
  {
    title: 'Имя',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Последний логин',
    dataIndex: 'last_login',
    key: 'last_login',
  },
];

const Users = ({users,getUsers}) => {

  useEffect(() => {getUsers()},[]);

  return (
    <div>
      <Table loading={users.isLoading} dataSource={users.list} columns={columns} />
    </div>
  );


}

export default connect(mapStateToProps,{getUsers})(Users);