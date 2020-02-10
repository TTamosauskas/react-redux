import React, {Component} from 'react';

// REDUX: importa Provider do react-redux para que este possa prover o fluxo de informações entre os componentes
import { Provider } from 'react-redux';

import Videos from './components/Videos';
import Sidebar from './components/Sidebar';

// REDUX: Importa o Store, ou sejam, onde estará armazenado as informações que o redux centraliza
import store from './store';

class App extends Component {

render() {
    return (

// REDUX: Aninha demais componentes dentro do provider pegando informações do store
    <div className="App">
    <Provider store={store}>
        <Videos />
         <Sidebar/>
     </Provider>

    </div>
  );}
}

export default App;
