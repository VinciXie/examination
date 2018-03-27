import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import LeftSider from './components/LeftSider'
import RightSider from './components/RightSider'

import { Layout, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

import './app.scss'


class App extends Component {
  state = {
    collapsed: false,
    rightCollapsed: true,
  };

  toggleLeft = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  toggleRight = () => {
    this.setState({
      rightCollapsed: !this.state.rightCollapsed,
    });

  }
  render() {
    return (
      <Layout>
        <LeftSider collapsed={this.state.collapsed} />
        <Layout className='center-layout'>
          <Header className='container-header'>
            <span className='left-sider-toggle' onClick={this.toggleLeft}>
              { this.state.collapsed ? <span><Icon type="right" />展开</span> : <span><Icon type="left" />收起</span>}
            </span>
            <div>本章导读</div>
            <div className='my-homework' onClick={this.toggleRight}><Icon type="edit" />我的作业</div>
          </Header>
          <Content className='center-content'>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
        </Layout>
        <RightSider collapsed={this.state.rightCollapsed} toggleRight={this.toggleRight} />
      </Layout>
    );
  }

}

export default hot(module)(App);
