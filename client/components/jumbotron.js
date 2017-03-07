import React from 'react';

const Jumbo = () => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbo-container">
        <div className="col-xs-2">
          <i className="glyphicon glyphicon-plus"></i>
        </div>
        <div className="col-xs-10">
          <h1 className="display-3">Welcome to MedRec!</h1>
          <p className="lead">Your personal symptom tracker.</p>
          <h6 className="jumbo-disclaimer">** still go to your doctor **</h6>
        </div>
      </div>
    </div>
  </div>
)

export default Jumbo;
