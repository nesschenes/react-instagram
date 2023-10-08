import './App.css'
import NAV from '../asset/nav-instagram.png'
import { Post, Props as PostData } from './Post'
import { useDocs } from './firebase'

export const App = () => {
  const posts = useDocs<PostData>('posts')
  return (
    <>
      <div className="app--header">
        <img className="app--nav" src={NAV} alt="nav-logo" />
      </div>
      {/*header*/}
      {posts.map((post) => (
        <Post
          key={post.key}
          id={post.key}
          iconUrl={post.iconUrl}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </>
  )
}
