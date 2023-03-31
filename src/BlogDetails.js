import { useParams } from "react-router-dom";
import BlogList from "./BlogList";
import { useEffect, useState } from "react";

const BlogDetalis = () => {
  const [article, showArticle] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/articles/" + id)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        showArticle(data);
      });
  });

  const { id } = useParams();
  return (
    <div className="blogDetails">
      <h1>Blog Details - {id}</h1>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.context}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetalis;
