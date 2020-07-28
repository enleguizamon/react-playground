import React from 'react';
import './style.css'

class Navbar extends React.Component {
    render() {
        return (
        <div className="navbar">{this.props.name}</div>
        )
    }
}

export default Navbar;