import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render () {
        return (
        <div>
            <h1>Soy un Navbar</h1>
            <input onChange={(e) => this.handleChange(e)} type="text" />
            <p>{this.state.inputValue}</p>
        </div>
        );
    }
}

export default Navbar;