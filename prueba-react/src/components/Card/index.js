import React from 'react';

class Card extends React. Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            like: 'No me gusta'
        }
    }

    handleClick() {
        if (this.state.like == 'Me gusta') {
         this.setState({
            like: 'No me gusta'
        })
        } else {
            this.setState({
                like: 'Me gusta'
            })
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.like}</p>
                <button onClick={() => this.handleClick()}>Darle like</button>
                <p>Título: {this.props.item.title}</p>
                <p>Precio: ${this.props.item.price}</p>
            </div>
        )
    }
}

export default Card;