import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
    errorMessage: {
      nameError: "",
      passwordError: "",
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation = /^[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
        userId.password
      );
      console.log(userValidation);
      console.log(passwordValidation);
      state.user = userId;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
        state.errorMessage.nameError = !userValidation
          ? "UserName is not valid"
          : "";
        state.errorMessage.passwordError = !passwordValidation
          ? "Password is not valid"
          : "";
        // state.errorMessage = !userValidation
        //   ? "username not valid"
        //   : "password not valid";
      } else {
        state.user.authUser = true;
        state.errorMessage = "";
        const saveState = JSON.stringify(userId);
        sessionStorage.setItem("authUser", saveState);
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
