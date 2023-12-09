import React from 'react'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { useDocs } from '@/firebase'
import { Post, Props as PostData } from '@components/post/Post'
import { Props as StoryData, Story } from './components/Story'

export const Home: React.FC = () => {
  const stories = useDocs<StoryData>('stories')
  const posts = useDocs<PostData>('posts')
  return (
    <>
      <Sidebar
        header={stories.map((story) => (
          <Story
            key={story.key}
            id={story.key}
            iconUrl={story.iconUrl}
            username={story.username}
          />
        ))}
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
