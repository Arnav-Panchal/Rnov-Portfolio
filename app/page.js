//import Head from "next/head";


import Aboutme from "@/components/aboutme";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Folio from "@/components/Folio";
//import Slider from "@/components/Slider";
import ContactForm from "@/components/Email";
import Showcase from "@/components/Showcase";
// import { Container,Heading,FormControl,FormLabel,Input } from 'postcss'

// import Opensrc from "@/components/Opensrc";


export default function Home() {

  return (
    <div className="bg-fixed-image bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../public/cube.jpg')" }}>
      <main className=" bg-black px-10 dark:bg-gray-900 md:px-20 lg:px-40" >
        <Header />
        <section className="py-20">
          <div>
            <Aboutme />
          </div>
          <Cards/>
        </section>
        <section>
          {/* <Opensrc/> */}
        </section>
        <section className="py-10">
          <Folio/>
          <Showcase/>
        </section>
        <section>
          <ContactForm/>
        </section>
      </main>
    </div>
  );
}
