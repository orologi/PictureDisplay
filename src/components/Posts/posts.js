import React from "react"
import Post from "../Post"
import { StaticQuery, graphql } from "gatsby"

const Posts = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allPostJson {
          edges {
            node {
              id
              caption
              image
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div>{getPost(data)}</div>
      </>
    )}
  />
)

function getPost(data) {
  const postsArray = []
  data.allPostJson.edges.forEach(item =>
    postsArray.push(
      <Post
        key={item.node.id}
        caption={item.node.caption}
        image={item.node.image}
      />
    )
  )
  return postsArray
}

export default Posts
