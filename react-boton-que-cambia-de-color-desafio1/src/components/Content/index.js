import React from 'react';
import './style.css'

class Content extends React.Component {
    constructor(props) {
        super(props) ;
    
        this.state = {
          color: 'black'
        }
      }

      handleClick() {
          if(this.state.color !== 'black') {
              this.setState({
                  color: 'black'
              })
          } else {
              this.setState({
                  color: 'blue'
              })
          }
      }

    render() {
        return (
            <div>
        <p className={this.state.color}>Un texto</p>
        <button onClick={() => this.handleClick()}>Cambiar color</button>
        </div>
        )
    }
}

export default Content;