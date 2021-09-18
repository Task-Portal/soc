import React, { FC, useState } from "react";
import "./MainHeader.css";
import Sasha from "../../../services/images/myAvatar.png";
import Cover from "../../../services/images/Cover.jpg";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarChange from "./AvatarChange";

const MainHeader = () => {
  const [showAvatarChange, setShowAvatarChange] = useState(false);

  const onClickToggleAvatarChange = () => {
    setShowAvatarChange(!showAvatarChange);
  };

  return (
    <div className="main-header" style={{ backgroundImage: `url(${Cover})` }}>
      <span className="dot">
        <img src={Sasha} alt="Logo" className="avatar-main-header" />
        <FontAwesomeIcon
          icon={faEllipsisH}
          className="change-avatar"
          onClick={onClickToggleAvatarChange}
        />
        <AvatarChange
          isOpen={showAvatarChange}
          onClickToggle={onClickToggleAvatarChange}
        />
      </span>
    </div>
  );
};

export default MainHeader;
