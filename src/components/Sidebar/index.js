import React from 'react';

import {connect} from "react-redux";

function setLesson(module, lesson){
return {
  type:'SET_LESSON',
  module,
  lesson,
}
}

const Sidebar = ({modules, dispatch}) => (
  <aside>
{ modules.map(modules => (
<div key={module.id}>
  <strong>{modules.title}</strong>
    <ul>
      {modules.lessons.map(lesson => (

        <li key={lesson.id}>{lesson.title}
     <button onClick={() => dispatch(setLesson(module, lesson))}>Selecionar</button>
     </li>
      ))}
    
    </ul>
</div>

))}
  </aside>
);


export default connect(state => ({modules:state.modules }))(Sidebar);