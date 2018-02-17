import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../../redux/students';
import StudentItem from './StudentItem';

class StudentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gpa: 0
        }
    }

    render() {
        return (
            <div>
                {
                    console.log("this.props.students", this.props.students)
                }
                <h1> Students </h1>
               {this.props.students.map(student => <StudentItem student={student} key={student.id}/>) }
            </div>
        )
    }
}

const mapState = ({ students }) => ({ students });

const mapDispatch = { addStudent };

export default connect(mapState, mapDispatch)(StudentList);
