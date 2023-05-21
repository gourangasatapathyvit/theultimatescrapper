import { mainPageObjProps } from "../mainPage/MainPage";
interface resPageObjProps {
  source: string;
  catagory: string;
}
const ResPage = ({ source, catagory }: resPageObjProps) => {
  return (
    <div>
      <p>
        {/* {source} */}
        {catagory}
      </p>
    </div>
  );
};

export default ResPage;
