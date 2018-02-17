import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { updateCampus, fetchCampuses } from '../../redux/Campuses';


class CampusDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        campus: props.campus
      };
  
    }

    // componentWillReceiveProps (newProps, oldProps) {
    //     if (newProps.campus !== oldProps.campus) {
    //       this.setState({
    //         campus: newProps.campus
    //       });
    //     }
    //   }

      render() {
        const { students } = this.props;
        const campus = this.state.campus;
        if (!campus) return <div />;
        <div>
            {console.log("props on Campus Detail", this.props)}
            <h1> {this.props.campus.name} </h1>
            <h1> {this.props.campus.imageUrl} </h1>
            <h1> {this.props.campus.description} </h1>
        </div>

    }
}

// const mapState = ({ students, campuses }, ownProps) => {
//     const paramId = Number(ownProps.match.params.id);
//     const campus = campuses.find(campus => campus.id === paramId);
//     return { campus, students };
//   };
  
//   const mapDispatch = (dispatch, ownProps) => ({
//     debouncedUpdateCampus: _.debounce((...args) => {
//       dispatch(updateCampus(...args));
//     }, 500) 
//   });

// export default connect(mapState, mapDispatch)(CampusDetail)


export default CampusDetail;