import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  const h3Style = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={h3Style}>{cohort.name}</h3>
      <dl>
        <dt>Started On:</dt>
        <dd>{cohort.startDate}</dd>
        
        <dt>Ending On:</dt>
        <dd>{cohort.endDate}</dd>
        
        <dt>Course Status:</dt>
        <dd>{cohort.courseStatus}</dd>
        
        <dt>Trainer:</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
