import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Gif from "../models/Gif";
import {
  getGifsByTerm,
  getTrendingGifs,
} from "../services(functions that will be used))/GiphyService";
import Card from "./Card";
import "./Gallery.css";
import SearchBar from "./SearchBar";

const Gallery = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term");

  // we don't want the api called more than we want.
  // the dependency of array.
  //response is array
  useEffect(() => {
    if (searchTerm) {
      //get gifs by search term
      getGifsByTerm(searchTerm).then((response) => {
        setGifs(response.data);
      });
    } else {
      //if there is no search term
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    }
  }, [searchTerm]);

  //only if [searchTerm] changes it will be called

  return (
    <div className="Gallery">
      <SearchBar />
      <ul>
        {gifs.map((gif) => (
          <Card key={gif.id} singleGif={gif} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
