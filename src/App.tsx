import './App.css'
import NAV from '../asset/nav-instagram.png'
import { Post, Props as PostData } from './Post'
// import { useState, useEffect } from 'react'
// import { v4 } from 'uuid'
import { tryGetDocs } from './firebase'
import { useState } from 'react'

export const App = () => {
  const [posts, setPosts] = useState<PostData[]>([])
  tryGetDocs<PostData>('posts').then((p) => setPosts(p))

  return (
    <>
      <div className="app--header">
        <img className="app--nav" src={NAV} alt="nav-logo" />
      </div>
      {/*header*/}
      {posts.map((post) => (
        <Post
          key={post.key}
          iconUrl={post.iconUrl}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </>
  )
}
