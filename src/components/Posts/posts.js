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
              avatar
              nickname
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
        avatar={item.node.avatar}
        nickname={item.node.nickname}
      />
    )
  )
  return postsArray
}

export default Posts
