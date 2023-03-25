import { useEffect, useState } from 'react';
import './Home.scss';
import BlogList from "./BlogList";

const Tutorial = () => {

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
                <h1 className="header">Tutorial</h1>
            </header>
            <div className="Blogs">
                {isPending && <div>Loading...</div>}
                {articles && <BlogList blogs={articles} title="All Blogs!"/>}
            </div>
        </div>
     );
}
 
export default Tutorial;