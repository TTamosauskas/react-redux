import React from 'react';

import {connect} from "react-redux";

const Video = ({activeModule, activeLesson}) => (
  <div>
      <strong>Modulo {activeModule.titlemodule}</strong><br></br>
      <span>Aula {activeLesson.title}</span>
    </div>
    );

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson,
}))(Video);