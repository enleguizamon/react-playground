import "./style.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Project from "../Project";

function Projects() {
  const { repos } = useContext(UserContext);

  return (
    <>
      <h3 className="projects">Projects</h3>
      <ul className="repos">
        {repos.map((repo, key) => {
          return <Project data={repo} key={key} />;
        })}
      </ul>
    </>
  );
}

export default Projects;
