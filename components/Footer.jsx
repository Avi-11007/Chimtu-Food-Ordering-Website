import css from '../styles/Footer.module.css';
import Image from 'next/image';
import Logo from "../assets/Logo.jpeg";
import {UilFacebook,UilGithub,UilInstagram} from '@iconscout/react-unicons'
export default function Footer(params) {
    return(
        <div className={css.container}>
            <span>All Rights Reserved</span>
            <div className={css.social}>
                <UilFacebook size={45}/>
                <UilGithub size={45}/>
                <UilInstagram size={45}/>
            </div>
            <div className={css.logo}>
            <Image src={Logo} alt="" width={50} height={50}/>
             <span>Chimtu</span>
            </div>
        </div>
    )
};
