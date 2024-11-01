import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainPageObjProps } from "../../utility/AllProps";
import {useContext} from 'react';
import {MyGlobalContext} from '../../App';

export interface getInputProps {
    mainPageObj: mainPageObjProps;
    updateAllData: (data: mainPageObjProps) => void;
}

const InputComp = ({ mainPageObj, updateAllData }: getInputProps) => {
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const [input, setInput] = useState(mainPageObj.inputQuery || "");
    const navigate = useNavigate();
    const sourceContext = useContext(MyGlobalContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value); 
    };

    useEffect(() => {
        if (shouldNavigate) {
            sourceContext?.setMainPageObjProps({
                inputQuery: input,
                source:[],
                tmdbId:sourceContext.mainPageObjProps.tmdbId,
                catagory:sourceContext.mainPageObjProps.catagory,
            });
            navigate(`/moviecard`);
            setShouldNavigate(false);
        }
    }, [shouldNavigate, input, mainPageObj.catagory, mainPageObj.source, navigate, sourceContext]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if(mainPageObj.catagory){
            e.preventDefault();
            const updatedMainPageObj = { ...mainPageObj, inputQuery: input };
            updateAllData(updatedMainPageObj);
            setShouldNavigate(true);
        }
        else{
            alert(import.meta.env.VITE_APP_CATEGORY_NULL_ERROR)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                    value={input}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default InputComp;
