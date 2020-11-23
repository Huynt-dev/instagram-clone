import React, { useState } from "react";
import "./css/contentLeft.css";
import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardFooter,
  CardSubtitle,
  Nav,
  Form
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPaperPlane,
  faHeart
} from "@fortawesome/free-regular-svg-icons";

export default function ItemContentLeft({
  data: { user, image, _id, totalLike, content, likes },
  likePost,
  commentPost
}) {
  const users = JSON.parse(localStorage.getItem("user"));
  const [comment, setComment] = useState("");
  const postComment = (e) => {
    e.preventDefault();
    commentPost({ comment, _id });
  };

  return (
    <Card className="mb-4">
      <CardHeader className="content-left-top text-muted">
        <img
          className="avatar-left"
          alt="ok"
          src={user.avatar}
          // src={`https://1q6gt.sse.codesandbox.io/uploads/${user.avatar}`}
        />
        <p className="title">{user.user}</p>
      </CardHeader>
      <CardImg
        top
        width="100%"
        src={`https://1q6gt.sse.codesandbox.io/uploads/${image}`}
        alt="image"
      />
      <CardBody>
        <Nav className="menu-right">
          <span className="nav-link" onClick={() => likePost(_id)}>
            {likes.includes(users._id) ? (
              <FontAwesomeIcon icon={faHeart} color="red" />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </span>

          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faComment} />
          </Link>

          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </Nav>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {totalLike} lượt thích
        </CardSubtitle>
        <CardText>{content}</CardText>
      </CardBody>
      <Form onSubmit={postComment}>
        <CardFooter className="content-left-bottom text-muted">
          <input
            className="form-control"
            type="text"
            placeholder="Thêm bình Luận..."
            aria-label="text"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button>Đăng</button>
        </CardFooter>
      </Form>
    </Card>
  );
}
