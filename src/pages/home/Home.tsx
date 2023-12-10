import React from 'react'
// import AlertDialogSlide from '@/components/login/Login'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { useDocs } from '@/firebase'
import { Post, Props as PostData } from '@components/post/Post'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { Profile } from './components/Profile'
// import { Profile } from './components/Profile'
import { Props as StoryData, Story } from './components/Story'
import { Props as SuggestData } from './components/Suggest'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      width: '73%',
      height: '100px',
      marginLeft: '0px',
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },
    posts: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
    },
    profile: {
      display: 'flex',
      width: '22%',
      flexDirection: 'column',
      marginLeft: 'auto',
      marginRight: '0',
      zIndex: theme.zIndex.drawer + 1,
      overflowY: 'hidden',
    },
  })
)

export const Home: React.FC = () => {
  const classes = useStyles()
  const stories = useDocs<StoryData>('stories')
  const posts = useDocs<PostData>('posts')
  const suggests = useDocs<SuggestData>('suggests')
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '80%' }}>
          <Sidebar
            header={
              <div className={classes.toolbar}>
                {stories.map((story) => (
                  <Story
                    key={story.key}
                    id={story.key}
                    iconUrl={story.iconUrl}
                    username={story.username}
                  />
                ))}
              </div>
            }
            content={
              <div className={classes.posts}>
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
              </div>
            }
          />
        </div>
        <div className={classes.profile}>
          <Profile
            username="Ness"
            iconUrl=""
            account="ness.chen1101"
            suggests={suggests}
          />
        </div>
      </div>
    </>
  )
}
