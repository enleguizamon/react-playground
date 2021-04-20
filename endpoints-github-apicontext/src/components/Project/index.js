import "./style.css";

function Project(props) {
  const { name, html_url } = props.data;
  return (
    <div className="project">
<li className="name">{name}</li>
<a href={html_url}>
<button className="button">Ir al repo</button>
</a>
</div>
  )
    
}

export default Project;
