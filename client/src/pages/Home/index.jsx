import React from 'react';
import MainJobPoints from './MainJobPoints';
import JobDetailsModal from './JobDetailsModal';
import ActionButtons from './ActionButtons';
import "./Home.scss"


const Home = function(props) {

  const { isJobSaved, swipeRight, isJobPassed, swipeLeft } = props;

  return (
    <div className="home">
      <MainJobPoints
        jobs={props.jobs}
        jobIndex={props.jobIndex}
        openModal={props.openModal}
        loading={props.loading}
        isJobSaved={isJobSaved}
        isJobPassed={isJobPassed}
      />
      <ActionButtons
        jobs={props.jobs}
        jobIndex={props.jobIndex}
        nextJob={props.nextJob}
        swipeRight={swipeRight}
        swipeLeft={swipeLeft}
      />
      {!!props.modal && (
        <JobDetailsModal
          jobs={props.jobs}
          closeModal={props.closeModal}
          jobIndex={props.jobIndex}
        />
      )}
    </div>
  );
}

export default Home;