import React from 'react'
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Props as SuggestData, Suggest } from './Suggest'

export type Props = {
  account: string
  iconUrl: string
  username: string
  suggests: SuggestData[]
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
      marginTop: '10px',
      marginLeft: '20px',
    },
    info: {
      height: theme.spacing(7),
      marginTop: '20px',
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

export const Profile: React.FC<Props> = (props) => {
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
          <h5 className={classes.account}>{props.account}</h5>
          <h5 className={classes.username}>{props.username}</h5>
        </div>
      </div>
      <h4 style={{ color: 'gray', marginLeft: '30px', marginBottom: '0px' }}>
        Suggest for you
      </h4>
      {props.suggests.map((data) => (
        <Suggest
          key={data.key}
          username={data.username}
          iconUrl={data.iconUrl}
          tag={data.tag}
        />
      ))}
      <div
        style={{
          color: 'gray',
          fontSize: '10px',
          marginLeft: '30px',
          marginTop: '30px',
        }}
      >
        About Help Press API Jobs Privacy Terms
        <br />
        Locations Language Meta Verified
        <br />
        <br />© 2023 INSTAGRAM FROM META
      </div>
    </>
  )
}
