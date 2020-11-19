import React, { useEffect } from "react";
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
  Nav
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPaperPlane,
  faHeart
} from "@fortawesome/free-regular-svg-icons";

export default function ItemContentLeft({
  data: { userPost, image, _id, totalLike, content, likes },
  likePost
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Card className="mb-4">
      <CardHeader className="content-left-top text-muted">
        <img
          className="avatar-left"
          alt="ok"
          src="../images/instagram-logo-1.png"
        />
        <p className="title">{userPost}</p>
      </CardHeader>
      <CardImg top width="100%" src={image} alt="image" />
      <CardBody>
        <Nav className="menu-right">
          <span className="nav-link" onClick={() => likePost(_id)}>
            {likes.includes(user._id) ? (
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

      <CardFooter className="content-left-bottom text-muted">
        <input
          className="form-control"
          type="text"
          placeholder="Bình Luận"
          aria-label="text"
        />
        <a href="#">Đăng</a>
      </CardFooter>
    </Card>
  );
}
