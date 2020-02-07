import React, {Component} from 'react';
import { Provider } from 'react-redux';

import Videos from './components/Videos';
import Sidebar from './components/Sidebar';

import store from './store';

class App extends Component {

render() {
    return (
    <div className="App">
      <Provider store={store}>
      <Videos />
      <Sidebar/>
     </Provider>

    </div>
  );}
}

export default App;
