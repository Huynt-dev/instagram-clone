import React, { useState } from "react";
import "./css/contentLeft.css";
import { Link } from "react-router-dom";
import configs from "../../configs";
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
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

export default function ItemContentLeft({
  data: {
    user,
    image,
    _id,
    totalLike,
    totalComment,
    content,
    likes,
    comments = []
  },
  likePost,
  commentPost,
  showComments,
  removeComment
}) {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [comment, setComment] = useState("");
  const [showCommentText, setShowCommentText] = useState(true);
  const postComment = (e) => {
    e.preventDefault();
    commentPost({ comment, _id });
    setComment("");
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
        <Link to={`${user.user}/profile`}>
          <p className="title">{user.user}</p>
        </Link>
      </CardHeader>
      <CardImg
        top
        width="100%"
        src={`${configs.IMAGE_URL}/${image}`}
        alt="image"
      />
      <CardBody>
        <Nav className="menu-right">
          <a
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              likePost(_id);
            }}
            href="/"
          >
            {likes.includes(userData._id) ? (
              <img src="../svg/Asset1.svg" alt="home" width="25" height="25" />
            ) : (
              <img src="../svg/Asset2.svg" alt="home" width="25" height="25" />
            )}
          </a>

          <Link className="nav-link" to="/">
            <img src="../svg/Asset7.svg" alt="home" width="25" height="25" />
          </Link>

          <Link className="nav-link" to="/">
            <img src="../svg/Asset6.svg" alt="home" width="25" height="25" />
          </Link>
        </Nav>
        <CardSubtitle tag="h6" className="mb-2">
          {totalLike} lượt thích
        </CardSubtitle>
        <CardText>{content}</CardText>

        {totalComment > 0 && showCommentText && (
          <CardText
            className="showCmt"
            onClick={() => {
              showComments(_id);
              setShowCommentText(false);
            }}
          >
            Xem tất cả {totalComment} bình luận
          </CardText>
        )}

        {comments.map((x) => {
          return (
            <CardText className="commentsStyle" key={x._id}>
              <strong>{x.user.user}:</strong> {x.content}
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="removeCmt"
                onClick={(e) => {
                  e.preventDefault();
                  removeComment(x._id, { _id });
                }}
              />
            </CardText>
          );
        })}
      </CardBody>
      <Form onSubmit={postComment}>
        <CardFooter className="content-left-bottom text-muted">
          <input
            className="form-control"
            type="text"
            placeholder="Thêm bình Luận..."
            aria-label="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button className="btnComment">Đăng</button>
        </CardFooter>
      </Form>
    </Card>
  );
}
