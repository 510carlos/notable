import React, { useEffect, useState } from 'react';
import { getApointment } from '../Doctors.helpers';

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

const Apointments = ({match}) => {
  const id = match.params.id || 0;

  const [apt, setApt] = useState([]);

  useEffect( () => {
    let mounted = true;
    getApointment(id).then( result => {
      const { data } = result;
      if (mounted)
        setApt(data)
    });
    return () => {
      mounted = false;
    }
  }, [id]);
  return (
      <Table columns={columns} dataSource={apt} />
  )
};

export default Apointments;