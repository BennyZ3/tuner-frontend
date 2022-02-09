import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/new">
        <button>New</button>
      </Link>
    </div>
  );
};

export default NavBar;
