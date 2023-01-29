import Image from "next/legacy/image";
import HeroImage from "../assets/HeroImage.png";
import cheems from "../assets/cheems.png";
import cheemscart from "../assets/cheemscart.jpg";
import Cherry from "../assets/Cherry.png";
import css from "../styles/Hero.module.css";
import {UilPhone} from "@iconscout/react-unicons";
import Pizza1 from "../assets/p1.jpg";
import Link from "next/link";
import Contact from "../pages/contact";


export default function Hero(params) {
    return(
        <div className={css.container}>
               {/* left side */}
            <div className={css.left}>
               <div className={css.cherryDiv}>
                <span>More than Faster</span>
                <Image src={Cherry} alt="" width={40} height={25}/>
               </div>

               <div className={css.heroText}>
                <span>Be The Fastest</span>
                <span>In Delivering</span>
                <span>
                    Your <span style={{color:"var(--themeRed)"}}>Pizza</span>
                </span>
                </div>
             
                 <span className={css.miniText}>
                Our Mission is to fulfilling your tummy with delicious food and free Delievery
                 </span>

                <Link href="/pizza/red-chilli-pizza">
                <button className={`btn ${css.btn}`}>
                Get Started
                    </button>
                </Link>

            </div>
            

            
    

          {/* right side */}

            <div className={css.right}>

                  <div className={css.imageContainer}>
                  <Image src={cheems} alt="" layout="intrinsic" />
                  </div>


                <div className={css.ContactUs}>
                    
                    <span>Contact us</span>
                    <Link href="/contact">
                        <div>
                            <UilPhone color="green" />
                       </div>
                    </Link>
                 </div>
                   
                {/* <div className={css.imageContainer2}>
                    <Image src={cheemscart} alt="" layout="intrinsic" />
                </div> */}

                <div className={css.Pizza}>
                    <Link href="./pizza/italian-pizza">
                    <div>
                     <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic"/>
                        </div>
                    </Link>
                  <div className={css.details}>
                      <span>Italian Pizza</span>
                      <span>
                       <span style={{color:"var(--themeRed)"}}>$</span> 7.49
                      </span>
                        </div>
                    
                  </div>

            </div>



        </div>
    )
};
