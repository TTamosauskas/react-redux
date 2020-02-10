// REDUX: Importa modulo resopnsavel pela criação do store
import {createStore} from 'redux';

//REDUX: aponta a raiz onde estarão os reducers (amarmazenagem de estados)
import rootReducer from "./reducers";

// REDUX: Cria store baseado nos reducers indicados
const store = createStore(rootReducer);

// REDUX: exporta estore
export default store;
