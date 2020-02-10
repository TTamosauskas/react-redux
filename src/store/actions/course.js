
//REDUX : Função que será disparada usando o ID unico SET_LESSON
export function setLesson(module, lesson){
  return {
    type:'SET_LESSON',
    module,
    lesson,
  }
  }