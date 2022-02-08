import './App.css'
import NAV from '../asset/nav-instagram.png'
import { Post /*, Props as PostData*/ } from './Post'
// import { useState, useEffect } from 'react'
// import { v4 } from 'uuid'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from './firebase'

export const App = () => {
  // const [posts] = useState<PostData[]>([
  //   {
  //     key: v4(),
  //     iconUrl: '/static/images/avatar/1.jpg',
  //     username: 'Ness',
  //     caption: 'Hello! Everyone!',
  //     imageUrl: 'https://picsum.photos/800/400?random=1',
  //   },
  //   {
  //     key: v4(),
  //     iconUrl: '/static/images/avatar/2.jpg',
  //     username: 'Jill',
  //     caption: 'Hello! Everyone!',
  //     imageUrl: 'https://picsum.photos/800/400?random=2',
  //   },
  // ])

  const [value] = useCollection(collection(db, 'posts'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  })

  return (
    <>
      <div className="app--header">
        <img className="app--nav" src={NAV} alt="nav-logo" />
      </div>
      {/*header*/}
      {value?.docs.map((post) => (
        <Post
          key={post.id}
          iconUrl={post.data().iconUrl}
          username={post.data().username}
          caption={post.data().caption}
          imageUrl={post.data().imageUrl}
        />
      ))}
    </>
  )
}
