import { useLocation } from "react-router-dom";

interface resPageObjProps {
  source: string;
}
const ResPage = ({ source }: resPageObjProps) => {
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("input");

  return (
    <div>
      <p>
        {source}
        {inputValue}
      </p>
    </div>
  );
};

export default ResPage;
