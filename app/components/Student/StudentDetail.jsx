import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateStudent, fetchStudents } from '../../redux/students';


class StudentDetail extends Component {
    constructor(props) {
      super(props);
  
    }

      render() {
        <div>
            {console.log("props on Student Detail", this.props)}
        </div>

    }
}

export default StudentDetail;