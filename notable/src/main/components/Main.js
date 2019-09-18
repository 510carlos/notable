import * as React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { DoctorList, DoctorRoutes } from '../../doctor';

const { Content, Sider } = Layout;



const Main = () => (
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <DoctorList></DoctorList>
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
);

export default Main;
