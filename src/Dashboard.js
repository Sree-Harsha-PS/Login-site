import React from "react";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import useAuth from "./components/useAuth";
import MenuBar from "./components/MenuBar";

const Dashboard = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // Optional: Show a loading state or return null while checking authentication
    return null;
  }

  return (
    <div>
    <Header2 />
    <div className="d-content">
      <div className="dashboard">
        <MenuBar />
        <div className="dashboard-content">
          <h1>Welcome to the GTM4Health!</h1>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Dashboard;
