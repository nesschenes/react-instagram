import React from 'react'
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core'

export type Props = {
  id: string
  key: string
  iconUrl: string
  username: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      height: '100%',
      alignItems: 'center',
      margin: theme.spacing(1.5),
    },
    icon: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginTop: '14px',
    },
    username: {
      textAlign: 'center',
      padding: '0px',
      margin: '6px 0px 0px 0px',
    },
  })
)

const handleStoryClick = (story: Props) => {
  console.log(`show ${story.username}'s story`)
}

const formatName = (username: string) => {
  if (username && username.length > 8) {
    return `${username.substring(0, 6)}..`
  }
  return username
}

export const Story: React.FC<Props> = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Avatar
        className={classes.icon}
        alt={props.username}
        src={props.iconUrl}
        onClick={() => {
          handleStoryClick(props)
        }}
      ></Avatar>
      <h5 className={classes.username}>{formatName(props.username)}</h5>
    </div>
  )
}
