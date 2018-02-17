import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import StudentList from './Student/StudentList';
import StudentDetail from './Student/StudentDetail';
import CampusList from './Campus/CampusList';
import CampusDetail from './Campus/CampusDetail';
import Navbar from './Navbar';
import Footer from './Footer';

import { fetchStudents } from '../redux/students';
import { fetchCampuses } from '../redux/campuses';

class Root extends Component {
  componentDidMount(){
    this.props.fetchData();

  }
   render () {
     return (
      <Router> 
        <div id="main"> 
        { console.log(" this.props on root", this.props )}
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/students" component={StudentList} />
          <Route path="/students/:id" component={StudentDetail} />
          <Route exact path="/campuses" component={CampusList} />
			    <Route path="/campuses/:id" component={CampusDetail} />
			    <Footer />
        </div>
      </Router>
     )
   }
 }



 const mapState = null;

 const mapDispatch = dispatch => ({
   fetchData: () => {
     dispatch(fetchStudents());
     dispatch(fetchCampuses());
   }
 });
 
 export default connect(mapState, mapDispatch)(Root);
