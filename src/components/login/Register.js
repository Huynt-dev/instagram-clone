import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Login } from "../login";
import "./css/Register.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowboarding,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import callApi from "../../helpers/axios";

const Register = () => {
  const [userMail, setUserMail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
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

  const register = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await callApi.post("/auth/register", {
        email: userMail,
        name: name,
        user: userName,
        password: password
      });

      // const { token, user } = res;
      // localStorage.setItem("token", token);
      // localStorage.setItem("user", JSON.stringify(user));
      // // console.log(user);
      // callApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      history.push("/login");
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <Login>
      <Form className="box-login" onSubmit={register}>
        <img className="logo" alt="ok" src="../images/instagram-logo-1.png" />
        <h2 className="titleRegister">
          Đăng ký để xem ảnh và video từ bạn bè.
        </h2>
        <Button
          className="btn"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <FontAwesomeIcon className="mr-2" icon={faFacebookSquare} size="lg" />
          Đăng nhập bằng Facebook
        </Button>

        <div className="of">
          <div className="line"></div>
          <div className="text">
            <p>Hoặc</p>
          </div>
          <div className="line"></div>
        </div>

        <FormGroup>
          <Input
            className="input-login"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Số điện thoại, tên người dùng hoặc email"
            onChange={(e) => setUserMail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            className="input-login"
            type="text"
            name="name"
            placeholder="Tên đầy đủ"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            className="input-login"
            type="text"
            name="user"
            placeholder="Tên người dùng"
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            className="input-login"
            type="password"
            name="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <p className="errorLogin">{error}</p>
        <span className="info mb-3">
          Bằng cách đăng ký, bạn đồng ý với
          <strong> Điều khoản, Chính sách dữ liệu</strong> và
          <strong> Chính sách cookie</strong> của chúng tôi.
        </span>
        <Button className="btn" color="primary" disabled={hideLogin}>
          {isLoading ? (
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" spin />
          ) : (
            "Đăng ký"
          )}
        </Button>
      </Form>

      <div className="box-login mt-3">
        <p>
          Bạn có tài khoản? <Link to="/login">Đăng nhập</Link>
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

export default Register;
