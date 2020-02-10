import React from 'react';

import {connect} from "react-redux";

import { bindActionCreators } from "redux";

import * as CourseActions from "../../store/actions/course";

const Sidebar = ({modules, setLesson}) => (
  <aside>
{ modules.map(module => (
<div key={module.id}>
  <strong>{module.titlemodule}</strong>
    <ul>
      {module.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}
     <button onClick={() => setLesson(module, lesson)}>Selecionar</button>
     </li>
      ))}
    
    </ul>
</div>

))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch =>  bindActionCreators(CourseActions, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
