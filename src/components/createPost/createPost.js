import React, { useState } from "react";
import { Form, Row, Input, Col, Button } from "reactstrap";
import "./css/createPost.css";

export default function CreatePost({ createPost }) {
  const [postNew, setPostNew] = useState("");
  const [picture, setPicture] = useState("");

  const checkPost = async (e) => {
    e.preventDefault();

    createPost({ postNew, picture });
  };

  return (
    <div>
      <Form className="mb-3" onSubmit={checkPost}>
        <textarea
          className="postNew"
          onChange={(e) => {
            setPostNew(e.target.value);
          }}
        />
        <Row>
          <Col xl={4} lg={4} md={4} sm={4} xs={4}>
            <Input
              type="file"
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
    </div>
  );
}
