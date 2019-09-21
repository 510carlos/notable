import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { DoctorContext, DoctorList, DoctorRoutes, GetDoctorsList } from '../../doctor';

const { Content, Sider } = Layout;



const Main = () => {

  const doctorsList = GetDoctorsList();

  return (
    <DoctorContext.Provider value={doctorsList}>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <DoctorList />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <DoctorRoutes />
          </Content>
        </Layout>
      </Layout>
      </DoctorContext.Provider>
  )
};

export default Main;
