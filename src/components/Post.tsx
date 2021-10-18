import React, { ReactElement } from 'react'
import { Post } from '../api/post';

type PostProps = Post

const PostComponent = ({ title, body, userId }: PostProps): ReactElement => {
  return (
    <ul>
      <li>{title}</li>
      <li>{body}</li>
      <li>{userId}</li>
    </ul>
  );
}

export default PostComponent;