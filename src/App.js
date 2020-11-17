import './App.css';
import React from 'react';
import HeaderBar from './components/HeaderBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SnackMsg from './components/SnackMsg';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';
import { ZCBProvider, useZCBStateContext } from './ZCBState';
import { DAppProvider, useAccountPkh, useConnect, useReady, useWallet } from './dapp.js';
import { appTitle, appName, network } from './settings';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ContractPaper from './components/ContractPaper';
import EditorBar from './components/EditorBar';
import ContractSideBar from './components/ContractSidebar';

function App() {
  return (
   <DAppProvider appName={appName}>
      <ZCBProvider>
        <React.Suspense fallback={null}>
          <PageRouter />
        </React.Suspense>
      </ZCBProvider>
    </DAppProvider>
  );
}

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
  },
}));

function PageRouter() {
  const classes = useStyles();
  const ready = useReady();
  const wallet = useWallet();
  var prefersDarkMode = false;
  const connect = useConnect();
  const theme = React.useMemo(
    () =>
      createMuiTheme(),
    [prefersDarkMode],
  );
  const handleConnect = React.useCallback(async () => {
    try {
      await connect(network);
    } catch (err) {
      alert(err.message);
    };
  }, [connect]);
  const margin = drawerWidth+'px';
  console.log(`margin: ${margin}`);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderBar appTitle={appTitle} handleConnect={handleConnect} theme={theme}></HeaderBar>
      <main className={classes.content}>
        <Toolbar />
        <Grid container stlye={{ padding: 0 }} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Toolbar style={{ position: 'fixed', width: '100%', padding: 0, height: '65px' }}>
              <Paper style={{ width: '100%', height: '65px' }} square variant='outlined' elevation={0}>
                <EditorBar></EditorBar>
              </Paper>
            </Toolbar>
          </Grid>
          <Grid item xs={12}>
            <Toolbar></Toolbar>
            <Toolbar></Toolbar>
          </Grid>
          <Grid item> <Typography style={{ width: '320px' }}></Typography></Grid>
          <Grid item xs={6}>
            <ContractPaper></ContractPaper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <Toolbar></Toolbar>
            <Toolbar></Toolbar>
        </Grid>
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='right'
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <ContractSideBar></ContractSideBar>
        </div>
      </Drawer>
    </div>
  );
}


export default App;
