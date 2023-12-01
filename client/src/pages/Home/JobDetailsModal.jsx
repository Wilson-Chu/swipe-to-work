import React from "react";
import closeSymbol from "../../assets/closeSymbol.svg"
import "./JobDetailsModal.scss"
import {
  educationList,
  descWithLineBreaks,
  jobTypeFormatter,
} from "./homeHelpers";

const JobDetailsModal = function (props) {
  return (
    <div className="job-details-modal-container">
      <button className="job-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.closeModal} />
      </button>
      <h2>{props.jobs[props.jobIndex].job_title}</h2>
      <div className="modal-job-details">
        <section>
          <span>Company: </span>{props.jobs[props.jobIndex].employer_name}
        </section>
        <section>
          <span>City:</span> {props.jobs[props.jobIndex].job_city}
        </section>
        <section>
          <span>Province:</span> {props.jobs[props.jobIndex].job_state}
        </section>
        <section>
          <span>Mininum salary:</span> {props.jobs[props.jobIndex].job_min_salary ? props.jobs[props.jobIndex].job_min_salary : "N/A"}
        </section>
        <section>
          <span>Job type:</span> {props.jobs[props.jobIndex].job_employment_type}
        </section>
        <section>
          <span>Job is remote?</span> {(props.jobs[props.jobIndex].job_is_remote).toString()}
        </section>
        <section>
          <span className="job-desc">Job description:</span> {descWithLineBreaks(props.jobs[props.jobIndex].job_description)}
        </section>
        <section>
          <span>Posted at:</span> {props.jobs[props.jobIndex].job_posted_at_datetime_utc.split("T").shift()}
        </section>
        <section>
          <span>Education required:</span> {educationList(props.jobs[props.jobIndex].job_required_education)}
        </section>
        <section>
          <span>No experience required?</span> {(props.jobs[props.jobIndex].job_required_experience.no_experience_required).toString()}
        </section>
      </div>
    </div>
  );
};

export default JobDetailsModal;