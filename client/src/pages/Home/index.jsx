import React from 'react';
import MainJobPoints from './MainJobPoints';
import JobDetailsModal from './JobDetailsModal';
import ActionButtons from './ActionButtons';

import useApplicationData from '../../hooks/useApplicationData';
import data from '../../mockdata/data';

import "./Home.scss"

const Home = function(props) {
  // const {jobs, jobIndex, modal, openModal, closeModal, nextJob} = useApplicationData();
  // console.log("JOBS", jobs)
  // console.log("INDEX", jobIndex)

  const jobs = data.data;
  const [jobIndex, setJobIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const openModal = function () {
    setModal(true);
  };

  const closeModal = function () {
    setModal(false);
  };

  const nextJob = function () {
    setJobIndex((prev) => prev + 1);
  };

  return (
      <div className='home'>
        <MainJobPoints jobs={props.jobs} jobIndex={props.jobIndex}  openModal={props.openModal}/>
        <ActionButtons jobs={props.jobs} jobIndex={props.jobIndex} nextJob={props.nextJob}/>
        {!!props.modal && <JobDetailsModal jobs={props.jobs} closeModal={props.closeModal} jobIndex={props.jobIndex}/>}
      </div>
  );
}

export default Home;