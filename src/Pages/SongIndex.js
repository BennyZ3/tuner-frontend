import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SongIndex = () => {
  const API = process.env.REACT_APP_API_URL;
  const [song, setSong] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <article>
      <h1>{song.name}</h1>
      <h3>{song.album}</h3>
      <h4>{song.artist}</h4>
      <h6>{song.time}</h6>
    </article>
  );
};
export default SongIndex;
