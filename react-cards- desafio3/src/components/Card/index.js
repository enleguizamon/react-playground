import React from 'react';

class Card extends React.Component {
    render () {
        const {img, title, description} = this.props.startup //desestructuración del componente.
        return (
        <div>
            <img src={img} />
        <p>{title}</p>
        <p>{description}</p>
        </div>
        );
    }
}

export default Card;