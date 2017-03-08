import React from 'react';

const Diagnoses = ({symptoms}) => (
  <div className="diagnoses">
    <h5>Possible Diagnoses</h5>
    <h6>**still go to your doctor**</h6>
    <ul>
      {symptoms.map((obj, i) => {
        return <li key={i}>{obj.Issue.Name}; ({obj.Issue.IcdName})</li>
      })}
    </ul>
  </div>
);

export default Diagnoses;
