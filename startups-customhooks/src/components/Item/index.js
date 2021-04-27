import "./style.css";

function Item(props) {
  const { logo, name, description } = props.startup;

  return (
    <a href="#" className="card">
      <img src={logo} className="image" />
      <div className="title">
      <h4 className="name">{name}</h4>
      <p>{description}</p>
      </div>
    </a>
  );
}

export default Item;