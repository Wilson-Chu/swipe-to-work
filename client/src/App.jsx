import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataList from "./components/DataList";
import Status from "./components/Status";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";
import Home from "./pages/Home";

export default function App() {

  return (
    <div className="App">
      

      <Router>
      <h1>Swipe to Work</h1>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
    </div>
  );
}
