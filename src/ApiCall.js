import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { gql } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://rails-graphql3.onrender.com/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

export const GET_BLOGS = gql`
  query {
    blogs {
      id
      title
      description
      userName
    }
  }
`;

export const CREATE_BLOG = gql`
  mutation createBlog($title: String!, $description: String!, $userId: Int!) {
    createBlog(title: $title, description: $description, userId: $userId) {
      id
      userName
    }
  }
`;

export const GET_BLOG_BY_ID = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      id
      title
      description
    }
  }
`;
