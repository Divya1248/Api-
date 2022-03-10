import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./Component/AuthComponent/Login";
import VideoList from "./Pages/Vedioplayer/vedioList";
import DatePage from "./Pages/Date/Date";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/date" element={<DatePage />} />
          <Route path="/video" element={<VideoList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
