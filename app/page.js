
import Header from "./components/Header/Header";
import './globals.css'
import Image from "next/image";
import mockup from './images/image-mockups.png'
import EasyBank from "./components/EasyBank/EasyBank";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div class="contentTop">

        <div className="leftContent paddL">

          <h1 className="contentHo">Next generation   digital banking </h1>


          <p>
            Take your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.
          </p>


          <button>
            Request Invite
          </button>



        </div>

        <div className="rightContent mockup">


          <Image className="positionP" src={mockup} height={900} width={900} />


        </div>

      </div>


      <EasyBank />
    </div>
  );
}
