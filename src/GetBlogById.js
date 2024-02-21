import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BLOG_BY_ID } from './ApiCall'

const GetBlogById = () => {

  const {data, loading, error} = useQuery(GET_BLOG_BY_ID, {
    variables: {
      id: "90"
    }
  })
  
  console.log("dataaaa111111111111", data);
  return (
    <div></div>
  )
}

export default GetBlogById;