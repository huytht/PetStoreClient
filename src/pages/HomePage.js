import React from "react";
import NewPet from "../components/NewPet/NewPet";
import Home from "../components/HomePet/Home";
import ListPet from "../components/ListPet/ListPet";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>OkaKoro Store</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://38.242.132.213/" />
        <meta property="og:title" content="OkoKaro Store" />
        <meta
          property="og:description"
          content="OkaKoro - Thiên đường thú cưng"
        />
        <meta
          property="og:image"
          content="http://38.242.132.213/images/logo.png"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="200" />
      </Helmet>
      <Home />
      <NewPet />
      <ListPet />
    </>
  );
};

export default HomePage;
