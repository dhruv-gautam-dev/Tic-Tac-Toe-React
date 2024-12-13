import Icon from "../Icon/Icon";
import "./Card.css";
function Card({ iconName, onPlay, player }) {
  console.log(player);
  return (
    <div className="card" onClick={onPlay}>
      <Icon name={iconName} />
    </div>
  );
}
export default Card;
