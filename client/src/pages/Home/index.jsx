import React from 'react';
// import data from "../../mockdata/data"
import fetchData from '../../api-data/data'; 
import MainJobPoints from './MainJobPoints';
import JobDetailsModal from './JobDetailsModal';
import ActionButtons from './ActionButtons';
import "./Home.scss"
import { useState } from 'react';

const Home = function(props) {

  // useEffect(() => {
    
  //   const apiData=searchData;
  //   console.log(apiData);
  // }, []);

  fetchData();

  const [job, setJob] = useState(0)
  const [modal, setModal] = useState(false)

  const openModal = function () {
    setModal(true)
  }

  const closeModal = function () {
    setModal(false)
  }

  const nextJob = function() {
    setJob(prev =>  prev + 1)
  }

fetchData();

  return (
      <div>
        {data.data[job].employer_logo && <div><img className="main-image" src={data.data[2].employer_logo} alt="employer logo" onClick={() => openModal()}/></div>}
        {!data.data[job].employer_logo && <div><img className="main-image" src="https://redlakejobs.ca/wp-content/uploads/2020/10/employment.jpg" alt="jobs" onClick={() => openModal()}/></div>}
        <MainJobPoints data={data.data} job={job}/>
        <ActionButtons data={data.data} job={job} nextJob={nextJob}/>
        {!!modal && <JobDetailsModal data={data.data} closeModal={closeModal} job={job}/>}
      </div>
  );
}

export default Home;