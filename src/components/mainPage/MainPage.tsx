import { Grid, GridItem, Show } from "@chakra-ui/react";
import mainBg from "../../assets/webscrape.jpg";
import InputComp from "../utilityComponents/InputComp";
import Footer from "../footer/Footer";
import { useState } from "react";

interface mainPageProps {
  sources: string[];
  catagory: string[];
  getQueryParams: (mainPageObjProps: mainPageObjProps) => void;
}

interface mainPageObjProps {
  source: string[] | null;
  catagory: string | null;
  inputQuery: string | null;
}

const MainPage = ({ sources, catagory, getQueryParams }: mainPageProps) => {
  const [mainPageObj, setMainPageObj] = useState<mainPageObjProps>({
    source: [],
    catagory: "",
    inputQuery: "",
  });

  // this is regarding readonly function
  const [checkedStateSource, setCheckedStateSource] = useState<{
    [key: string]: boolean;
  }>({});

  const [checkedStateCatagory, setcheckedStateCatagory] = useState<{
    [key: string]: boolean;
  }>({});

  const [checkedItem, setCheckedItem] = useState<string>("");

  const handleChangeSource = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedStateSource({
      ...checkedStateSource,
      [name]: checked,
    });

    let res: string[] = [];

    if (!checked) {
      res =
        mainPageObj.source?.filter(
          (item) => item !== mainPageObj.source?.find((item) => item === name)
        ) ?? [];
    } else {
      res = [...(mainPageObj.source ?? []), name];
    }

    setMainPageObj((prevState) => ({
      ...prevState,
      source: res,
    }));
  };
  const handleChangeCatagory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setcheckedStateCatagory({
      ...checkedStateCatagory,
      [name]: checked,
    });

    checked ? setCheckedItem(name) : setCheckedItem("");

    checked
      ? setMainPageObj((prevState) => ({
          ...prevState,
          catagory: name,
        }))
      : setMainPageObj((prevState) => ({
          ...prevState,
          catagory: null,
        }));
  };

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
            {/* <img className="object-cover w-full h-80" src={mainBg}></img> */}

            <img
              className="object-cover w-full h-40 sm:h-80  sm:w-auto"
              src={mainBg}
              alt="Main Background Image"
            />

            <InputComp
              getInput={(inputQuery) => {
                console.log(inputQuery);

                setMainPageObj((prevState) => ({
                  ...prevState,
                  inputQuery: inputQuery.isClicked ? inputQuery.input : "",
                }));

                getQueryParams(mainPageObj);
              }}
            />

            <div className="p-4">
              <h2 className="underline uppercase">Sources</h2>
              <div className="flex gap-4 pt-4">
                {sources.map((eachSource) => (
                  <label key={eachSource}>
                    <input
                      type="checkbox"
                      name={eachSource}
                      checked={checkedStateSource[eachSource] || false}
                      onChange={handleChangeSource}
                    />
                    {eachSource}
                  </label>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h2 className="underline uppercase">Catagory</h2>
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