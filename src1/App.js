import React, { Component } from 'react';
import logo from './logo.svg';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './App.css';
const FormItem = Form.Item;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class App extends Component {
	
  componentDidMount(){
	  
  }	
  
  click(){
	var that = this;
    fetch('http://localhost:2000/index', {
      method: 'GET',
      credentials: 'include'
    }).then(function(response) {
      return response.json();
    }).then(function(result) {
      console.log(result)
      
       
    }).catch((error) => {
      
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
	var that = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
		fetch('http://localhost:2000/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              values
            )
          }).then(function(response) {
            return response.json();
          }).then(function(result) {
            console.log(result)
             
          }).catch((error) => {
             
          });
      }
    });
  }
  
  render() {
	const { getFieldDecorator } = this.props.form;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.click.bind(this)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<Form onSubmit={this.handleSubmit} className="login-form">
			<FormItem>
			  {getFieldDecorator('userName', {
				rules: [{ required: true, message: 'Please input your username!' }],
			  })(
				<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
			  )}
			</FormItem>
			<FormItem>
			  {getFieldDecorator('password', {
				rules: [{ required: true, message: 'Please input your Password!' }],
			  })(
				<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
			  )}
			</FormItem>
			<FormItem>
			  {getFieldDecorator('remember', {
				valuePropName: 'checked',
				initialValue: true,
			  })(
				<Checkbox>Remember me</Checkbox>
			  )}
			  <a className="login-form-forgot" href="">Forgot password</a>
			  <Button type="primary" htmlType="submit" className="login-form-button">
				Log in
			  </Button>
			  Or <a href="">register now!</a>
			</FormItem>
		 </Form>
      </div>
    );
  }
}

export default Form.create()(App);
