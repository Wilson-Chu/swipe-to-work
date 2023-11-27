import React from 'react';
import data from "../../mockdata/data"
import MainJobPoints from './MainJobPoints';
import JobDetailsModal from './JobDetailsModal';
import ActionButtons from './ActionButtons';
import "./Home.scss"
import { useState } from 'react';

const Home = function(props) {

  const [modal, setModal] = useState(false)

  const openModal = function () {
    setModal(true)
  }
  return (
      <div>
        {data.data[2].employer_logo && <div><img className="main-image" src={data.data[2].employer_logo} alt="employer logo" onClick={() => openModal()}/></div>}
        {!data.data[2].employer_logo && <div><img className="main-image" src="https://redlakejobs.ca/wp-content/uploads/2020/10/employment.jpg" alt="jobs" onClick={() => openModal()}/></div>}
        <MainJobPoints data={data.data} />
        <ActionButtons />
        {!!modal && <JobDetailsModal data={data.data}/>}
      </div>
  );
}

export default Home;