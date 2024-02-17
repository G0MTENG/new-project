import { Link } from "react-router-dom";
import noImg from "./img/no_img.png";

function Card(props) {
  const url = `/detail/${props.idx}`;

  return (
    <div className="col-md-4">
      <Link to={url} style={{ textDecoration: "none", color: "black" }}>
        <img src={props.src ?? noImg} alt={`맥주${props.idx}`} width="80%" />
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <p>{props.price}</p>
      </Link>
    </div>
  );
}

export default Card;
