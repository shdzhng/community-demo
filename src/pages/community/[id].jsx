/** @format */
import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const {
    query: { id },
  } = useRouter();

  return <p>Post: {id}</p>;
};

export default Post;
