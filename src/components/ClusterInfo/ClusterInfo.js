import { Table } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getClusterInfo } from '../../redux/clusterInfo-reducer';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  clusterInfo: state.clusterInfo,
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

const ClusterInfo = ({clusterInfo,getClusterInfo}) => {

  useEffect(() => {getClusterInfo()},[]);

  return (
    <div>
      klaster{/*<Table loading={pods.isLoading} dataSource={pods.list} columns={columns} />*/}
    </div>
  );


}

export default connect(mapStateToProps,{getClusterInfo})(ClusterInfo);