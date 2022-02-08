import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'

export type Props = {
  id: string
  iconUrl: string
  username: string
  caption: string
  imageUrl: string
}

export const Post: React.FC<Props> = (props) => {
  return (
    <div className="post">
      <div className="post--header">
        <Avatar
          className="post--avatar"
          alt={props.username}
          src={props.iconUrl}
        ></Avatar>
        <h3>{props.username}</h3>
      </div>
      <img className="post--image" src={props.imageUrl} alt="post" />
      <h4 className="post--caption">
        <strong>{props.username}</strong> {props.caption}
      </h4>
    </div>
  )
}
