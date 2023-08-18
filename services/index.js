import { request, gql } from "graphql-request";

export const getPosts = async () => {
  const query = gql`
    query MyPosts {
      postsConnection {
        edges {
          node {
            slug
            title
            excerpt
            createdAt
            featuredImage {
              url
            }
            author {
              bio
              name
              id
              avatar {
                id
              }
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
};
