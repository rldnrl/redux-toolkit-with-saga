import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { postActions, selectPosts } from "../store/posts/postSlice";

const usePost = () => {
  const { loading, posts, error } = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postActions.FETCH_REQUEST());
  }, [dispatch]);

  return {
    loading,
    posts,
    error,
  };
};

export default usePost;
