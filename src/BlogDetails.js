import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetalis = () => {
  const [article, showArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "http://localhost:8081/phpmyadmin/index.php?route=/sql&pos=0&db=articlesystem&table=acticles"
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        showArticle(data);
      });
  });

  const { id } = useParams();

  const deleteClick = () => {
    fetch(
      "http://localhost:8081/phpmyadmin/index.php?route=/sql&pos=0&db=articlesystem&table=acticles",
      {
        method: "DELETE",
      }
    ).then(() => {
      navigate("/tutorial");
    });
  };
  return (
    <div className="blogDetails">
      <h1>Blog Details - {id}</h1>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.context}</p>
          <button onClick={deleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetalis;
