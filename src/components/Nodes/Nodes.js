import { Table } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getNodes } from '../../redux/nodes-reducer';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  nodes: state.nodes,
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
  {
    title: 'Версия',
    dataIndex: 'version',
    key: 'version',
  },
];

const Nodes = ({nodes,getNodes}) => {

  useEffect(() => {getNodes()},[]);

  return (
    <div>
      <Table loading={nodes.isLoading} dataSource={nodes.list} columns={columns} />
    </div>
  );


}

export default connect(mapStateToProps,{getNodes})(Nodes);