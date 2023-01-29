import Head from "next/head";
import css from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";
import { client } from "../lib/client";
import Menu from "../components/Menu";
export default function Home({pizzas}) {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>CHIMTU FoodApp</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.jpeg" />
        </Head>
        {/* body */}
        <main>
          <Hero/>      
          <Services/>  
          <Menu pizzas={pizzas}/>
        </main>
      </div>
    </Layout>  
  );
}

export const getServerSideProps = async()=>{
  const query ='*[_type== "pizza"]';
  const pizzas= await client.fetch(query);
  return {
    props:{
      pizzas
    }
  }
}
