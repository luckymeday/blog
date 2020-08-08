import React from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

const ListPagination = (blog) => {
    console.log("pagination", ListPagination)
    const pageNum = useSelector(state => state.blog.pageNum)
    const totalPageNum = useSelector(state => state.blog.totalPageNum)

    const handleClickOnFirst = () => {
        blog.pageNum(1)
    }
    const handleClickOnPrev = () => {
        if (pageNum > 1) {
            blog.pageNum((num) => num - 1)
        }
    }
    const handleClickOnLast = () => {
        blog.pageNum(totalPageNum)
    }
    const handleClickOnNext = () => {
        if (pageNum < totalPageNum) {
            blog.pageNum((num) => num + 1)
        }
    }
    const handleClickOnPage = (page) => {
        blog.pageNum(page);
    }

    return (
        <>
            <Pagination size="lg" className="justify-content-center">
                <Pagination.First disabled={pageNum === 1} onClick={handleClickOnFirst} />
                <Pagination.Prev disabled={pageNum === 1} onClick={handleClickOnPrev} />
                <Pagination.Item active={pageNum === 1} onClick={() => handleClickOnPage(1)}>{1}</Pagination.Item>
                {pageNum > 2 && <Pagination.Ellipsis />}

                {pageNum > 1 && pageNum < totalPageNum && (
                    <Pagination.Item active>{pageNum}</Pagination.Item>
                )}

                {totalPageNum > pageNum + 1 && <Pagination.Ellipsis />}
                {totalPageNum > 1 && (
                    <Pagination.Item active={pageNum === totalPageNum} onClick={() => handleClickOnPage(totalPageNum)}>
                        {totalPageNum}
                    </Pagination.Item>
                )}
                <Pagination.Next disabled={pageNum === totalPageNum} onClick={handleClickOnLast} />
                <Pagination.Last disabled={pageNum === totalPageNum} onClick={handleClickOnNext} />
            </Pagination>
        </>
    );
};

export default ListPagination;
