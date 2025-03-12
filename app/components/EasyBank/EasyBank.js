import React from "react";
import './EasyBank.css'
import Cards from "../Card/Card";


const EasyBank = () => {




    return (
        <div className="bankIcons">


            <h1>Why choose Easybank?</h1>


            <p>
                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.
            </p>

            <div class="easybanks">

                <Cards />
                <Cards />
                <Cards />
                <Cards />




            </div>


        </div>
    )



}




export default EasyBank