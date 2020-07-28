import React from 'react';
import './style.scss';
import startups from '../../data/startups.json';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          img: "",
          name: "",
          desc: ""
        };
      }
    
      componentDidMount() {
        const filtered = startups.filter((startup) => {
            console.log(2,startup.id,this.props.match.params.productId)
          return startup.id == this.props.match.params.productId;
        });
    
        this.setState({
          name: filtered[0].name,
          img: filtered[0].logo,
          desc: filtered[0].desc
        });
      }

    render() {
        console.log(startups)
        console.log(this.props)

        const { img, name, desc } = this.state;
        return (
            <React.Fragment>
                <div className="top">

                <p className="name">{name}</p>
                </div>
                <div className="img-wrapper">
                    <img className="img" src={img} />
                </div>
                <p className="descripcion">Mi descripcion es {desc}</p>
                {/*{Startups.map((postDetail, index)=>{
                    return <h1>{postDetail.id}</h1>
                })}*/}
                {/*Mi id es {this.props.match.params.productId}*/}
            </React.Fragment>
        );
    }
}
export default ProductPage;
