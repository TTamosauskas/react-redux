import React from 'react';

// REDUX: Importa connect de redux
import {connect} from "react-redux";

// REDUX Atrela ações criadas a este componente
import { bindActionCreators } from "redux";

// REDUX Importa todas as ações da pasta indicada
import * as CourseActions from "../../store/actions/course";

// REDUX Chama modules e setlessons do reducer (ver abaixo)
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

// REDUX: constante padrao usada para pegar o props deste reducer
const mapStateToProps = state => ({
  modules: state.course.modules
});

// REDUX: constante padrao usada pegar todas as actions indicadas acima

const mapDispatchToProps = dispatch =>  bindActionCreators(CourseActions, dispatch);

// REDUX: exporta propriedades e actions 

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
