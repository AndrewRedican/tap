import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Signed from './components/signed';
import SignIn from './components/signin';

const FS_KEY = '';

/*

<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXuGJCwrT69XcWzxJlsbOaCgrgSaIzGV8",
    authDomain: "redican2-c6b22.firebaseapp.com",
    databaseURL: "https://redican2-c6b22.firebaseio.com",
    projectId: "redican2-c6b22",
    storageBucket: "redican2-c6b22.appspot.com",
    messagingSenderId: "310050416137"
  };
  firebase.initializeApp(config);
</script>



*/

class App extends Component {
    constructor (props) {
        super(props);
        this.state={signed:true};
        this.onLogin=this.onLogin.bind(this);
        this.onLogout=this.onLogout.bind(this);
    } 
    render() { 
        if (this.state.signed) 
            return (
                <Signed 
                    onLogout={this.onLogout}
                    grid={true}
                />
            ); 
        return <SignIn onLogin={this.onLogin}/>; 
    }    
    onLogout(){this.setState={signed:false}}
    onLogin(){this.setState={siged:true}}
}

ReactDOM.render(<App />, document.querySelector('.app'));


/*







import React, { Component }             from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers                         from './reducers';
import ReduxPromise                     from 'redux-promise';
import ReduxThunk                       from 'redux-thunk';

import Signed                           from './components/signed';
import SignIn                           from './components/signin';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { signed: true };
    } 
    render() {
        if (this.state.signed) {
            return <Signed />;
        }
        return <SignIn />;
    }    
}
 
const createStoreWithMiddleware = applyMiddleware(ReduxPromise,ReduxThunk)(createStore);
 
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <App />
  </Provider>
  , document.querySelector('#app')
);








*/