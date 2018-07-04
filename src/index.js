import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import './style/lib/animate.css';
import './style/index.less';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
var store = createStore(Reducer);
ReactDOM.render(<Provider store={store}><Page /></Provider>,document.getElementById('root'));
 
