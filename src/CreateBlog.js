import React, { useState } from "react";
import { CREATE_BLOG } from "./ApiCall";
import { useMutation } from "@apollo/client";
import "./style.css";

const CreateBlog = () => {
  const [createBlog, { data, loading, error }] = useMutation(CREATE_BLOG);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  console.log("item", data);

  const handleSubmit = () => {
    createBlog({
      variables: {
        title: title,
        description: description,
        userId: 1,
      },
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Create Blog</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default CreateBlog;
