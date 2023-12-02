import React from 'react';
import { jobTypeFormatter } from './homeHelpers'
import { css } from "@emotion/react";
import { DotLoader, ClipLoader } from "react-spinners";


const MainJobPoints = function (props) {

  const { isJobSaved, isJobPassed } = props;

  const handleImageError = (event) => {
    // Replace any broken image with the default image
    event.target.src = "https://redlakejobs.ca/wp-content/uploads/2020/10/employment.jpg";
  };
  
  return (
    props.jobs.length > 0 && (
      <>
        {!!props.loading &&
        <div className="spinner-container">
        <DotLoader
          css={`.spinner {
              background-color: transparent;
            }`
          }
          size={70}
          color="#854893"
        />
        <h2>Finding your perfect job!</h2>
      </div>}
        {!props.loading && <div className={`main-points-container ${isJobSaved ? "saved" : ""} ${isJobPassed ? "passed" : ""}`}>
          {props.jobs[props.jobIndex].employer_logo && (
            <div className="main-img-container">
              <img
                className="main-image"
                src={props.jobs[props.jobIndex].employer_logo}
                alt="employer logo"
                onClick={() => props.openModal()}
                onError={handleImageError}
              />
            </div>
          )}
          {!props.jobs[props.jobIndex].employer_logo && (
            <div className="main-img-container">
              <img
                className="main-image"
                src="https://redlakejobs.ca/wp-content/uploads/2020/10/employment.jpg"
                alt="jobs"
                onClick={() => props.openModal()}
              />
            </div>
          )}
          <div className="main-points-text-container">
            <h2>{props.jobs[props.jobIndex].job_title}</h2>
            <ul className="main-job-points">
              <li>
                <i className="fa-solid fa-briefcase"></i>
                <p>{props.jobs[props.jobIndex].employer_name}</p>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <p>{props.jobs[props.jobIndex].job_city}</p>
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                <p>{props.jobs[props.jobIndex].job_employment_type}</p>
              </li>
            </ul>
          </div>
        </div>}
      </>
    ) ||
    props.jobs.length === 0 && (
      <>
        {!!props.loading && 
        <div className="spinner-container">
        <DotLoader
          css={`.spinner {
              background-color: transparent;
            }`
          }
          size={70}
          color="#854893"
        />
        <h2>Finding your perfect job!</h2>
      </div>}
        {!props.loading && <h2 className='try-again-text'>Oops, please expand your search!</h2>}
      </>
    )
  );
};

export default MainJobPoints;