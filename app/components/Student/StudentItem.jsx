import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudent } from '../../redux/students';
import { updateStudent } from '../../redux/students';


class StudentItem extends Component {

    constructor(props) {
        super(props);
        this.removeStudentCallback = this.removeStudentCallback.bind(this);
        this.updateStudentCallback= this.updateStudentCallback.bind(this);
    }


    render(){
        const { student } = this.props;
        return (
            <div>
                { console.log("student in StudentItem", student) }
                {/* <Link className="large-font" to={`/students/${student.id}`}>
                {student.firstName}
                </Link> */}
                {student.firstName}
           
                 <button className="btn btn-default btn-xs" onClick={ this.updateStudentCallback }> Edit
                    <span className="glyphicon glyphicon-remove" />
                </button>
              
                <button className="btn btn-default btn-xs" onClick={ this.removeStudentCallback}> Delete
                    <span className="glyphicon glyphicon-remove" />
                </button>
            </div>
        )
    }

    removeStudentCallback (event) {
        const { student, removeStudent } = this.props;
        removeStudent(student.id);
      }
  
      updateStudentCallback (event) {
        const { student, updateStudent } = this.props;
        updateStudent(student.id);
      }
}

const mapState = null;
const mapDispatch = { removeStudent, updateStudent };

export default connect(mapState, mapDispatch)(StudentItem);