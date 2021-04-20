import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const [github, setGithub] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchData("https://api.github.com/users/enleguizamon", setGithub);
    fetchData("https://api.github.com/users/enleguizamon/repos", setRepos);
  }, []);

  async function fetchData(url, setter) {
    const getData = await axios.get(url);
    setter(getData.data);
  }

  const contextData = {
    info: github,
    repos: repos,
  };

  return (
    <UserProvider value={contextData}>
      <div className="App">
        <Navbar />
        <Bio />
        <Projects />
      </div>
    </UserProvider>
  );
}

export default App;
