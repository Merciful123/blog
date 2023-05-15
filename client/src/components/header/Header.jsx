import "./header.css";
import peace from "../../images/wall.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Created Using MERN stack </span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={peace} alt="" />
    </div>
  );
};

export default Header;
