import '../technology/technology.css'

export const Tecnology = (props) => {
  return (
    <div className="tecnology">
      <img src={props.img} alt={props.alt} />
      <h4>{props.name}</h4>      
    </div>
  );
};
