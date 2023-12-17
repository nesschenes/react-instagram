import { useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { SidebarItemType } from '@/types/SidebarItemType'
import { StringUtils } from '@/utils/StringUtils'
import { Button, SvgIconTypeMap } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddBoxIcon from '@material-ui/icons/AddBox'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExploreIcon from '@material-ui/icons/Explore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import MovieIcon from '@material-ui/icons/Movie'
import SearchIcon from '@material-ui/icons/Search'
import SmsIcon from '@material-ui/icons/Sms'

const drawerWidth = 260

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      backgroundColor: 'black',
      color: 'white',
    },
    appBar: {
      height: '100px',
      alignItems: 'left',
      verticalAlign: 'center',
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'black',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      borderColor: '#2B2B2B',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      borderColor: '#2B2B2B',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
      backgroundColor: 'black',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    toolbarTitle: {
      marginLeft: theme.spacing(2),
      color: 'white',
    },
    sidebar: {
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: 'black',
      color: 'white',
    },
    content: {
      flexGrow: 1,
      paddingTop: theme.spacing(3),
    },
  })
})

export type Props = {
  header: React.ReactNode
  content: React.ReactNode
}

type SidebarItemData = {
  type: SidebarItemType
  icon: OverridableComponent<SvgIconTypeMap>
  path: string
}

const upperSidebarItems: SidebarItemData[] = [
  { type: SidebarItemType.HOME, icon: HomeIcon, path: '/' },
  { type: SidebarItemType.SEARCH, icon: SearchIcon, path: '/search' },
  { type: SidebarItemType.EXPLORE, icon: ExploreIcon, path: '/explore' },
  { type: SidebarItemType.REELS, icon: MovieIcon, path: '/reels' },
  { type: SidebarItemType.MESSAGES, icon: SmsIcon, path: '/messages' },
  {
    type: SidebarItemType.NOTIFICATIONS,
    icon: FavoriteIcon,
    path: '/notifications',
  },
  { type: SidebarItemType.CREATE, icon: AddBoxIcon, path: '/create' },
  { type: SidebarItemType.PROFILE, icon: AccountCircleIcon, path: '/profile' },
]

const lowerSidebarItems: SidebarItemData[] = [
  { type: SidebarItemType.THREADS, icon: FingerprintIcon, path: '/threads' },
  { type: SidebarItemType.MORE, icon: MenuIcon, path: 'more' },
]

export const Sidebar: React.FC<Props> = (props: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(true)
  const go = useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleItemClick = (data: SidebarItemData) => {
    go(data.path)
  }

  const handleTitleClick = () => {
    go('/')
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            style={{ marginTop: '0px' }}
          >
            <MenuIcon />
          </IconButton>
          {props.header}
          {/* {!open && (
            <Typography variant="h6" noWrap style={{ marginTop: '20px' }}>
              Instagram
            </Typography>
          )} */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Button className={classes.toolbarTitle} onClick={handleTitleClick}>
            Instagram
          </Button>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        {/* <Divider /> */}
        <div className={classes.sidebar}>
          <List>
            {upperSidebarItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  handleItemClick(item)
                }}
              >
                <ListItemIcon>
                  <item.icon style={{ color: 'white', marginLeft: '8px' }} />
                </ListItemIcon>
                <ListItemText
                  primary={StringUtils.toUpperCamelCase(
                    SidebarItemType[item.type].toString()
                  )}
                />
              </ListItem>
            ))}
          </List>
          <List>
            {lowerSidebarItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <item.icon style={{ color: 'white', marginLeft: '8px' }} />
                </ListItemIcon>
                <ListItemText
                  primary={StringUtils.toUpperCamelCase(
                    SidebarItemType[item.type].toString()
                  )}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.content}
      </main>
    </div>
  )
}
