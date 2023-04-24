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
    title: 'control_plane',
    dataIndex: 'control_plane',
    key: 'control_plane',
  },
  {
    title: 'core_dns',
    dataIndex: 'core_dns',
    key: 'core_dns',
  },
];

const ClusterInfo = ({clusterInfo,getClusterInfo}) => {

  useEffect(() => {getClusterInfo()},[]);

  return (
    <div>
      <Table loading={clusterInfo.isLoading} dataSource={clusterInfo.list} columns={columns} />
    </div>
  );


}

export default connect(mapStateToProps,{getClusterInfo})(ClusterInfo);