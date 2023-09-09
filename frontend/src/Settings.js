import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import MenuBar from "./components/MenuBar";


const SettingsPage = () => {
    const Title = "Settings"
    const Features = ["feature one","feature two","feature three","feature four","feature five","feature six",]
  return (
    <div className="content">
      <Header2 />
      <MenuBar />
      <div className="card-container">
        <Card title = {Title} features = {Features} />
      </div>
      <Footer />
    </div>
  );
};

export default SettingsPage;