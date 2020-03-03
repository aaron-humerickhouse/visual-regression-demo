import React from 'react';
import { Layout } from 'antd';

import HeaderComponent from './HeaderComponent'
import SiderComponent from "./SiderComponent";
import BreadcrumbComponent from './BreadcrumbComponent'
import ContentComponent from './ContentComponent'


class DemoPage extends React.Component {
  render() {

    return(
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent/>
          <Layout style={{ padding: '0 24px 24px' }}>
            <BreadcrumbComponent />
            <ContentComponent />
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default DemoPage;
