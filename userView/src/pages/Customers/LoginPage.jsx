import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCustomersLoginMutation } from "../../source/api/authenticationApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCredentials } from "../../source/storage/AuthSlice";

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

  const [loginUser] = useCustomersLoginMutation();

  const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const InputHandler = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };
  const formData = new FormData();
  // const notify = ({ info }) => toast(`the information `);

  const SubmitHandler = async (e) => {
    let result;
    console.log(result);
    e.preventDefault();

    // {
    //   result == undefined && toast("is Loading");
    // }

    formData.append("email", loginFormData.email);
    formData.append("password", loginFormData.password);

    result = await loginUser({ formData });
    if (result.data) {
      toast(`Login Successful `);
      dispatch(setCredentials({ ...result }));
    } else if (result.error) {
      toast(`Login Failed: ${result.error.data.detail}`);
    }
    console.log(result);

    setLoginFormData({
      ...loginFormData,
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    setLoginFormData({
      ...loginFormData,
      email: "",
      password: "",
    });
  }, []);

  return (
    <Login>
      <DetailForm onSubmit={SubmitHandler}>
        <h1>Customers Login Page</h1>
        <div>
          <Input>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              maxLength={50}
              required
              placeholder="Enter Email"
              name="email"
              value={loginFormData.email}
              onChange={InputHandler}
            />
          </Input>
          <Input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              maxLength={50}
              required
              name="password"
              placeholder="Enter Password"
              value={loginFormData.password}
              onChange={InputHandler}
            />
          </Input>
          <p>
            <span>
              <i>Don't have account yet? </i>
            </span>
            <LinkStyle to="/register"> Register</LinkStyle>
          </p>
          <ToastContainer />

          <TheButtons>
            <Button>Login</Button>
          </TheButtons>
          {/* <input
            type="button"
            id="button"
            disabled={!buttonEnable}
            value={"Submit"}
            onClick={SubmitHandler}
          /> */}
        </div>
      </DetailForm>
    </Login>
  );
};

export default LoginPage;
