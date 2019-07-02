import styled from "styled-components"
import React, { Component } from "react"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
  justify-content: center;
`

const PostUserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const PostUserImg = styled.img`
  width: 500px;
  height: 500px;
  flex-direction: column;
`

const PostUserNickname = styled.h1`
  margin-left: 12px;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
`

const PostCaption = styled.span`
  padding: 16px 16px;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
`

const User = props => (
        <h1>hello</h1>
  )



  class Post extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      const nickname = this.props.nickname
      const avatar = this.props.avatar
      const image = this.props.image
      const caption = this.props.caption
      return (
        <Container>
          <User  />

        </Container>
      )
    }
  }
  




export default Post