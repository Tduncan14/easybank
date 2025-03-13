import React from "react";
import './EasyBank.css'
import Cards from "../Card/Card";
import '../../globals.css'
import iconApiLast from '../../images/icon-api.svg';
import iconBudgetSec from '../../images/icon-budgeting.svg';
import iconBoardingThird from '../../images/icon-onboarding.svg';
import iconOnlineFirst from '../../images/icon-online.svg';

const EasyBank = () => {




    return (
        <div className="bankIcons paddL">


            <h1 className="easyOne">Why choose Easybank?</h1>


            <p className="paraBank">
                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.
            </p>

            <div className="easybanks ">

                <Cards image={iconOnlineFirst} header='  Online Banking' para=' Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world' />
                <Cards image={iconBudgetSec} header=' Simple Budgeting' para='  See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.' />
                <Cards image={iconBoardingThird} header=' Fast Onboarding' para='We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away' />
                <Cards image={iconApiLast} header='  Open API' para=' Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.' />




            </div>


        </div>
    )



}




export default EasyBank