// import "./App.css";
// Dependencies
import { Route, Routes } from "react-router-dom";

// Pages/Components
import NavBar from "./Components/NavBar";
import Songs from "./Pages/Songs";
import SongsIndex from "./Pages/SongIndex";
import SongEdit from "./Pages/SongEdit";
import NewSong from "./Pages/NewSong";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <h1>Does this Renders</h1>
        <Routes>
          <Route exact path="/" element={<Songs />} />
          <Route path="/:id" element={<SongsIndex />} />
          <Route path="/:id/edit" element={<SongEdit />} />
          <Route path="/new" element={<NewSong />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
