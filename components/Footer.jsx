import css from '../styles/Footer.module.css';
import Image from "next/legacy/image";
import Logo from "../assets/Logo.jpeg";
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
export default function Footer(params) {
    return(
        <div className={css.container}>
            <span>All Rights Reserved</span>
            <div className={css.social}>
                <div className={css.fbk}>
                    <Image
                        src={facebook}
                        alt=""
                        width={45}
                        height={45}
                    />
                </div>
                <div className={css.insta}>
                    <Image
                        src={instagram}
                        alt=""
                        width={45}
                        height={45}
                    />
                </div>
                <div className={css.github}>
                    <Image
                        src={github}
                        alt=""
                        width={45}
                        height={45}
                    />
                </div>
            </div>
            <div className={css.logo}>
            <Image src={Logo} alt="" width={50} height={50}/>
             <span>Chimtu</span>
            </div>
        </div>
    )
};
