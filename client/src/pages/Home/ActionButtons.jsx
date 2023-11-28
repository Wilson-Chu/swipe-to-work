import React from "react";
import axios from "axios"
import { descWithLineBreaks } from "../Home/homeHelpers"

const ActionButtons = function (props) {
  const saveJob = function () {
    const jobData = {
      job_posting_id: props.data[props.job].job_id,
      applied: false,
      company: props.data[props.job].employer_name,
      job_title: props.data[props.job].job_title,
      city: props.data[props.job].job_city,
      province: props.data[props.job].job_state,
      min_salary: props.data[props.job].job_min_salary,
      job_description: descWithLineBreaks(props.data[props.job].job_description),
      job_type: props.data[props.job].job_employment_type,
      is_remote: props.data[props.job].job_is_remote,
      posted_at: props.data[props.job].job_posted_at_datetime_utc.split("T").shift(),
      website: props.data[props.job].employer_website,
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
    saveJob();
    props.nextJob();
  };

  const randomChoice = function() {
    if (Math.random() < 0.5) {
      saveJob();
    } else {
      props.nextJob();
    }
  }

  return (
    <div className="action-buttons">
      <button type="button" onClick={props.nextJob}>
        Pass
      </button>
      <button type="button" onClick={randomChoice}>
        Random!
      </button>
      <button type="button" onClick={handleSaveAndNext}>
        Save
      </button>
    </div>
  )
}


export default ActionButtons;