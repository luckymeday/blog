<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> d1a024e4a4b1c542cf1079cb32e1ace1c6d1ede1
import { Container, CardColumns, Jumbotron, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { blogActions } from "../../redux/actions";
import BlogCard from "../../components/BlogCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory, Link } from "react-router-dom";
<<<<<<< HEAD
import PaginationBar from "../../components/Pagination";
const PAGE_LIMIT = 5;
=======
import ListPagination from "../../components/ListPagination";

>>>>>>> d1a024e4a4b1c542cf1079cb32e1ace1c6d1ede1
const HomePage = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const loading = useSelector((state) => state.blog.loading);
<<<<<<< HEAD

  const blogs = useSelector((state) => state.blog.displayBlogs);
  const allBlogs = useSelector((state) => state.blog.blogs);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //for Pagination
  const [totalPageNum, setTotalPageNum] = useState(1);
  const [pageNum, setPageNum] = useState(1);

  const handleClickOnBlog = (id) => {
    history.push(`/blogs/${id}`);
  };

  useEffect(() => {
    dispatch(blogActions.blogsRequest());
    // setTotalPageNum(6);
=======
  const blogs = useSelector((state) => state.blog.blogs);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let history = useHistory();
  console.log(blogs);

  useEffect(() => {
    dispatch(blogActions.blogsRequest(1));
>>>>>>> d1a024e4a4b1c542cf1079cb32e1ace1c6d1ede1
  }, [dispatch]);
  useEffect(() => {
    setTotalPageNum(Math.ceil(allBlogs.length / PAGE_LIMIT));
  }, [allBlogs]); //ask why it only work without []

  useEffect(() => {
    dispatch(blogActions.displayBlogsRequest(pageNum, PAGE_LIMIT));
  }, [pageNum]);

  const handleClickOnBlog = (id) => {
    history.push(`/blogs/${id}`);
  };

  return (
    <>
      <Container>
        <Jumbotron className="text-center">
          <h1>Social Blog</h1>
          <p>Write about your amazing experiences.</p>
          {isAuthenticated && (
            <Link to="/blog/add">
<<<<<<< HEAD
              <Button variant="primary">Write now!!</Button>
=======
              <Button variant="primary">Write now</Button>
>>>>>>> d1a024e4a4b1c542cf1079cb32e1ace1c6d1ede1
            </Link>
          )}
        </Jumbotron>

        <PaginationBar
          pageNum={pageNum}
          totalPageNum={totalPageNum}
          setPageNum={setPageNum}
        />
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
<<<<<<< HEAD
          <>
            {blogs.length ? (
              <CardColumns>
                {blogs.map((blog) => (
                  <BlogCard
                    blog={blog}
                    key={blog._id}
                    handleClick={handleClickOnBlog}
                  />
                ))}
              </CardColumns>
            ) : (
              <p>There are no blogs</p>
            )}
          </>
        )}
=======
            <>
              {blogs.length ? (
                <CardColumns>
                  {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog._id} handleClick={handleClickOnBlog} />
                  ))}
                </CardColumns>
              ) : (
                  <p>There are no blogs</p>
                )}
            </>
          )}
        <ListPagination />
>>>>>>> d1a024e4a4b1c542cf1079cb32e1ace1c6d1ede1
      </Container>
    </>
  );
};

export default HomePage;
