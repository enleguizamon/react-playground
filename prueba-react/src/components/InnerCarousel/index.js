import React from 'react';
import Card from '../Card'

class InnerCarousel extends React.Component {
    constructor(props) {
        super(props);
        console.log('Soy el InnerCarousel')
    }
    render() {
        const { items } = this.props
        return (
            <div>
                {this.props.items.map((value, key) => {
                    return (
                        <Card key={key} item={value} />
                    )
                })}
            </div>
        )
    }
}

export default InnerCarousel;