import React from "react";
import PopularDestinations from "./DestinationCard";
import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import Services from "./Services";

function Home() {
    return (
      <>
        <Hero title="LIVE YOUR ADVENTURE" subtitle="Don't wait untill tommorrow, discover your 
          adventure now and feel the sensation of closeness to nature around you" 
          dates={['Jan1, 2023', 'Dec2, 2022', 'Oct24, 2021']} 
          locations={["Khumbu", "Annapurna", "Mustang"]}   imageUrl="" />
        <PopularDestinations />
        <Services />
        <GetInTouch />
      </>
    )
  }
  export default Home;