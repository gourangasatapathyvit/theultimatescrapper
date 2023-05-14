import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes, // Switch= Routes
  Route,
  Link,
  Navigate, // Redirect=Navigate
} from "react-router-dom";

import MainPage from "./components/mainPage/MainPage";
import ResPage from "./components/resultPage/ResPage";

function App() {
  const [inputValue, setInputValue] = useState("lorem");

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
              />
            }
          />

          {/* <Route path="/result" element={<ResPage inputValue={inputValue} />} /> */}

          <Route
            path="/result"
            element={<ResPage source={"saas"} catagory={""} />}
          />

          {/* <Navigate to="/" /> */}
        </Routes>
      </Router>

      {/* <MainPage></MainPage> */}
    </>
  );
}

export default App;
