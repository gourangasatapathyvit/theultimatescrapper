import { useEffect, useState } from "react";
import { combinedDataObj, mainPageObjProps } from "../../utility/AllProps";
import { useNavigate } from "react-router-dom";
import {useContext} from 'react';
import {MyGlobalContext} from '../../App';

export interface PopUpProps {
    source: string[] | undefined;
    _isModalOpen: boolean;
    toggleModal: () => void;
    data: combinedDataObj;
    contentType: string | undefined;
}

const PopUp = ({source,_isModalOpen,toggleModal,data,contentType}: PopUpProps) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(_isModalOpen);
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const [checkedCheckBoxes, setCheckedCheckboxes] = useState<string[]>([]);
    const [mainPageObjProps, setMainPageObjProps] = useState<mainPageObjProps>({
        source: [],
        catagory: "",
        inputQuery: "",
    });
    const sourceContext = useContext(MyGlobalContext);
    console.log('comp1',sourceContext?.mainPageObjProps.inputQuery);

    const onClickClose = ()=>{
        setIsModalOpen(false);
        toggleModal();
    }
    
    const handleCheckboxChange = (source: string) => {
        console.log('source',source);
        
        const isChecked = checkedCheckBoxes.includes(source);
        if (isChecked) {
            setCheckedCheckboxes(checkedCheckBoxes.filter(item => item !== source));
        } else {
            setCheckedCheckboxes([...checkedCheckBoxes, source]);
        }
    };
    
    const onClickResPage = ()=>{
        if(checkedCheckBoxes.length>0){
            const finalObj:mainPageObjProps = {
                inputQuery: contentType==="movie"?data.combinedData.movie?.title??"":data.combinedData.series?.original_name??"",
                source:checkedCheckBoxes,
                catagory:null,
            }
            sourceContext?.setMainPageObjProps(finalObj);
            localStorage.setItem('mainPageObj', JSON.stringify(finalObj));
            setShouldNavigate(true)

        }
        else{
            alert(import.meta.env.VITE_APP_SOURCE_NULL_ERROR)
        }
    }
    
    
    useEffect(() => {
        if (shouldNavigate) {
            console.log('popup', mainPageObjProps);
            navigate(`/result`);
            setShouldNavigate(false);
        }
    }, [shouldNavigate, navigate, mainPageObjProps]);
    

    useEffect(() => {
        const popModel = document.getElementById(
            "my_modal_1"
        ) as HTMLDialogElement;
        console.log(isModalOpen);
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
                toggleModal();
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (event.target === popModel) {
                setIsModalOpen(false);
                toggleModal();
            }
        };

        if (isModalOpen) {
            popModel.showModal();
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("click", handleClickOutside);
        } else {
            popModel.close();
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClickOutside);
        }
        setMainPageObjProps({
            inputQuery: contentType==="movie"?data.combinedData.movie?.title??"":data.combinedData.series?.original_name??"",
            source:checkedCheckBoxes,
            catagory:null,
        });

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClickOutside);
        };

    }, [isModalOpen, toggleModal]);
    return (
        <>
            {contentType && contentType === "movie" && (
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{`Choose Stream Source for: ${data.combinedData.movie?.title}`}</h3>
                        <div className="card-actions justify-start pt-4">
                        {source && source.map((eachSource, index) => (
                                <label key={`${eachSource}-${index}`} className="label cursor-pointer">
                                    <span className="label-text mx-2">{eachSource}</span> 
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        checked={checkedCheckBoxes.includes(eachSource)}
                                        onChange={() => handleCheckboxChange(eachSource)}
                                    />
                                </label>
                            ))}
                        </div>
                        <div className="modal-action">
                            <form method="dialog" onSubmit={(e) => { e.preventDefault(); onClickResPage();}}>
                                <button className="btn mr-4">Redirect</button>
                                <button className="btn" onClick={onClickClose}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
            ;
            {contentType && contentType === "show" && (
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{`Choose Stream Source for: ${data.combinedData.series?.original_name}`}</h3>
                        <div className="card-actions justify-start pt-4">
                            {source && source.map((eachSource, index) => (
                                    <label key={`${eachSource}-${index}`} className="label cursor-pointer">
                                        <span className="label-text mx-2">{eachSource}</span> 
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={checkedCheckBoxes.includes(eachSource)}
                                            onChange={() => handleCheckboxChange(eachSource)}
                                        />
                                    </label>
                                ))}
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn mr-4" onClick={onClickResPage}>Redirect</button>
                                <button className="btn" onClick={onClickClose}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
            ;
        </>
    );
};

export default PopUp;
