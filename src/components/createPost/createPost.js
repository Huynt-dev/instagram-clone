import React, { useState } from "react";
import { Form, Row, Input, Col, Button } from "reactstrap";
import "./css/createPost.css";

export default function CreatePost({ createPost }) {
  const [postNew, setPostNew] = useState("");
  const [picture, setPicture] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const uploadPost = (e) => {
    e.preventDefault();

    createPost({ postNew, picture });
    setPostNew("");
    setPicture("");
  };

  return (
    <Form className="mb-3" onSubmit={uploadPost}>
      <textarea
        className="postNew"
        placeholder={`${user.user} ơi, bạn đang nghĩ gì thế?`}
        onChange={(e) => {
          setPostNew(e.target.value);
        }}
        value={postNew}
      />
      <Row>
        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
          <label htmlFor="ok">Choose a file</label>
          <Input
            type="file"
            id="ok"
            className="inputUpdate"
            onChange={(e) => {
              setPicture(e.target.files[0]);
            }}
          />
        </Col>
        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
          <Button color="primary">Đăng bài</Button>
        </Col>
      </Row>
    </Form>
  );
}
