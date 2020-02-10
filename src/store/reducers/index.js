// REDUX: Importa modulo que consegue combinar varios reducers em um só
import {combineReducers} from "redux";

// REDUX: Define uma lista de reducers (no caso só tem um)
import course from "./course";

// REDUX: exporta reducers combinados

export default combineReducers({
  course,
});