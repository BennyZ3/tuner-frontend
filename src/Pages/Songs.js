import axios from "axios";
import { useState, useEffect } from "react";

const Songs = () => {
  const API = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Time</th>
        </tr>
        {songs.map((song) => {
          return (
            <tr>
              <td>{song.name}</td>
              <td>{song.album}</td>
              <td>{song.artist}</td>
              <td>{song.time}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Songs;
