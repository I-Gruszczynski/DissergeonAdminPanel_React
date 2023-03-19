import { useEffect, useState } from 'react';
import './Home.scss';
import BlogList from "./BlogList";

const Home = () => {

    const [titleVal,setTitle] = useState("");
    const [contentVal,setContent] = useState("");
    const [imageVal,setImage] = useState(null);
    let [count,showCount] = useState(0);

    const changeTitle = event =>
    {
        setTitle(event.target.value);
    }

    const changeContent = event =>
    {
        setContent(event.target.value);
    }

    const changeImage = event =>
    {
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
    }
    
    // const handleChangeTitle = event =>
    // {
    //     setTitle(event.target.value);
    // }
    const [articles,showArticle] = useState(null); 

    const [isPending, pending] = useState(true);

        useEffect(() =>{
            setTimeout(()=>{
                fetch("http://localhost:8000/articles")
                .then (function(res){
                    return res.json();
                })
                .then (data =>{
                    console.log(data);
                    showArticle(data);
                    pending(false);
                })
                .catch(err => {
                    console.log(err.message);
                })
            }, 2000);
        });
    
    
    return (  
        <div className="home">
            <header>
                <h1 className="header">Admin Panel</h1>
            </header>
            <div className="main_text">
                <p className='main_title'>Podaj tytuł artykułu</p>
                <input type="text" placeholder="Wpisz tytuł" className="title_input" value={titleVal} onChange={changeTitle}/>
                <p className='main_content'>Podaj treść artykułu</p>
                <input type="text" placeholder="Wpisz treść" className="content_input" value={contentVal} onChange={changeContent}/>
                <p className='main_content'>Wybierz obraz</p>
                <input type="file" placeholder="Wpisz treść" className="image_input" onChange={changeImage}/>
            </div>
            <div className="main_value">
            <h2>Tytuł: </h2>
            <p className="main_value_title">{titleVal}</p>
            <h2>Treść:</h2>
            <p className="main_value_content">{contentVal}</p>
            </div>
            <div className="main_value_image">
                <h2>Zdjęcie:</h2>
                {
                imageVal &&(
                <img alt="not found" width={"600px"} className="main_value_image" src={URL.createObjectURL(imageVal)}/>
                )}
            </div>
            <div style={{clear:"both"}}></div>
            <button className='btn_publish'>OPUBLIKUJ ARTYKUŁ</button>
            <button onClick={() => showCount(count+1)}>Licz klikniecia</button>
            <p>Ilosc klikniec {count}</p>
            <div>
                {isPending && <div>Loading...</div>}
                {articles && <BlogList blogs={articles} title="All Blogs!"/>}
            </div>
        </div>
        
    );
}
export default Home;
