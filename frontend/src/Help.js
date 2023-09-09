import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";


const HelpPage = () => {
    const Title = "Help"
    const Features = ["feature one","feature two","feature three","feature four","feature five","feature six",]
  return (
    <div className="content">
      <Header2 />
      <div className="card-container">
        <Card title = {Title} features = {Features} />
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;