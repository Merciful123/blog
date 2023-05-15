import "./topbar.css";
import { Link } from "react-router-dom";
// import peace from "../../asset/images/peace.jfif";
import { useContext } from "react";
import { Context } from "../../context/Context";
const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  // console.log(user)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <li className="topListItem ">
          <Link to={"/"} className="link">
            HOME
          </Link>
        </li>

        <li className="topListItem ">
          <Link to="write" className="link">
            WRITE
          </Link>
        </li>
        <li className="topListItem" onClick={handleLogout}>
          {user && "LOGOUT"}
        </li>
      </div>
      <div className="topCenter">
        <div className="topList "></div>
      </div>
      <div className="topRight">
        {user ? (
          user?.profilePic ? (
            <Link to="/settings">
              <div className="profile-side">
                <img
                  className="topImg"
                  src={PF + user?.profilePic ?? "Profile Pic"}
                  alt="img"
                />
                <span>{user?.username}</span>
              </div>
            </Link>
          ) : (
            <Link to="/settings">Update Profile</Link>
          )
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
    </div>
  );
};

export default Topbar;
