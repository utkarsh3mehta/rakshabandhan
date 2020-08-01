import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import store from './redux/store'
// Components
import HeySisters from './containers/heySisters/heySisters'
import Personal from './containers/personal/personal';
import Gallery from './containers/gallery/gallery';
// Statics
import './index.module.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/rakshabandhan/" exact component={HeySisters} />
        <Route path="/rakshabandhan/:name" exact component={Personal} />
        <Route path="/rakshabandhan/:name/gallery" exact component={Gallery} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);