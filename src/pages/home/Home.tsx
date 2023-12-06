import React from 'react'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { useDocs } from '@/firebase'
import { Post, Props as PostData } from '@components/post/Post'

export const Home: React.FC = () => {
  const posts = useDocs<PostData>('posts')
  return (
    <>
      <Sidebar
        content={posts.map((post) => (
          <Post
            key={post.key}
            id={post.key}
            iconUrl={post.iconUrl}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      />
    </>
  )
}
