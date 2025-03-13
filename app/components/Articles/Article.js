import React from "react";
import './Article.css'
import Image from "next/image";

const Article = ({ picture, title, author, content }) => {






    return (
        <div className="Article">


            <div class="ArticleImg">
                <Image className="styleImage" src={picture} />
            </div>


            <div class="ArticleContent">

                <h3>{author}</h3>
                <h1>{title}</h1>


                <p> {content}</p>
            </div>


        </div>
    )
}


export default Article