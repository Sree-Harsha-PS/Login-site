import React, { useState } from "react";
import Logo from "./Logo";
import LogoutButton from "./logout";
import Settings from "./Settings";
import Help from "./Help";

const Header2 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="toolbar">
      <Logo />
      <div className="buttons">
        <i className="fas fa-search fa-2x search-icon"></i>
        <LogoutButton />
        <Settings />
        <Help />
        <i className="fas fa-user-circle fa-4x"></i> {/* Profile icon */}
      </div>
    </div>
  );
};

export default Header2;
