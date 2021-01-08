import React from "react";

import { Link } from "react-router-dom";

function Header(props) {

  return (
    <div >
  <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MOVIES</Link>
          </div>
        </div>
      </div>
    </header>
       
    </div>
  );
}

export default Header;
