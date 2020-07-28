import React from 'react';
import './style.css'

class Avatar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <img className="avatar-image" src={this.props.avatar} />
            </React.Fragment>
        )
    }
}

export default Avatar;