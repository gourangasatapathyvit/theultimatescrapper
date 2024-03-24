import noDataFoundimg from "../../assets/bad-request.svg";

const DataNotFound = () => {
    return (
        <div className="top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center">
            <img className="h-1/2 w-1/2" src={noDataFoundimg} alt="No data found" />
        </div>
    );
};

export default DataNotFound;
