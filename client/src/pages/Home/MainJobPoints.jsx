import React from 'react';

const MainJobPoints = function (props) {
  return (
    <div className='main-points-container'>
      {props.data[props.job].employer_logo && <div><img className="main-image" src={props.data[2].employer_logo} alt="employer logo" onClick={() => props.openModal()} /></div>}
      {!props.data[props.job].employer_logo && <div><img className="main-image" src="https://redlakejobs.ca/wp-content/uploads/2020/10/employment.jpg" alt="jobs" onClick={() => props.openModal()} /></div>}
      <div className='main-points-text-container'>
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
    </div>
  )
};

export default MainJobPoints;