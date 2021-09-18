export interface User {
  userName: string;
  password: string;
  email: string;
  passwordConfirm: string;
  resultMsg: string;
  isSubmitDisabled: boolean;
}

export const initStore = {
  userName: "",
  password: "",
  email: "",
  passwordConfirm: "",
  resultMsg: "",
  isSubmitDisabled: true,
};

const userReducer = (state: any, action: any) => {
  console.log("Action userReducer", action);
  console.log("State", state);
  switch (action.type) {
    case "userName":
      return { ...state, userName: action.payload };
    case "avatarImg":
      return { ...state, avatarImg: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "passwordConfirm":
      return { ...state, passwordConfirm: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "resultMsg":
      return { ...state, resultMsg: action.payload };
    case "isSubmitDisabled":
      return { ...state, isSubmitDisabled: action.payload };
    default:
      return { ...state, resultMsg: "A failure has occurred!!!." };
  }
};
export default userReducer;
