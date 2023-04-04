import { useEffect, useState } from "react";
import "./Home.scss";
import BlogList from "./BlogList";
import axios from "axios";

const Home = () => {
  /*const express = require("express");
  const app = express();
  const cors = require("cors");

  app.use(cors());
*/
  const [titleVal, setTitle] = useState("");
  const [contentVal, setContent] = useState("");
  const [imageVal, setImage] = useState(null);
  let [count, showCount] = useState(0);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const changeImage = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  // const handleChangeTitle = event =>
  // {
  //     setTitle(event.target.value);
  // }
  const [articles, showArticle] = useState(null);

  const [isPending, pending] = useState(true);

  const [data, setArticle] = useState({
    title: "",
    context: "",
    image: null,
  });

  const handleChange = (e) => {
    setArticle({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendArticle = {
      title: data.title,
      context: data.context,
      image: data.image,
    };

    console.log(sendArticle);

    axios
      .post(
        "http://localhost:8081/react_conn/database_insert.php",
        sendArticle,
        {
          headers: {
            "Content-Type": sendArticle.type,
          },
        }
      )
      .then((result) => {
        if (result.status == "Invalid") {
          alert("Invalid User");
        } else {
          console.log("Przesłano");
          console.log(sendArticle);
        }
      });
  };
  /*
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/articles")
        .then(function (res) {
          return res.json();
        })
        .then((data) => {
          showArticle(data);
          pending(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);
  });
*/
  return (
    <div className="home">
      <header>
        <h1 className="header">Admin Panel</h1>
      </header>
      <form onSubmit={submitForm}>
        <div className="main_text">
          <p className="main_title">Podaj tytuł artykułu</p>
          <input
            type="text"
            placeholder="Wpisz tytuł"
            className="title_input"
            name="title"
            onChange={handleChange}
            value={data.title}
          />
          <p className="main_content">Podaj treść artykułu</p>
          <input
            type="text"
            placeholder="Wpisz treść"
            className="content_input"
            name="context"
            onChange={handleChange}
            value={data.context}
          />
          <p className="main_content">Wybierz obraz</p>
          <input
            type="file"
            placeholder="Wybierz obraz"
            className="image_input"
            onChange={handleChange}
            value={data.image}
          />
        </div>

        <div className="main_value">
          <h2>Tytuł: </h2>
          <p className="main_value_title">{data.title}</p>
          <h2>Treść:</h2>
          <p className="main_value_content">{data.context}</p>
        </div>
        <div className="main_value_image">
          <h2>Zdjęcie:</h2>
          {data.image && (
            <img
              alt="not found"
              width={"600px"}
              className="main_value_image"
              src={URL.createObjectURL(data.image)}
            />
          )}
        </div>
        <div style={{ clear: "both" }}></div>
        <input
          type="submit"
          name="submit"
          value="OPUBLIKUJ ARTYKUŁ"
          className="btn_publish"
          disabled={submitForm.isSubmitting}
        />
      </form>
    </div>
  );
};
export default Home;
