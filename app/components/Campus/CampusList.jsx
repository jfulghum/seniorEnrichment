import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampusItem from './CampusItem';
import { addCampus } from '../../redux/campuses';

class CampusList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        imageUrl: '',
        description: ''
      };

    }
  
  render() {
    return (
      <div className="container">
        <ul>
            {console.log("this.props.campuses", this.props.campuses)}
            <h1> Campuses </h1>
        {
          this.props.campuses
          .map(campus => <CampusItem campus={campus} key={campus.id} />)
        }
        </ul>
      </div>
    );
  }

}

const mapState = ({ students, campuses }) => ({ students, campuses });

const mapDispatch = { addCampus };

export default connect(mapState, mapDispatch)(CampusList);
