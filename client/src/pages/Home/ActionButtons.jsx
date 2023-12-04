import React from "react";
import axios from "axios"
import { descWithLineBreaks } from "../Home/homeHelpers"
import "./ActionButtons.scss"
import { faL } from "@fortawesome/free-solid-svg-icons";

const ActionButtons = function (props) {
  
  const { swipeLeft, swipeRight } = props;

  const saveJob = function () {
    const jobData = {
      job_posting_id: props.jobs[props.jobIndex].job_id,
      applied: false,
      company: props.jobs[props.jobIndex].employer_name,
      job_title: props.jobs[props.jobIndex].job_title,
      city: props.jobs[props.jobIndex].job_city,
      province: props.jobs[props.jobIndex].job_state,
      min_salary: parseInt(props.jobs[props.jobIndex].job_min_salary),
      job_description: props.jobs[props.jobIndex].job_description,
      job_type: props.jobs[props.jobIndex].job_employment_type,
      is_remote: props.jobs[props.jobIndex].job_is_remote,
      posted_at: props.jobs[props.jobIndex].job_posted_at_datetime_utc.split("T").shift(),
      website: props.jobs[props.jobIndex].job_apply_link || props.jobs[props.jobIndex].employer_website || 'https://www.google.com',
      user_id: 1
    }

    return axios.post("/api/savedJobs", jobData)
      .then(response => {
        console.log("Data saved:", response.data);
      })
      .catch(error => {
        console.error("Error saving data:", error);
      });
  };

  const handleSaveAndNext = function() {
    try {
      saveJob();
    } catch (error) {
      console.log("Save Job Error:", error)
    }
    
    swipeRight();
    props.nextJob();
  };

  const randomChoice = function() {
    if (Math.random() < 0.5) {
      handleSaveAndNext();
    } else {
      handlePass();
    }
  }

  const handlePass = function() {
    swipeLeft();
    props.nextJob();
  }

  return (
    <div className="action-buttons">
      <button className="action-button" type="button" onClick={handlePass}>
        Pass
      </button>
      <button className="action-button" type="button" onClick={randomChoice}>
        Random!
      </button>
      <button className="action-button" type="button" onClick={handleSaveAndNext}>
        Save
      </button>
    </div>
  );
}


export default ActionButtons;