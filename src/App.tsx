import "./App.css";
import {
  BrowserRouter as Router,
  Routes, // Switch= Routes
  Route,
  Navigate, // Redirect=Navigate
} from "react-router-dom";

import MainPage from "./components/mainPage/MainPage";
import { mainPageObjProps } from "./components/mainPage/MainPage";
import ResPage from "./components/resultPage/ResPage";
import { useState } from "react";

function App() {
  const [mainPageObjProps, setMainPageObjProps] = useState<mainPageObjProps>();
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                catagory={["Movies", "Series", "Books", "Songs"]}
                sources={["1337x", "YTS"]}
                getQueryParams={(mainPageObjProps) => {
                  setMainPageObjProps(mainPageObjProps);
                  console.log(mainPageObjProps);
                }}
              />
            }
          />

          {/* <Route path="/result" element={<ResPage inputValue={inputValue} />} /> */}

          <Route
            path="/result"
            element={
              <ResPage
                source={"saas"}
                catagory={mainPageObjProps?.inputQuery}
              />
            }
          />
        </Routes>
      </Router>

      {/* <MainPage></MainPage> */}
    </>
  );
}

export default App;
