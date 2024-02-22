import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BLOG_BY_ID } from './ApiCall'

const GetBlogById = () => {

  const {data, loading, error} = useQuery(GET_BLOG_BY_ID, {
    variables: {
      id: "90"
    }
  })
  
  return (
    <div>
      <h4>ID : {data?.blog.id}</h4>
      <p>Title: {data?.blog.title}</p>
      <p>Description: {data?.blog.description}</p>
    </div>
  )
}

export default GetBlogById;