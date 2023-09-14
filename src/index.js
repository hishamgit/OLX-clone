import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseContext} from './store/Context'
import firebase from './firebase/config';
import Context from './store/Context';
import PostDetails from './store/PostContext';

ReactDOM.render(
<firebaseContext.Provider value={{firebase}}>  {/* firebase must be in {} */}
<Context>
<PostDetails>
    <App />
    </PostDetails>
    </Context>
</firebaseContext.Provider>, document.getElementById('root'));
