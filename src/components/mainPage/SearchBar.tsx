import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import mainBg from "../../assets/webscrape.jpg";

const SearchBar = () => {
  const padding = useBreakpointValue({ base: 4, md: 10 });

  const handleClick = () => {
    console.log("bolo lorem ki");
  };

  return (
    <Box position="relative" width="fit-content" padding={padding}>
      <Image height="10%" src={mainBg}></Image>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        padding={padding}
        width={"100%"}
      >
        <InputGroup size="md">
          <Input
            bg={"#D9D9D9"}
            textColor={"black"}
            borderRadius={0}
            type={"text"}
            placeholder="type here"
          />
          <InputRightElement width="4.5rem">
            <Button
              bg={"#4D94FF"}
              textColor={"#FFFFFF"}
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              enter
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default SearchBar;
