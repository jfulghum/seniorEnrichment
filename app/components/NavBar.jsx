import React from 'react';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <h1>A nav bar!</h1>
      </nav>
    );
  }
}

export default Navbar;