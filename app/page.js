//import Head from "next/head";


import Aboutme from "@/components/aboutme";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Folio from "@/components/Folio";
//import Slider from "@/components/Slider";
import Email from "@/components/Email";
import Showcase from "@/components/Showcase";
// import { Container,Heading,FormControl,FormLabel,Input } from 'postcss'

// import Opensrc from "@/components/Opensrc";


export default function Home() {

  return (
    <div>
      <main className=" bg-black px-10 dark:bg-gray-900 md:px-20 lg:px-40">
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
          <Email/>
        </section>
      </main>
    </div>
  );
}
