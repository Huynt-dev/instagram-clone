import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Login } from "../login";
import "./css/FormLogin.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowboarding } from "@fortawesome/free-solid-svg-icons";
import callApi from "../../helpers/axios";

const FormLogin = () => {
  const [userMail, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hideLogin, setHideLogin] = useState(true);
  const [error, setError] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (userMail.length >= 6 && password.length >= 6) {
      setHideLogin(false);
    } else {
      setHideLogin(true);
    }
  }, [userMail, password]);

  const checkLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const res = await callApi.post("/users/login", {
        email: userMail,
        password: password
      });

      const { token, user } = res;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      callApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      history.push("/");
    } catch (error) {
      setIsLoading(false);
      setError(
        "Rất tiếc, mật khẩu của bạn không đúng. Vui lòng kiểm tra lại mật khẩu."
      );
    }
  };

  return (
    <Login>
      <Form className="box-login" onSubmit={checkLogin}>
        <img className="logo" alt="ok" src="../images/instagram-logo-1.png" />
        <FormGroup>
          <Input
            className="input-login"
            type="email"
            name="userName"
            id="exampleEmail"
            placeholder="Số điện thoại, tên người dùng hoặc email"
            onChange={(e) => setUser(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="input-login"
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button className="btn mt-2" color="primary" disabled={hideLogin}>
          {isLoading ? (
            <FontAwesomeIcon icon={faSnowboarding} size="lg" spin />
          ) : (
            "Đăng nhập"
          )}
        </Button>

        <div className="of">
          <div className="line"></div>
          <div className="text">
            <p>Hoặc</p>
          </div>
          <div className="line"></div>
        </div>
        <div className="login-facebook">
          <img
            src="https://brandslogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png"
            width="30px"
            alt="ok"
          />
          <span>Đăng nhập bằng Facebook</span>
        </div>
        <p className="errorLogin">{error}</p>
        <a href="/">Quên mật khẩu?</a>
      </Form>

      <div className="box-login mt-3">
        <p>
          Bạn không có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
      </div>
      <div className="box-dowload mt-3">
        <p className="mb-3">Tải ứng dụng.</p>
        <div>
          <img className="img-download" alt="ok" src="../images/ios.png" />
          <img className="img-download" alt="ok" src="../images/android.png" />
        </div>
      </div>
    </Login>
  );
};

export default FormLogin;
