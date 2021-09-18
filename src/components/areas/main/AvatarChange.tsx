import React, { FC, useReducer } from "react";
import ModalProps from "../../types/ModalProps";
import userReducer from "../../../store/user/UserReducer";
import { allowSubmit } from "../../auth/common/Helpers";
import ReactModal from "react-modal";

const AvatarChange: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const onChangeAvatarImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch({ payload: e.target.value, type: "avatarImg" });
    // if (!e.target.value) {
    //   allowSubmit(dispatch, "Avatar can't be empty", true);
    // } else {
    //   allowSubmit(dispatch, "", false);
    // }
  };

  const onClickSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClickToggle(e);
  };
  const onClickCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      className="modal-menu"
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <form>
        <div className="req-inputs">
          <div>
            <label>password confirmation</label>
            {/*<input*/}
            {/*  type="file"*/}
            {/*  placeholder="Avatar"*/}
            {/*  value={avatarImg}*/}
            {/*  onChange={onChangeAvatarImg}*/}
            {/*/>*/}
          </div>
        </div>
        <div className="reg-buttons">
          <div className="reg-btn-left">
            {/*<button*/}
            {/*  style={{ marginLeft: ".5em" }}*/}
            {/*  className="action-btn"*/}
            {/*  disabled={isSubmitDisabled}*/}
            {/*  onClick={onClickSubmit}*/}
            {/*>*/}
            {/*  Submit*/}
            {/*</button>*/}
            <button
              style={{ marginLeft: ".5em" }}
              className="cancel-btn"
              onClick={onClickCancel}
            >
              Close
            </button>
          </div>
          <span className="reg-btn-right">
            {/*<strong>{resultMsg}</strong>*/}
          </span>
        </div>
      </form>
    </ReactModal>
  );
};

export default AvatarChange;
