import React from 'react';
import MainJobPoints from './MainJobPoints';
import JobDetailsModal from './JobDetailsModal';
import ActionButtons from './ActionButtons';
import "./Home.scss"
import useApplicationData from '../../hooks/useApplicationData';

const Home = function(props) {

  const {state, openModal, closeModal, nextJob} = useApplicationData();

  return (
      <div className='home'>
        <MainJobPoints jobs={state.jobs} jobIndex={state.jobIndex}  openModal={openModal}/>
        <ActionButtons jobs={state.jobs} jobIndex={state.jobIndex} nextJob={nextJob}/>
        {!!state.modal && <JobDetailsModal jobs={state.jobs} closeModal={closeModal} jobIndex={state.jobIndex}/>}
      </div>
  );
}

export default Home;