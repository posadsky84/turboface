import { Table } from 'antd';
import { connect } from 'react-redux';
import { getNameSpaces } from '../../redux/namespace-reducer';
import { useEffect } from 'react';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  nameSpaces: state.nameSpaces,
});

const columns = [
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Время сессии',
    dataIndex: 'age',
    key: 'age',
  },
];

const NameSpaces = ({nameSpaces,getNameSpaces}) => {

  useEffect(() => {getNameSpaces()},[]);

  return (
    <div>
    <Table loading={nameSpaces.isLoading} dataSource={nameSpaces.list} columns={columns} />
  </div>
  );


}

export default connect(mapStateToProps,{getNameSpaces})(NameSpaces);