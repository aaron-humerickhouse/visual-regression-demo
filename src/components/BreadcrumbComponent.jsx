import React from 'react';
import {Breadcrumb} from "antd";

class BreadcrumbComponent extends React.Component {
  render() {
    return(
      <Breadcrumb style={{ margin: '16px 0' }} id={"breadcrumb-component"}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default BreadcrumbComponent;
