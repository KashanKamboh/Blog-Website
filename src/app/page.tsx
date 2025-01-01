
import Header from "./components/Header"
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Culture } from "./components/Culture";

import FoodAndDrinks from "./components/Food";



export default function Home() {
  return (
    <>
     <Header/>
     <Hero/>
     <Culture/>
     <FoodAndDrinks/>
     <Footer/>
    </>
  );
}
