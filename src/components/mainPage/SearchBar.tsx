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
    <>
      <div className="bg-input-grey border-red-500 rounded-lg">
        {/* <img className="object-cover w-full h-80" src={mainBg}></img> */}

        <img
          className="object-cover w-full h-40 sm:h-80  sm:w-auto"
          src={mainBg}
          alt="Main Background Image"
        />

        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type here"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="p-4">
          <h2 className="underline uppercase">Sources</h2>
          <div className="flex gap-4 pt-4">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black dark:text-black"
              >
                1337X
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black dark:text-black"
              >
                YTS
              </label>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h2 className="underline uppercase">Sources</h2>
          <div className="flex gap-4 pt-4">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black dark:text-black"
              >
                Movies
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black dark:text-black"
              >
                Series
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black dark:text-black"
              >
                Books
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black dark:text-black"
              >
                Songs
              </label>
            </div>
          </div>
        </div>
      </div>
    </>

    // <Box position="relative" width="fit-content" padding={padding}>
    //   <Image height="10%" src={mainBg}></Image>
    //   <Box position="absolute" bottom="0" left="0" width={"100%"}>
    //     <InputGroup size="md">
    //       <Input
    //         bg={"#D9D9D9"}
    //         textColor={"black"}
    //         borderRadius={0}
    //         type={"text"}
    //         padding={0}
    //         width={"100%"}
    //         placeholder="type here"
    //       />
    //       <InputRightElement width="4.5rem">
    //         <Button
    //           bg={"#4D94FF"}
    //           textColor={"#FFFFFF"}
    //           h="1.75rem"
    //           size="sm"
    //           onClick={handleClick}
    //         >
    //           enter
    //         </Button>
    //       </InputRightElement>
    //     </InputGroup>
    //   </Box>
    // </Box>
  );
};

export default SearchBar;
