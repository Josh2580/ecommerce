import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

// const accessToken = localStorage.getItem("accessToken")
//   ? JSON.parse(localStorage.getItem("accessToken"))
//   : "";

const accessToken =
  localStorage.getItem("accessToken") === undefined
    ? console.log("Its Undefined")
    : JSON.parse(localStorage.getItem("accessToken"));

// console.log(accessToken);

const initialState = {
  userState: userInfoFromStorage,
  accessToken: accessToken,
};

// console.log(initialState.userInfo);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // localStorage.setItem("userInfo", JSON.stringify(action.payload));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.data.access)
      );
      // console.log(action.payload);

      // state.userInfo = action.payload;
      state.accessToken = action.payload.data ? action.payload.data.access : [];
    },

    userState: (state, action) => {
      localStorage.setItem("userState", JSON.stringify(action.payload));
      localStorage.setItem("userState", JSON.stringify(action.payload));
      console.log(action.payload);

      // state.userInfo = action.payload;
      state.userState = action.payload || [];
    },

    logout: (state) => {
      state.userInfo = localStorage.removeItem("userInfo");
      state.userInfo = [];
      state.token = localStorage.removeItem("accessToken");
      state.token = [];
    },
  },
});

export const { login, userState, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectUserInfo = (state) => state.auth.userInfo;
