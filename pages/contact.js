import React from "react";
import cheemsapp from "../assets/cheemsapp.jpg";
import Image from "next/legacy/image";
import css from "../styles/Contact.module.css";
const Contact = () => {
    return (
        <>
            <div className={css.container}>
                <h2>Contact Page</h2>
                <Image
                    src={cheemsapp}  
                    alt=""
                    width={600}
                    height={400}
                />

                <h3>Chat or Call us at :</h3>
                <h1>8707019496</h1>
                <h3>You can also mail us at</h3>
                <h1>rdxtnt007@gmail.com</h1>

            </div>
      </>
  );
};

export default Contact;
