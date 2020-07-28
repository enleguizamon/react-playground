import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Avatar from './components/Avatar'
import Bio from './components/Bio'
import Proyects from './components/Proyects'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      avatar: '',
      bio: '',
      repos: []
    }
  }

  async componentDidMount() {

    const githubData = await fetch`https://api.github.com/users/enleguizamon`;
    const githubDataJson = await githubData.json();

    const reposData = await fetch (`https://api.github.com/users/enleguizamon/repos`);
    const reposDataJson = await reposData.json();

    this.setState({
      name: githubDataJson.name,
      avatar: githubDataJson.avatar_url,
      bio: githubDataJson.bio,
      repos: reposDataJson
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar name={this.state.name} />
        <Avatar avatar={this.state.avatar} />
        <Bio bio={this.state.bio} />
        <Proyects repos={this.state.repos}  />
      </React.Fragment>
    )
  }

}

export default App;
