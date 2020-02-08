
const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
    modules: [
    {id:1, 
      titlemodule:"Introdução ao assunto", 
      lessons: [
        {id: 1, title: "- Primeira aula" },
        {id: 2, title: "- Segunda aula" },
    ]},
    {id:2,
       titlemodule:"Exercicios Práticos", 
       lessons:[
         {id: 1, title: "- Terceira aula" },
        {id: 2, title: "- Quarta aula" },
    ]}
  ]
}

export default function course(state = INITIAL_STATE, action){
 console.log(action);
  if(action.type === "SET_LESSON") {
   return {
  ...state,
  activeLesson: action.lesson,
  activeModule: action.module
 };

  }

return state;


}