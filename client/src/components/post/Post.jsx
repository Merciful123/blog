import "./post.css";
// import peace from "../../asset/images/2.jpg";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const PF = "https://mern-blog-6hv6.onrender.com/images/";
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => {
              return <span className="postCat">{c.name}</span>;
            })}
          </div>
          <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </Link>
    </div>
  );
};

export default Post;
