import React, { PureComponent } from 'react';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;



class RightSider extends PureComponent {

  render() {
    console.log('this.props', this.props);
    const style = this.props.collapsed ?  {right: -375} : null
    return (
      <div className='right-container' style={style}>

        <div className='right-container-header' onClick={this.props.toggleRight}>
          <Icon type="edit" /> 我的作业 <Icon type="right" />
        </div>
        <Menu className='right-container-content' defaultSelectedKeys={['1']} mode="inline">
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
        </Menu>
      </div>
    );
  }

}




export default RightSider;
