import React, { PureComponent } from 'react';

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class LeftSider extends PureComponent {

  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        collapsedWidth={0}
        width={300}
        className='center-layout'
      >
        <div className='back-classroom'>返回教室</div>
        <Menu className='left-content' theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>User</span></span>}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
          <SubMenu
            key="sub3"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="10">Team 1</Menu.Item>
            <Menu.Item key="11">Team 2</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub4"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="12">Team 1</Menu.Item>
            <Menu.Item key="13">Team 2</Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>

    );
  }

}

export default LeftSider;
