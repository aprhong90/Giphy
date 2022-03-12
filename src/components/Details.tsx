import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gif from "../models/Gif";
import { getGifById } from "../services(functions that will be used))/GiphyService";
import Card from "./Card";
import "./Details.css";

const Details = () => {
  const [gif, setGif] = useState<Gif>();
  const id: string | undefined = useParams().id;

  useEffect(() => {
    getGifById(id!) //
      .then((response) => {
        //set the state in this file to be the GIF
        setGif(response.data);
        console.log(response.data);
      });
  }, [id]);

  return (
    <div className="Details">
      {gif ? <Card singleGif={gif} /> : <p>Loading</p>}
    </div>
  );
};

export default Details;

//id! It will be not undefined none null assertion operaror?
