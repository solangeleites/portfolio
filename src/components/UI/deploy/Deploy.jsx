import React from 'react';
import { GrDeploy } from 'react-icons/gr';
const Deploy = ({ href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <GrDeploy
        style={{
          height: '35px',
          width: '35px',
          padding: '4px',
          border: '1px solid white',
          borderRadius: '10px',
          cursor: 'pointer',
          backgroundColor: 'white',
        }}
      />
    </a>
  );
};

export default Deploy;
