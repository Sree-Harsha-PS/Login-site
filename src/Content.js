import React from "react";
import Card from "./components/Card";
import cardsData from "./Features.json";
import Footer from "./components/Footer";
import Header from "./components/Header";


const Content = () => {
  return (
    <div className="content">
      <Header />
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} features={card.features} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Content;