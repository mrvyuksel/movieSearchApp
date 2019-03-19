import axios from "axios";

const apiurl = "http://www.omdbapi.com/?apikey=d607e972&";

export const getAllList = searchParams => {
  const params = searchParams || "superman";
  return axios.get(apiurl + `s=${params}`).then(res => {
    return res.data;
  });
};

export const getMovieDetails = id => {
  return axios.get(apiurl + `i=${id}`).then(res => {
    return res.data;
  });
};

export const getNewPageOfList = (requestValue, page) => {
  return axios.get(apiurl + `s=${requestValue}&page=${page}`).then(res => {
    return res.data;
  });
};
