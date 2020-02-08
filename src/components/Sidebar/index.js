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
{ modules.map(module => (
<div key={module.id}>
  <strong>{module.titlemodule}</strong>
    <ul>
      {module.lessons.map(lesson => (

        <li key={lesson.id}>{lesson.title}
     <button onClick={() => dispatch(setLesson(module, lesson))}>Selecionar</button>
     </li>
      ))}
    
    </ul>
</div>

))}
  </aside>
);


export default connect(state => ({modules:state.course.modules}))(Sidebar);
