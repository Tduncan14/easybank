import React from "react";
import './Card.css';
import Image from "next/image";


const Cards = ({ image, header, para }) => {





    return (
        <div className="card">

            <div className="topOfCard">
                <Image src={image} height={80} width={80} alt="icons" />
            </div>

            <div className="cardContent">

                <h1>{header}</h1>

                <p>{para}</p>

            </div>


        </div>
    )


}


export default Cards