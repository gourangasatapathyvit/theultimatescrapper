import { Grid, GridItem, Show } from "@chakra-ui/react";
import mainBg from "../../assets/webscrape.jpg";
import InputComp from "../utilityComponents/InputComp";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import { mainPageObjProps } from "../../utility/AllProps";
import {useContext} from 'react';
import {MyGlobalContext} from '../../App';

interface mainPageProps {
  catagory: string[];
}

const MainPage = ({ catagory }: mainPageProps) => {

  const [checkedItem, setCheckedItem] = useState<string>("");
  const sourceContext = useContext(MyGlobalContext);
  
  // this is regarding readonly function
  const [checkedStateCatagory, setcheckedStateCatagory] = useState<{
    [key: string]: boolean;
  }>({});

  // 1. if there is any data in local storage set as default else empty state
  const [mainPageObj, setMainPageObj] = useState<mainPageObjProps>(() => {
    const storedData = localStorage.getItem('mainPageObj');
    return storedData ? JSON.parse(storedData) : {
     source: [],
     catagory: "",
     inputQuery: "",
    };
   });

   // 2. handled for page refresh case , if any data is present , then load existing data
  const loadSavedState = () => {
    const savedState = localStorage.getItem('mainPageObj');
    if (savedState) {
      setMainPageObj(JSON.parse(savedState));
    }
  };

  // onchange category
  const handleChangeCatagory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setcheckedStateCatagory({
      ...checkedStateCatagory,
      [name]: checked,
    });

    checked ? setCheckedItem(name) : setCheckedItem("");

    checked? setMainPageObj((prevState) => ({...prevState, catagory: name,}))
            : setMainPageObj((prevState) => ({...prevState,catagory: null,}));
  };

  useEffect(() => {
    loadSavedState(); 
  }, []);

  useEffect(() => {
    localStorage.setItem('mainPageObj', JSON.stringify(mainPageObj));

    const catagoryCheckedState: { [key: string]: boolean } = {};
    catagory.forEach((cat) => {
      catagoryCheckedState[cat] = mainPageObj.catagory === cat;
    });
    setcheckedStateCatagory(catagoryCheckedState);
    
    (mainPageObj.catagory && checkedStateCatagory[mainPageObj.catagory]  == true)? setCheckedItem(mainPageObj.catagory) : setCheckedItem("");
    sourceContext?.setMainPageObjProps(mainPageObj)
  }, [mainPageObj,mainPageObj.source, mainPageObj.catagory, catagory]);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          // lg: `"nav nav" "main main" "footer footer"`,
        }}
        templateColumns={{
          base: "1fr",
          // lg: "1fr 1fr",
        }}
        gridTemplateRows={"auto 1fr auto"}
        // gridTemplateColumns={"150px 1fr"}
        // gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
        minH="100vh"
      >
        <Show above="lg"></Show>

        <Show below="lg"></Show>

        <GridItem
          // bg="yellow.400"
          area={"nav"}
          // height={"0"}
          textAlign={"center"}
          fontSize={50}
          textColor={"black"}
          fontFamily={"fantasy"}
        >
          <h3>The Ultimate Scrapper</h3>
        </GridItem>

        <GridItem
          bg="whiteAlpha.400"
          area={"main"}
          width={"100%"}
          height={"100%"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div className="bg-input-grey border-red-500 rounded-lg">
            <img
              className="object-cover w-full h-40 sm:h-80  sm:w-auto"
              src={mainBg}
              alt="Main Background Image"
            />

            <InputComp mainPageObj={mainPageObj} updateAllData={setMainPageObj} />

            <div className="p-4">
              <h2 className="underline uppercase">catagory</h2>
              <div className="flex gap-4 pt-4">
                {catagory.map((eachSource) => (
                  <label key={eachSource}>
                    <input
                      type="checkbox"
                      name={eachSource}
                      checked={checkedStateCatagory[eachSource] || false}
                      disabled={
                        (eachSource != checkedItem && checkedItem != "") ||
                        false
                      }
                      onChange={handleChangeCatagory}
                    />
                    {eachSource}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </GridItem>

        <GridItem bg="yellow.400" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainPage;
