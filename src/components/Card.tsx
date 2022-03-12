import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import Gif from "../models/Gif";
import "./Card.css";
import Favorites from "./Favorites";

interface Props {
  singleGif: Gif;
}

const Card = ({ singleGif }: Props) => {
  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);

  return (
    <li className="Card">
      <p>{singleGif.title}</p>
      <Link to={`/gifs/${encodeURIComponent(singleGif.id)}/details`}>
        <img src={singleGif.images.original.url} alt={singleGif.title} />
      </Link>
      {isFav(singleGif.id) ? (
        <i
          className="fa-solid fa-heart"
          onClick={() => removeFavorite(singleGif.id)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart"
          onClick={() => addFavorite(singleGif)}
        ></i>
      )}
    </li>
  );
};

export default Card;
