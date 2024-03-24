import "./App.css";
import {
  BrowserRouter as Router,Routes, Route} from "react-router-dom";

import MainPage from "./components/mainPage/MainPage";
import { mainPageObjProps } from "./components/mainPage/MainPage";
import ResPage from "./components/resultPage/ResPage";
import { useEffect, useState } from "react";
import Test from "./components/test/Test";

function App() {

  // initialize
  const [mainPageObjProps, setMainPageObjProps] = useState<mainPageObjProps>({
      source: [],
      catagory: "",
      inputQuery: "",
  });

  // set first page result to transfer result page 
  const handleMainPageObjChange =(data:mainPageObjProps)=>{
    setMainPageObjProps(data);
  }

  // always watch mainPageObjProps change, if it is update it
  useEffect(() => {
    setMainPageObjProps(mainPageObjProps);
  }, [mainPageObjProps]);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <MainPage
                catagory={["Movies", "Series", "Books", "Songs"]}
                sources={["Snowfl", "YTS","PirateBay"]} getAllData={handleMainPageObjChange} />
            }
          />
          <Route path="/result" element={<ResPage formData={mainPageObjProps} />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
