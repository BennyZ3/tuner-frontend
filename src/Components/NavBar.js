import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/new">
        <button>New Song</button>
      </Link>
    </div>
  );
};

export default NavBar;
