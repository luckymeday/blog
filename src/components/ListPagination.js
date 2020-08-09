import React from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { blogActions } from "../redux/actions";

const PageLimit = 6;
const ListPagination = () => {
  const pageNum = useSelector((state) => state.blog.pageNum);
  const totalPageNum = useSelector(
    (state) => Math.ceil(state.blog.totalPageNum) / PageLimit
  );

  const dispatch = useDispatch();
  const getPaginationRequest = (page) => {
    dispatch(blogActions.blogsRequest(page));
  };
  const handleOnClickPrev = () => {
    dispatch(blogActions.blogsRequest(pageNum - 1));
  };
  const handleOnClickNext = () => {
    dispatch(blogActions.blogsRequest(pageNum + 1));
  };

  return (
    <>
      <Pagination size="lg" className="justify-content-center">
        <Pagination.Prev
          disabled={pageNum === 1}
          onClick={() => handleOnClickPrev()}
        />
        <Pagination.Item
          active={pageNum === 1}
          onClick={() => getPaginationRequest(pageNum)}
        >
          {pageNum}
        </Pagination.Item>

        {pageNum > 1 && pageNum < totalPageNum && (
          <Pagination.Item active>{pageNum}</Pagination.Item>
        )}

        {totalPageNum > 1 && (
          <Pagination.Item
            active={pageNum === totalPageNum}
            onClick={() => getPaginationRequest(totalPageNum)}
          >
            {totalPageNum}
          </Pagination.Item>
        )}
        <Pagination.Next
          disabled={pageNum === totalPageNum}
          onClick={() => handleOnClickNext()}
        />
      </Pagination>
    </>
  );
};

export default ListPagination;
