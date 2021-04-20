import "./style.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Bio() {
  const data = useContext(UserContext);

  return (
    <>
      <img src={data.info.avatar_url} className="image" />
      <p className="description">{data.info.bio}</p>
    </>
  );
}

export default Bio;
