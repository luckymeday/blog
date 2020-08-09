import React from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { blogActions } from "../redux/actions";

const PageLimit = 6;
const ListPagination = () => {
    console.log("pagination", ListPagination)
    const pageNum = useSelector(state => state.blog.pageNum)
    const totalPageNum = useSelector(state => (Math.ceil(state.blog.totalPageNum) / PageLimit))

    const dispatch = useDispatch()

    // short list, no need
    // const handleClickOnFirst = () => {
    //     blog.pageNum(1)
    // }

    // const handleClickOnPrev = () => {
    //     if (pageNum > 1) {
    //         dispatch({ type: "CLICK_PREV", payload: blog.pageNum - 1 })
    //     }
    // }
    // function >> change to dispatch
    // const handleClickOnPrev = () => {
    //     if (pageNum > 1) {
    //         blog.pageNum((num) => num - 1)
    //     }
    // }

    // short list, no need
    // const handleClickOnLast = () => {
    //     blog.pageNum(totalPageNum)
    // }

    // const handleClickOnNext = () => {
    //     if (pageNum < totalPageNum) {
    //         dispatch({ type: "CLICK_NEXT", payload: blog.pageNum + 1 })
    //     }
    // }
    // function >> change to dispatch
    // const handleClickOnNext = () => {
    //     if (pageNum < totalPageNum) {
    //         blog.pageNum((num) => num + 1)
    //     }
    // }

    // const handleClickOnPage = (page) => {
    //     dispatch({ type: "CLICK_ON", payload: blog.pageNum(page) })
    // }
    // function >> change to dispatch
    // const handleClickOnPage = (page) => {
    //     blog.pageNum(page);
    // }

    const getPaginationRequest = (page) => {
        // console.log('pageNum:', pageNum)
        // console.log('totalPageNum:', totalPageNum)
        dispatch(blogActions.blogsRequest(page))
        // console.log("pagination working", getPaginationRequest)
    }
    const handleOnClickPrev = () => {
        dispatch(blogActions.blogsRequest(pageNum - 1))
        // console.log("pagination working", getPaginationRequest)
    }
    const handleOnClickNext = () => {
        dispatch(blogActions.blogsRequest(pageNum + 1))
        // console.log("pagination working", getPaginationRequest)
    }

    return (
        <>
            <Pagination size="lg" className="justify-content-center">
                {/* <Pagination.First disabled={pageNum === 1} onClick={handleClickOnFirst} /> */}
                <Pagination.Prev disabled={pageNum === 1} onClick={() => handleOnClickPrev()} />
                <Pagination.Item active={pageNum === 1} onClick={() => getPaginationRequest(pageNum)}>{pageNum}</Pagination.Item>
                {/* {pageNum > 2 && <Pagination.Ellipsis />} */}

                {pageNum > 1 && pageNum < totalPageNum && (
                    <Pagination.Item active>{pageNum}</Pagination.Item>
                )}

                {/* {totalPageNum > pageNum + 1 && <Pagination.Ellipsis />} */}
                {totalPageNum > 1 && (
                    <Pagination.Item active={pageNum === totalPageNum} onClick={() => getPaginationRequest(totalPageNum)}>
                        {totalPageNum}
                    </Pagination.Item>
                )}
                <Pagination.Next disabled={pageNum === totalPageNum} onClick={() => handleOnClickNext()} />
                {/* <Pagination.Last disabled={pageNum === totalPageNum} onClick={handleClickOnLast} /> */}

            </Pagination>
        </>
    );
};

export default ListPagination;
