import React from 'react'
import Icons from './Icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Filterbar.css';

function Filterbar() {
  return (
    <div>
        <Icons />
        <div className="filtercontainer">
        <div className="filterbox"><p>Filters</p></div>
        <div className="tooglebox">
            <p>Display total before taxes</p>
            <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  
</div>

            </div>
        </div>
    </div>
  );
}

export default Filterbar;