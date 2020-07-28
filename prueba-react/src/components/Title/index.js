import React from 'react';

class Title extends React.Component {
    render() {
        return (
        <span>{this.props.content}</span>
        )
    }
}

export default Title;