import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import ducers from './reducers';
import firebaseConfig from './config/firebase';
import Router from './Router';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const middleware = [thunk];

        const store = createStore(ducers, {}, applyMiddleware(...middleware)
        );
        return (
            <Provider store={store}>
                <Fragment>
                    <Router />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
