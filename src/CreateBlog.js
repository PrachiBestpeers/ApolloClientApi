import React, { useState } from "react";
import { CREATE_BLOG } from "./ApiCall";
import { useMutation } from "@apollo/client";
import GetBlogById from "./GetBlogById";
import "./style.css";

const CreateBlog = () => {
  const [createBlog, { data, loading, error }] = useMutation(CREATE_BLOG);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    createBlog({
      variables: {
        title: title,
        description: description,
        userId: 1,
      },
    });
  };

  return (
    <div className="cardForForm">
      <form onSubmit={handleSubmit}>
        <div className="cardSection">
          <label className="inputLabel">Title</label>
          <input
            className="inputStyle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="cardSection">
          <label className="inputLabel">Description</label>
          <input
            className="inputStyle"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="buttonSubmit" type="submit">
          CREATE BLOG
        </button>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </form>
      <GetBlogById />
    </div>
  );
};

export default CreateBlog;
