import React , {Component} from 'react';
import { notification,Icon,LocaleProvider } from 'antd';
import Left from './left';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './im.less';
import '../style/index.less';
import '../App.css';
export default class Mian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    var that = this;

  }



  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div className="main">
           <div className='app'>
              <Left />
           </div>
        </div>
      </LocaleProvider>
    );
  }
}
