/*
import React from "react"

import { StaticQuery, graphql } from "gatsby"

const User = ({ children }) => (
  <StaticQuery
    query={graphql`
    query  {
      allUserJson {
        edges {
          node {
            nickname
            avatar
          }
        }
      }
    }
    `}
    render={data => (
      <>
        <div>{getUser(data)}</div>
      </>
    )}
  />
)

function getUser(data) {
  const userArray = []
  data.allUserJson.edges.forEach(item =>
    userArray.push(
      <User
        
        nickname={item.node.nickname}
        avatar={item.node.avatar}
      />
    )
  )
  return userArray
}

export default User