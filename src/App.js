import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import CategoryWise from "./views/CategoryWise";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [progress, setProgress] = useState(0);
  const changeProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <BrowserRouter>
      <LoadingBar
        color="#000"
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<Home setProgress={changeProgress} />} />
        <Route path="/home" element={<Home setProgress={changeProgress} />} />
        <Route
          path="/entertainment"
          element={
            <CategoryWise
              setProgress={changeProgress}
              category="entertainment"
            />
          }
        />
        <Route
          path="/science"
          element={
            <CategoryWise setProgress={changeProgress} category="science" />
          }
        />
        <Route
          path="/health"
          element={
            <CategoryWise setProgress={changeProgress} category="health" />
          }
        />
        <Route
          path="/business"
          element={
            <CategoryWise setProgress={changeProgress} category="business" />
          }
        />
        <Route
          path="/sports"
          element={
            <CategoryWise setProgress={changeProgress} category="sports" />
          }
        />
        <Route
          path="/technology"
          element={
            <CategoryWise setProgress={changeProgress} category="technology" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
