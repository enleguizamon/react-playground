import React from 'react';
import './style.css'

class Proyect extends React.Component {
    render() {
        return (
            <div>
                <p className="repo-name">{this.props.repo.name}</p>
            </div>
        )
    }
}

export default Proyect;