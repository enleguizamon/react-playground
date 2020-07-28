import React from 'react'

class Autocomplete extends React.Component {
    handleChange(e) {
        this.props.handleCallback(e.target.value)
    }

    render () {
      return (
        <React.Fragment>
         <input onChange={(e) => this.handleChange(e)} type="text" />
        </React.Fragment>
      );
    }
  }
  
  export default Autocomplete;
  