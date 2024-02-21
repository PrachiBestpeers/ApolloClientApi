import React from 'react';
import { GET_BLOGS, CREATE_BLOG } from './ApiCall';
import { useMutation, useQuery } from '@apollo/client';
import CreateBlog from './CreateBlog';
import "./style.css";
import GetBlogById from './GetBlogById.js';


const Home = () => {

  const {data, loading, error} = useQuery(GET_BLOGS);
  
  console.log("data", data);
  return (
    <div>
        <h3>All Blogs <b>{data?.blogs.length}</b></h3>
        <CreateBlog />
        <GetBlogById />
        {
          data?.blogs.map(item => (
           <div className='card' key={item.id}>
            <div className='card-rows'>ID: {item.id}</div>
            <div className='card-rows'>title<p>: {item.title}</p></div>
            <div className='card-rows'>Username<p>: {item.userName}</p></div>
            <div className='card-rows'>Description<p>: {item.description.slice(0, 100)}</p></div>
           </div>
          ))
        }
    </div>
  )
}

export default Home