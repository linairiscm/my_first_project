
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function DetailView() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getData = async () => {
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await promise.json();

    setPost(json);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <h1>Detail page</h1>
      <h2>ID: {id}</h2>

      {post && (
        <>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </>
      )}
    </>
  );
}
