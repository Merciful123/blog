import "./sidebar.css";
// import peace from "../../images/pic.webp";
// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
// import axios from "axios";

const Sidebar = () => {
  // const [cats, setCat] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCat(res.data);
  //   };
  //   getCats();
  // }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME </span>
        {/* <img src={peace} alt="" /> */}
        <p>
          Hi, I am Aamir Raza, a front-end developer, learning MERN stack
          development skills.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => {
            return (
              <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
                <li className="sideBarListItem">{c.name}</li>
              </Link>
            );
          })}
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/aamir-raza-59823016a/"
            target="_blank"
          >
            <i className="sidebarIcon fa-brands fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
