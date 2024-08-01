import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Features from "./components/Features";
import Review from "./components/Review";
import Faq from "./components/Faq";

function App() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Explore />
      <Features />
      <Review />
      <Faq/>
    </main>
  );
}

export default App;
