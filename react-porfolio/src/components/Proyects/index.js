import React from 'react';
import Proyect from '../Proyect'
import './style.css'

class Proyects extends React.Component {
    render() {
        return (
            <div>
                <p className="title">Projects</p>
                {this.props.repos.map((repo, key) => {
                    return (
                        <Proyect key={key} repo={repo} />
                    )
                })}
                
            </div>
        )
    }
}

export default Proyects;