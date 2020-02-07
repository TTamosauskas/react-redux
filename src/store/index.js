import {createStore} from 'redux';

function reducer(){
return {
  activeLesson: null,
  activeModule: null,
  modules: [
  {id:1, title:"Modulo um", lessons: [
    {id: 1, title: "Primeira aula" },
    {id: 2, title: "Segunda aula" },
  ]},
  {id:2, title:"Modulo dois", lessons:[
    {id: 3, title: "Terceira aula" },
    {id: 4, title: "Quarta aula" },

  ]}
]}


}

const store = createStore(reducer);


export default store;
