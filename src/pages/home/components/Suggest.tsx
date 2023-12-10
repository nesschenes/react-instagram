import React from 'react'
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core'

export type Props = {
  key: string
  username: string
  iconUrl: string
  tag: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: theme.spacing(1),
    },
    icon: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginTop: '8px',
      marginLeft: '20px',
    },
    info: {
      height: theme.spacing(6),
      marginTop: '14px',
      marginLeft: '10px',
    },
    account: {
      textAlign: 'left',
      padding: '0px',
      margin: '0px 0px 0px 0px',
      color: 'white',
    },
    username: {
      textAlign: 'left',
      padding: '0px',
      margin: '0px 0px 0px 0px',
      color: 'gray',
    },
  })
)

const handleStoryClick = (story: Props) => {
  console.log(`show ${story.username}'s story`)
}

export const Suggest: React.FC<Props> = (props) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Avatar
          className={classes.icon}
          alt={props.username}
          src={props.iconUrl}
          onClick={() => {
            handleStoryClick(props)
          }}
        ></Avatar>
        <div className={classes.info}>
          <h5 className={classes.username}>{props.username}</h5>
          <h5 className={classes.account}>{props.tag}</h5>
        </div>
      </div>
    </>
  )
}
