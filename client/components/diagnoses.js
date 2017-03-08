import React from 'react';

const Diagnoses = ({symptoms}) => (
  <div className="diagnoses">
    <h5>Possible Diagnoses</h5>
    <ul>
      {symptoms.length > 0 ? (symptoms.map((obj, i) => {
        return <li key={i}>{obj.Issue.Name}; ({obj.Issue.IcdName})</li>
      })) : <li>Unable to predict a diagnosis. Go see your physician.</li>}

      
    </ul>
    <h6>** still go see your doctor **</h6>
  </div>
);

export default Diagnoses;
