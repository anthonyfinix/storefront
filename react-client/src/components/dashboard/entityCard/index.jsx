import "./entity-card.css";
function Widget({ entity, name }) {
  return (
    <div className="widget-wrapper">
      <div className="widget">
        <h1>{name}</h1>
        <p>{entity.length}</p>
      </div>
    </div>
  );
}

export default Widget;
