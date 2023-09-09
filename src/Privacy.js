import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";


const Privacy = () => {
    const Title = "Privacy Policy"
    const Features = ["feature one","feature two","feature three","feature four","feature five","feature six",]
  return (
    <div className="content">
      <Header />
      <div className="card-container">
        <Card title = {Title} features = {Features} />
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;