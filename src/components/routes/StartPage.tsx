import React, { FC, useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Registration from "../auth/Registration";
import Login from "../auth/Login";
import { useSelector } from "react-redux";
import { AppState } from "../../store/AppState";
import userReducer, { initStore } from "../../store/user/UserReducer";
import { useHistory } from "react-router-dom";

const StartPage: FC = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const user = useSelector((state: AppState) => state.user);
  console.log(user);
  const [{ userName }] = useReducer(userReducer, initStore);

  const history = useHistory();

  if (userName) {
    console.log("User!!!!!!!!!!!!!!!", userName);
    history.push("/home");
  }

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const onClickToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="startPage">
      <div>
        <strong>Socialize</strong>
      </div>
      To use our service please:
      <div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faRegistered} />
            <span className="menu-name" onClick={onClickToggleRegister}>
              register
            </span>
            <Registration
              isOpen={showRegister}
              onClickToggle={onClickToggleRegister}
            />
          </li>
          {/*<li>*/}
          {/*  <FontAwesomeIcon icon={faSignInAlt} />*/}
          {/*  <span onClick={onClickToggleLogin} className="menu-name">*/}
          {/*    login*/}
          {/*  </span>*/}
          {/*  <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  );
};

export default StartPage;
