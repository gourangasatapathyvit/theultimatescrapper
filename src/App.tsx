import "./App.css";
import {
  BrowserRouter as Router,Routes, Route} from "react-router-dom";

import MainPage from "./components/mainPage/MainPage";
import { mainPageObjProps } from "./utility/AllProps";
import ResPage from "./components/resultPage/ResPage";
import { useState,createContext } from "react";
import Test from "./components/test/Test";
import TmdbResp from "./components/mainPage/TmdbResp";
// import ProxyComponent from "./components/test/ProxyComponent";

interface MyGlobalContextType {
  sourceList: string[];
  mainPageObjProps:mainPageObjProps;
  setMainPageObjProps: (ele: mainPageObjProps) => void;
}

export const MyGlobalContext = createContext<MyGlobalContextType | undefined>(undefined);

function App() {

  // initialize
  const [mainPageObjProps, setMainPageObjProps] = useState<mainPageObjProps>({
      source: [],
      catagory: "",
      inputQuery: "",
      tmdbId:null
  });

  const [sourceList] = useState<string[]>(["Snowfl", "YTS","PirateBay"]);

  return (
    <>
       <MyGlobalContext.Provider value={{sourceList,mainPageObjProps,setMainPageObjProps}}>
        <Router>
          <Routes>
            <Route path="/" element={ <MainPage catagory={["Movies","Series"]}/>}/>
            <Route path="/moviecard" element={<TmdbResp/>} />
            <Route path="/result" element={<ResPage/>} />
            <Route path="/test" element={<Test />} />
            {/* <Route path="/chtest" element={<ProxyComponent/>} /> */}
          </Routes>
        </Router>

       </MyGlobalContext.Provider>
    </>
  );
}

export default App;
