import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Chicken Gravy
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      A basic chicken gravy includes a few simple ingredients– oil
       (or butter), flour, broth, salt and pepper. For a more flavorful
        gravy, I like to add green onions, thyme or poultry seasoning,
        a bouillon cube and even a splash of sherry.
      </p>
    </div>
  );
}
