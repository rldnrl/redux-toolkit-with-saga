import axios from "axios";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>("http://localhost:4000/posts");
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
