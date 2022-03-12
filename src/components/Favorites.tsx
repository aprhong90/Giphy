import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import Card from "./Card";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      {favorites.map((favorite) => (
        <Card singleGif={favorite} key={favorite.id} />
      ))}
    </div>
  );
};
//everythind the favorite is singleGif
export default Favorites;
