import React from 'react';

const MainJobPoints = function (props) {
  return (
    <div className='main-points-container'>
      <h2>
        {props.data[props.job].job_title}
      </h2>
      <ul className="main-job-points">
        <li>
          <i className="fa-solid fa-briefcase"></i>
          <p>{props.data[props.job].employer_name}</p>
        </li>
        <li>
          <i className="fa-solid fa-location-dot"></i>
          <p>{props.data[props.job].job_city}</p>
        </li>
        <li>
          <i className="fa-regular fa-clock"></i>
          <p>{props.data[props.job].job_employment_type}</p>
        </li>
      </ul>
    </div>
  )
};

export default MainJobPoints;