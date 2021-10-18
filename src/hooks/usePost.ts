import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { FETCH_POSTS, selectPosts } from "../store/posts/postSlice";

const usePost = () => {
  const { loading, posts, error } = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: `POST/${FETCH_POSTS.REQUEST}` });
  }, [dispatch]);

  return {
    loading,
    posts,
    error,
  };
};

export default usePost;
