import React from "react";
import Card from "../Card";
import "./style.scss";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount () {
    const startups = localStorage.getItem('startups');
    if (startups) {
      const parsedStartups = JSON.parse(startups);
      this.setState({
        cards: parsedStartups
       });
    }
    /*const items = {...localStorage};
    const itemsArray = Object.values(items);
    const data = []
    itemsArray.map(item => data.push(JSON.parse(item)))*/
  }

  render() {
    const { cards } = this.state;
    const { filter } = this.props;
    return (
      <div className="cardsContainer">
        {cards.map((card, key) => {
          return (
            <React.Fragment>
              {card.name.toLowerCase().includes(filter.toLowerCase()) && (
                <Link to={`/productos/${card.name.toLocaleLowerCase()}`}>
                <Card
                  key={key}
                  name={card.name}
                  img={card.logo}
                  desc={card.desc}
                />
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Cards;