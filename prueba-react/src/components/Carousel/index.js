import React from 'react';
import './style.css';
import Title from '../Title';
import InnerCarousel from '../InnerCarousel';

class Carousel extends React.Component {
    render() {
        return (
            <div>
                <Title content={this.props.title}/>
                <InnerCarousel items={this.props.items}/>
            </ div>
        )
    }
}

export default Carousel;