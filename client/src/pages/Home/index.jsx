import React from 'react';
import fetchData from '../../api-data/data'; 
import MainJobPoints from './MainJobPoints';
import JobDetailsModal from './JobDetailsModal';
import ActionButtons from './ActionButtons';
import useApplicationData from '../../hooks/useApplicationData';
import "./Home.scss"
import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = function(props) {

  const {jobs, jobIndex, modal, openModal, closeModal, nextJob} = useApplicationData();
  console.log("JOBS", jobs)
  console.log("INDEX", jobIndex)
 

  return (
      <div className='home'>
        <MainJobPoints jobs={jobs} jobIndex={jobIndex}  openModal={openModal}/>
        <ActionButtons jobs={jobs} jobIndex={jobIndex} nextJob={nextJob}/>
        {!!modal && <JobDetailsModal jobs={jobs} closeModal={closeModal} jobIndex={jobIndex}/>}
      </div>
  );
}

export default Home;