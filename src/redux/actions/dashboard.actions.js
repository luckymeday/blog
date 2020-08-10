import * as types from "../constants/dashboard.constants";
import api from "../api";
import { alertActions } from "./alert.actions";

const blogsRequest = () => async (dispatch) => {
    console.log('blogsRequest')
    dispatch({ type: types.BLOG_REQUEST, payload: null });
    try {
        const res = await api.get("/blogs?limit=1000&page=1");
        console.log('blogsRequest.res.data.:', res.data)
        dispatch({ type: types.BLOG_REQUEST_SUCCESS, payload: { blogs: res.data.data, total_blogs: res.data.results } });
    } catch (error) {
        dispatch({ type: types.BLOG_REQUEST_FAILURE, payload: error });
    }
};

const getCurrentUser = (accessToken) => async (dispatch) => {
    dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
    if (accessToken) {
        const bearerToken = "Bearer " + accessToken;
        api.defaults.headers.common["authorization"] = bearerToken;
    }
    try {
        const res = await api.get("/users/me");
        dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: { friends: res.data.friends, total_friends: res.data.friends.length } });
    } catch (error) {
        dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
    }
};

const uploadAvatar = (selectedFile) => async (dispatch) => {
    console.log('Change avatar')
    dispatch({ type: types.CHANGE_AVATAR_REQUEST, payload: null });
    try {
        const data = new FormData();
        data.append("avatarUpload", selectedFile)
        const res = await api.post("/users/me/avatar", data)
        console.log('blogsRequest.res.data.:', res.data)
        dispatch({
            type: "change avatar", 
            payload:{avatar: res.data.data,
            }})
        dispatch({ type: types.CHANGE_AVATAR_SUCCESS, payload: { avatar: res.data } });
    } catch (error) {
        dispatch({ type: types.CHANGE_AVATAR_FAILURE, payload: error });
    }

}

export const dashboardActions = {
    blogsRequest,
    getCurrentUser,
    uploadAvatar,
}