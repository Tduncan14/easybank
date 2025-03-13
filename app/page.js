
import Header from "./components/Header/Header";
import './globals.css'
import Image from "next/image";
import mockup from './images/image-mockups.png'
import EasyBank from "./components/EasyBank/EasyBank";
import Article from "./components/Articles/Article";
import currencyOne from './images/image-currency.jpg';
import restaurantTwo from './images/image-restaurant.jpg';
import planeThree from './images/image-plane.jpg';
import confettiFour from './images/image-confetti.jpg';
import Footer from "./components/Footer/Footer";


const para = '  The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single '
const para2 = '  Our simple budgeting feature allows you to separate out your spending and set  realistic limits each month. That means you '
const para3 = ' We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you '
const para4 = '  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site'


const titlePara = 'Receive money in any currency with no fees'
const titlePara2 = ' Treat yourself without worrying about money'
const titlePara3 = 'Take your Easybank card wherever you go'
const titlePara4 = 'Our invite-only Beta accounts are now live!'

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="contentTop">

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

      {/*Article  */}

      <div className="articleSection paddL">

        <h1>Lastest Articles </h1>



        <div className="articleGallery">

          <Article picture={currencyOne} title={titlePara} author={' By Claire Robinson'} content={para} />


          <Article picture={restaurantTwo} title={titlePara2} author={'By Wilson Hutton'} content={para2} />

          <Article picture={planeThree} title={titlePara3} author={'By Wilson Hutton'} content={para3} />

          <Article picture={confettiFour} author={' By Claire Robinson'} content={para4} title={titlePara4} />

        </div>

      </div>


      {/* Footer  */}

      <Footer />
    </div>
  );
}
