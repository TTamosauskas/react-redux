import React from 'react';

import {connect} from "react-redux";

const Sidebar = ({modules}) => (
  <aside>
{ modules.map(modules => (
<div key={module.id}>
  <strong>{modules.title}</strong>
    <ul>
      {modules.lessons.map(lesson => (

        <li key={lesson.id}>{lesson.title}</li>
        
      ))}
    </ul>
</div>

))}
  </aside>
);


export default connect(state => ({modules:state.modules }))(Sidebar);