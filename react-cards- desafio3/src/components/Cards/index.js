import React from 'react';
import Card from '../Card'

class Cards extends React.Component {
    render () {
        const startups = [
            {
                img: '',
                title: 'Courseit',
                description: 'Descripción de CourseIt'
            },
            {
                img: '',
                title: 'Endava',
                description: 'Descripción de Endava'
            }
        ]
        return (
        <div>
            {startups.map((startup, key) => {
                return (
                    <Card startup={startup} key={key} />
                )
            })}
        </div>
        );
    }
}

export default Cards;