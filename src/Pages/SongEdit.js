import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SongEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [song, setSong] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((error) => console.warn(error));
  }, []);

  function handleTextChange(event) {
    setSong({ ...song, [event.target.id]: event.target.value });
  }

  const updateSong = (updatedSong, id) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(() => {
        navigate(`/${id}`);
      })
      .catch((error) => console.warn(error));
  };

  function handleSubmit(event) {
    event.preventDefault();
    updateSong(song, id);
  }

  return (
    <div className="editPage">
      <h1>Edit Song</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleTextChange}
          id="name"
          value={song.name}
          placeholder="Title"
        />
        <input
          type="text"
          onChange={handleTextChange}
          id="album"
          value={song.album}
          placeholder="Album"
        />
        <input
          type="text"
          onChange={handleTextChange}
          id="artist"
          value={song.artist}
          placeholder="Artist"
        />
        <input
          type="text"
          onChange={handleTextChange}
          id="time"
          value={song.time}
          placeholder="Time"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SongEdit;
