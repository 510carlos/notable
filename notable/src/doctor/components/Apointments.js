import React from 'react';
import { Table } from 'antd';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Kind',
    dataIndex: 'kind',
    key: 'kind',
  }
];

const Apointments = ({apt}) =>
  <Table columns={columns} dataSource={apt} />;

export default Apointments;