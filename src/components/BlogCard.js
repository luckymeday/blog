import React from "react";
import { Card, Badge } from "react-bootstrap";
import Moment from "react-moment";
import { useSelector } from "react-redux";

const BlogCard = ({ blog, handleClick }) => {
  // const reactions = useSelector((state) => state.blog.reactions)
  return (
    <Card onClick={() => handleClick(blog._id)}>
      <Card.Img variant="top" src="https://via.placeholder.com/160x100" />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
          {blog.content.length <= 99
            ? blog.content
            : blog.content.slice(0, 99) + "..."}
          <div className="reaction-style">
            <br></br>
            <Badge variant="light" style={{ marginRight: "7px" }}>
              Haha: {blog.reactions.haha}
            </Badge>
            <Badge variant="light" style={{ marginRight: "7px" }}>
              Sad: {blog.reactions.sad}
            </Badge>
            <Badge variant="light" style={{ marginRight: "7px" }}>
              Like: {blog.reactions.like}
            </Badge>
            <Badge variant="light" style={{ marginRight: "7px" }}>
              Love: {blog.reactions.love}
            </Badge>
            <Badge variant="light" style={{ marginRight: "7px" }}>
              Angry: {blog.reactions.angry}{" "}
            </Badge>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <span className="text-muted">
            @{blog?.user?.name} wrote <Moment fromNow>{blog.createdAt}</Moment>
          </span>
        </small>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;
