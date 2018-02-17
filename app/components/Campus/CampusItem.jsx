import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCampus } from '../../redux/campuses';
import { updateCampus } from '../../redux/campuses';

class CampusItem extends Component {

  constructor (props) {
    super(props);
    this.removeCampusCallback = this.removeCampusCallback.bind(this);
    this.updateCampusCallback = this.updateCampusCallback.bind(this);
  }

    render() {
      const { campus } = this.props;
      {console.log("what are campus props", this.props)}
      return (
        <li className="list-group-item Campus-item">
          
              {console.log("campus: this.props", this.props)}
              <Link className="large-font" to={`/campuses/${campus.id}`}>{campus.name}</Link>
  
          <button className="btn btn-default btn-xs" onClick={ this.updateCampusCallback }> Edit
            <span className="glyphicon glyphicon-remove" />
          </button>
          <button className="btn btn-default btn-xs" onClick={ this.removeCampusCallback}> Delete
            <span className="glyphicon glyphicon-remove" />
          </button>
        </li>
      );
    }

    removeCampusCallback (event) {
      const { campus, removeCampus } = this.props;
      removeCampus(campus.id);
    }

    updateCampusCallback (event) {
      const { campus, updateCampus } = this.props;
      updateCampus(campus.id);
    }

  }

  
  // const mapState = ({ campus }) => ({ campus });
  const mapState = null;
  const mapDispatch = { removeCampus, updateCampus };
  
  export default connect(mapState, mapDispatch)(CampusItem);
  