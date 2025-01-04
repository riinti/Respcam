import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./tabs/main.tsx";
import Survey from "./tabs/survey.tsx";
import Alarm from "./tabs/alarm.tsx";
import MyPage from "./tabs/mypage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
