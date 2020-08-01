import { createStore, applyMiddleware } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from './reducers';
let store
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
} else {
    store = createStore(reducers, applyMiddleware(thunk));
}
export default store