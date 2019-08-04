import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FetchDemo from './FetchDemo';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import Store from "./redux/store.js";
import rootReducer from "./redux/actions.js";
import ExampleTooltip from "./TooltipDemo";
import './static/bootstrap-iso.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

var matches = document.querySelectorAll('[id^="adref-"]');

for (var i = 0; i < matches.length; i++) {
  //omitting undefined null check for brevity
   ReactDOM.render(
     <ExampleTooltip/>
     ,
    matches[i]
  );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
