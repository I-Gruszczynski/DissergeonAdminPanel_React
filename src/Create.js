import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState();
  const [context, setBody] = useState();

  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, context };
    setLoading(true);
    fetch("http://localhost:8000/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setLoading(false);
      navigate("/tutorial", { replace: true });
    });
  };

  return (
    <div className="create_blog">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          required
          value={context}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {!isLoading && <button>Add blog</button>}
        {isLoading && <button disabled>Adding blog..</button>}
      </form>
      <div className="result">
        <p>Title</p>
        <p>{title}</p>
        <hr />.<p>Body</p>
        <p>{context}</p>
      </div>
    </div>
  );
};

export default Create;
