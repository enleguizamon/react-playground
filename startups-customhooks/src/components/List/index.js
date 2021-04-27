import startups from "../../data/startups.json";
import Item from "../Item";
import "./style.css";

function List() {
  return(
    <div className="list">
    {startups.map((startup, key) => {
      return(
        <Item startup={startup} key={key} />
      )
    })}
    </div>
  );
}

export default List;