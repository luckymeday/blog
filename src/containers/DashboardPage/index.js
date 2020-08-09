import React, { useEffect, useState } from "react";
import PublicNavBar from "../PublicNavbar";
import { blogActions } from "../../redux/actions";
import {
  Row,
  Image,
  Card,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import BlogCard from "../../components/BlogCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PaginationBar from "../../components/Pagination";
const PAGE_LIMIT = 5;
const DashboardPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const blogs = useSelector((state) => state.blog.selfBlogs);
  const loading = useSelector((state) => state.blog.loading);

  const handleEditProfile = () => {
    alert("edit profile");
    return;
  };
  const handleClickOnBlog = (id) => {
    history.push(`/blogs/${id}`);
  };
  const [totalPageNum, setTotalPageNum] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  //pag

  useEffect(() => {
    dispatch(blogActions.blogsRequest());
    // setTotalPageNum(6);
  }, [dispatch]);

  useEffect(() => {
    dispatch(blogActions.getSelfBlog());
  }, [pageNum]);
  //pab

  return (
    <>
      <PublicNavBar />
      <Row className="body text-center justify-content-center ">
        <div className="col-2">
          <h1>My Profile</h1>
          <Card style={{ width: "18rem" }}>
            <Image
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1d334cf-9b96-4eb1-bc06-15f2997ac6b2/d89j4d2-eb772c02-e3b4-4ff4-b919-38f3e54f247e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjFkMzM0Y2YtOWI5Ni00ZWIxLWJjMDYtMTVmMjk5N2FjNmIyXC9kODlqNGQyLWViNzcyYzAyLWUzYjQtNGZmNC1iOTE5LTM4ZjNlNTRmMjQ3ZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wY2OMHhmJgcaC4RahhfvL7WszzfW2dKiyVt7Xnvxho0"
              roundedCircle
              alt="profile pic"
              style={{
                maxHeight: "170px",
                maxWidth: "170px",
              }}
            />
            <Card.Body className="text-left">
              <Card.Title>User.Name</Card.Title>
              <Card.Text>User.description info</Card.Text>
              <Button variant="dark" onClick={() => handleEditProfile()}>
                Edit User description and image src
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <h1>My Blogs</h1>
          <Container>
            <PaginationBar
              pageNum={pageNum}
              totalPageNum={totalPageNum}
              setPageNum={setPageNum}
            />
            {loading ? (
              <ClipLoader color="#f86c6b" size={150} loading={loading} />
            ) : (
              <>
                {blogs.length ? (
                  <Card>
                    {blogs.map((blog) => (
                      <BlogCard
                        blog={blog}
                        key={blog._id}
                        handleClick={handleClickOnBlog}
                      />
                    ))}
                  </Card>
                ) : (
                  <p>There are no blogs</p>
                )}
              </>
            )}
          </Container>
        </div>
        <div className="col-2">
          <h1>Friendlist</h1>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search for Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <Button href="#">Add Friend</Button>
          </InputGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Pending Request</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <img src="" alt="f-profile" />
                waiting to be accepted 2 <Button>Confirm</Button>
              </ListGroupItem>
              <ListGroupItem>
                <img src="" alt="f-profile" />
                waiting to be accepted 2 <Button>Confirm</Button>
              </ListGroupItem>
            </ListGroup>

            <Card.Body>
              <Card.Title>Friends</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <img src="" alt="f-profile" />
                friend 1{" "}
              </ListGroupItem>
              <ListGroupItem>
                <img src="" alt="f-profile" />
                friend 2{" "}
              </ListGroupItem>
              <ListGroupItem>
                <img src="" alt="f-profile" />
                friend 3{" "}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">LoadMore</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </>
  );
};

export default DashboardPage;
