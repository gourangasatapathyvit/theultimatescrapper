import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import SearchBar from "./components/mainPage/SearchBar";
import Footer from "./components/footer/Footer";

function App() {
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
        // gridTemplateRows={"50px 1fr 30px"}
        // gridTemplateColumns={"150px 1fr"}
        // gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
        height={"100vh"}
      >
        <Show above="lg"></Show>

        <Show below="lg"></Show>

        <GridItem
          bg="yellow.400"
          area={"nav"}
          height={"0"}
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
          padding={"4"}
        >
          <SearchBar></SearchBar>
        </GridItem>

        <GridItem area={"footer"} className="relative">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
