import axios from 'axios';

const INITIALIZE = 'INITIALIZE_STUDENTS';
const CREATE = 'CREATE_STUDENT';
export const REMOVE = "REMOVE_STUDENT";
const UPDATE = "UPDATE_STUDENT";


const init = students => ({ type: INITIALIZE, students });
const create = student => ({ type: CREATE, student });
const remove = id => ({ type: REMOVE, id });
const update = student => ({ type: UPDATE, student})

export default function reducer (students = [], action) {
    switch (action.type) {
        case INITIALIZE:
            return action.students;

        case CREATE:
            return [action.student, ...students];

        case REMOVE:
            return students.filter(student => student.id !== action.id);

        case UPDATE:
            return students.map(student => (
                action.student.id === student.id ? action.student : student
        ));

    default:
        return students;
    }
}


export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
         .then(res => dispatch(init(res.data)))
         .catch(err => console.error(err));
};
  
  
export const removeStudent = id => dispatch => {
    axios.delete(`/api/students/${id}`)
        .then(() => dispatch(remove(id)))
        .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};

export const addStudent = student => dispatch => {
    axios.post('/api/students', student)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(`Creating student: ${student} unsuccessful`, err));
};

export const updateStudent = (id, student) => dispatch => {
    axios.put(`/api/students/${id}`, student)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};
    