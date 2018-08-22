import React , {Component} from 'react';
import { notification,Icon,Avatar,Input,Tabs,Modal } from 'antd';
import globals from '../../components/unit';
const Search = Input.Search;
const TabPane = Tabs.TabPane;
export default class left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
    };
  }

  componentDidMount(){
    var that = this;

  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



  render() {
    return (
      <div className="main_left">
         <div className="header">
            <div className="Avatar">
              <Avatar shape="square" size="large" icon="user" />
            </div>
            <div className="info">
               <h3><span>辉</span></h3>
               <Icon style={{color:'#eee',fontSize:18}} type="bars" />
            </div>
         </div>
         <div className="search">
           <Search
              placeholder="搜索"
              onSearch={value => console.log(value)}
              style={{ width: "100%",color:'#eee'}}
            />
            <Icon onClick={this.showModal} type="plus" style={{color:'#fff',marginLeft:10,fontSize:20,cursor:'pointer'}}/>
         </div>
         <div className="tabs">
           <Tabs defaultActiveKey="2" size="large" tabBarStyle={{borderBottom:'1px solid #24272c'}}>
             <TabPane tab={<span><Icon type="message"  /></span>} key="1">
               Tab 1
             </TabPane>
             <TabPane tab={<span><Icon type="contacts" /></span>} key="2">
               Tab 2
             </TabPane>
             <TabPane tab={<span><Icon type="appstore" /></span>} key="3">
               Tab 3
             </TabPane>
           </Tabs>
         </div>
         <Modal
          title="添加朋友"
          visible={this.state.visible}
          onOk={this.handleOk}
          okText="添加"
          footer={null}
          onCancel={this.handleCancel}
        >
        <Search
          placeholder="输入用户名"
          enterButton="搜索"
          size="default"
          onSearch={value => console.log(value)}
        />
        </Modal>
      </div>
    );
  }
}
