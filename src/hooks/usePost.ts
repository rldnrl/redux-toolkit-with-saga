import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { postActions, selectPosts } from "../store/posts/postSlice";

const usePost = () => {
  const { loading, data: posts, error } = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  const { FETCH_REQUEST } = postActions;

  useEffect(() => {
    dispatch(FETCH_REQUEST());
  }, [dispatch]);

  return {
    loading,
    posts,
    error,
  };
};

export default usePost;
