import React from 'react';
import './style.css'

class Bio extends React.Component {
    render() {
        return (
        <div className="bio">{this.props.bio}</div>
        )
    }
}

export default Bio;