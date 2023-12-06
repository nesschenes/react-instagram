import { useState } from 'react'
import clsx from 'clsx'
import { SidebarItemType } from '@/types/SidebarItemType'
import { StringUtils } from '@/utils/StringUtils'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
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
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    toolbarTitle: {
      marginLeft: 10,
    },
    sidebar: {
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

export type Props = {
  content: React.ReactNode
}

const upperSidebarItems = [
  { type: SidebarItemType.HOME, icon: HomeIcon },
  { type: SidebarItemType.SEARCH, icon: SearchIcon },
  { type: SidebarItemType.EXPLORE, icon: ExploreIcon },
  { type: SidebarItemType.REELS, icon: MovieIcon },
  { type: SidebarItemType.MESSAGES, icon: SmsIcon },
  { type: SidebarItemType.NOTIFICATIONS, icon: FavoriteIcon },
  { type: SidebarItemType.CREATE, icon: AddBoxIcon },
  { type: SidebarItemType.PROFILE, icon: AccountCircleIcon },
]

const lowerSidebarItems = [
  { type: SidebarItemType.THREADS, icon: FingerprintIcon },
  { type: SidebarItemType.MORE, icon: MenuIcon },
]

export const Sidebar: React.FC<Props> = (props: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
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
          >
            <MenuIcon />
          </IconButton>
          {!open && (
            <Typography variant="h6" noWrap>
              Instagram
            </Typography>
          )}
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
          <Typography className={classes.toolbarTitle} variant="h6" noWrap>
            Instagram
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.sidebar}>
          <List>
            {upperSidebarItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <item.icon />
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
                  <item.icon />
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
