import { Table } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPods } from '../../redux/pods-reducer';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  pods: state.pods,
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

const Pods = ({pods,getPods}) => {

  useEffect(() => {getPods()},[]);

  return (
    <div>
      <Table loading={pods.isLoading} dataSource={pods.list} columns={columns} />
    </div>
  );


}

export default connect(mapStateToProps,{getPods})(Pods);