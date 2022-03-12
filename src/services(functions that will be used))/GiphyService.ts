//axios is dependency calls apis??

import axios from "axios";
import GiphyResponse from "../models/GiphyResponse";
import SingleGif from "../models/SingleGif";

const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getTrendingGifs = (): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifsByTerm = (searchString: string): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: key, q: searchString },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifById = (id: string): Promise<SingleGif> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//<GiphyResponse> is type of Promise(object).

//axios is an interface
//dont type actual api key here.
//|| ""; prevent the wrong key messes up the whole file.
//.then(); this is how we handle promise something in async
//response.data it doesn't relavant to the GiphyResponse!!! it just happened to have same name with the data property. but you must use response.data to get data?!
//here data is from the axios!!!
