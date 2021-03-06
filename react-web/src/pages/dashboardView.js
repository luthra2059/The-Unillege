import React from 'react';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotesIcon from '@material-ui/icons/Notes';
import ChatIcon from '@material-ui/icons/Chat';

import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import DashboardFeed from './feed';
import Alumni from "./alumni";
import Events from "./events";
import Forum from "./forum";
import Resources from "./resources";
import Profile from "./profile";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor:'#4a418c',
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
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function DashBoardView({props}) {
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          <Typography variant="h6" noWrap>
            UNILLEGE
          </Typography>
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

        <Typography variant='h6' style={{
          'position':'fixed',
          'top':'16px',
          'left':'2.5vw'
          
        }}>
         { props.user.username }
        </Typography>

        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
      <Divider />
      <List>
        
          <ListItem button key="dashboard">
            <ListItemIcon>
            <NavLink to='/'>
              <DashboardIcon/>
            </NavLink>
            </ListItemIcon>
            <NavLink to='/'>
              <ListItemText primary="Dashboard" />
            </NavLink>
          </ListItem>
          
          <ListItem button key="events">
            <ListItemIcon>
            <NavLink to='/events'>
              <EventIcon/>
            </NavLink>
            </ListItemIcon>
            <NavLink to='/events'>
              <ListItemText primary="Events" />
            </NavLink>
          </ListItem>

          <ListItem button key="posts">
            <ListItemIcon>
            <NavLink to='/forum'>
              <ForumIcon/>
            </NavLink>
            </ListItemIcon>
            <NavLink to='/forum'>
              <ListItemText primary="Forum" />
            </NavLink>
          </ListItem>
        
          <ListItem button key='resources'>
            <ListItemIcon>
              <NavLink to='/resources'>
               <NotesIcon/>
              </NavLink>
            </ListItemIcon>
            <NavLink to='/resources'>
              <ListItemText primary="Resources" />
            </NavLink>
          </ListItem>

      </List>
      <Divider />
      <List>
        
          <ListItem button key='alumni'>
            <ListItemIcon>
              <NavLink to='/alumni'>
               <PersonIcon/>
              </NavLink>
            </ListItemIcon>
            <NavLink to='/alumni'>
              <ListItemText primary="Alumni" />
            </NavLink>
          </ListItem>

          <ListItem button key='profile'>
            <ListItemIcon>
              <NavLink to='/profile'>
               <ChatIcon/>
              </NavLink>
            </ListItemIcon>
            <NavLink to='/profile'>
              <ListItemText primary="Discuss" />
            </NavLink>
          </ListItem>

          <ListItem button
            key="logout"
            onClick={props.logout}>
            <ListItemIcon>
              <ExitToAppIcon style={{ 'color':'#3f51b5' }}/>
            </ListItemIcon>
            <ListItemText primary="Logout" style={{ 'color':'#3f51b5' }}/>
          </ListItem>
        
      </List>
    
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      
        <Switch>
          <Route exact path="/events" render={(prop)=>(<Events {...prop} use = {props}/>)}/>
          <Route path="/forum" render={(prop)=>(<Forum {...prop} use = {props}/> )}/>
          <Route path="/alumni" render={(prop)=>(<Alumni {...prop} use = {props}/>)}/>
          <Route path="/resources" render={(prop)=>(<Resources {...prop} use={props}/>)}/>
          <Route path="/profile" render={(prop)=>(<Profile {...prop} use = {props}/>)}/>
          <Route path="/" render={(prop)=>(<DashboardFeed {...prop} use = {props}/>)}/>
        </Switch>
        
      </main>
    </div>
  );
}
