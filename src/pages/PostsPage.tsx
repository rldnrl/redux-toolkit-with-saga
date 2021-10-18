import React, { ReactElement } from 'react'
import PostComponent from '../components/Post';
import usePost from '../hooks/usePost';

const PostsPage = (): ReactElement => {
  const { loading, posts, error } = usePost()

  if (loading) return <div>로딩 중입니다...</div>

  if (error) return <div>에러 발생!!</div>

  return (
    <>
      {posts.map(post => <PostComponent key={post.id} {...post} />)}
    </>
  );
}

export default PostsPage;