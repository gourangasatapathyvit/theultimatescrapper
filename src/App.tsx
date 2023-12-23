import "./App.css";
import {
  BrowserRouter as Router,Routes, Route} from "react-router-dom";

import MainPage from "./components/mainPage/MainPage";
import { mainPageObjProps } from "./components/mainPage/MainPage";
import ResPage from "./components/resultPage/ResPage";
import { useEffect, useState } from "react";

function App() {
  const [mainPageObjProps, setMainPageObjProps] = useState<mainPageObjProps>({
      source: [],
      catagory: "",
      inputQuery: "",
  });

  const handleMainPageObjChange =(data:mainPageObjProps)=>{
    setMainPageObjProps(data);
  }

  useEffect(() => {
    setMainPageObjProps(mainPageObjProps);
  }, [mainPageObjProps]);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <MainPage
                catagory={["Movies", "Series", "Books", "Songs"]}
                sources={["1337x", "YTS","PirateBay"]} getAllData={handleMainPageObjChange} />
            }
          />
          <Route path="/result" element={<ResPage formData={mainPageObjProps} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
