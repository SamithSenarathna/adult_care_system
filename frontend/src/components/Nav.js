import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './styles.css'; 
import { getAuth, signOut } from 'firebase/auth';

function Nav() {
  const location = useLocation();
  const history = useHistory();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      history.push("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        {location.pathname !== "/login" && location.pathname !== "/register" && (
          <Link to="/dash">
            <h3 className='logo-txt'>Disease Dashboard</h3>
          </Link>
        )}
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {location.pathname !== "/login" && location.pathname !== "/register" && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
