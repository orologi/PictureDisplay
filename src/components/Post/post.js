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
  width: 80px;
  height: 80px;
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
  background-color: hsla(14, 100%, 53%, 0.6);
`

const PostCaption = styled.span`
  padding: 50px 16px;
  font-size 18px;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  display:flex
  justify-content: center;
  
`

const User = props => (
  <Row>
    <PostUserAvatar src={props.PostUserAvatar} />
    <PostUserNickname>{props.username}</PostUserNickname>
  </Row>
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
        <User PostUserAvatar={avatar} username={nickname} />
        <Row>
          <PostUserImg src={image} />
        </Row>
        <PostCaption>{caption}</PostCaption>
      </Container>
    )
  }
}



export default Post