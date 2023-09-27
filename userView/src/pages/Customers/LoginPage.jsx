import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useLoginUserMutation } from "../features/Post/PostApi";
// import { setCredentials } from "../features/auth/authSlice";

import {
  Login,
  Input,
  TheButtons,
  Button,
  DetailForm,
  LinkStyle,
} from "./AuthenticationStyle";

const LoginPage = () => {
  //   const userInfo = useSelector((state) =>
  //     state.auth.userInfo ? state.auth.userInfo : ""
  //   );
  //   const { data: userData } = userInfo;

  //   const [loginUser] = useLoginUserMutation();

  //   const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    // e.preventDefault();
    // const userData = await loginUser({ email, password });
    // // console.log(userData);
    // dispatch(setCredentials({ ...userData }));
    // setEmail("");
    // setPassword("");
    // navigate("/dashboard");
  };

  //   useEffect(() => {
  //     userData && navigate("/dashboard");
  //   }, [userData, navigate]);

  return (
    <Login>
      <DetailForm onSubmit={SubmitHandler}>
        <h1>Login Page</h1>
        <div>
          <Input>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              maxLength={50}
              required
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handlerUsernameInput}
            />
          </Input>
          <Input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              maxLength={50}
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onChange={handlerPasswordInput}
            />
          </Input>
          <p>
            <span>
              <i>Don't have account yet? </i>
            </span>
            <LinkStyle to="/register"> Register</LinkStyle>
          </p>

          <TheButtons>
            <Button>Login</Button>
          </TheButtons>
        </div>
      </DetailForm>
    </Login>
  );
};

export default LoginPage;
