import './App.css';
import React from 'react';
import HeaderBar from './components/HeaderBar';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SnackMsg from './components/SnackMsg';
import { appTitle, appName, network } from './settings';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContractPaper from './components/ContractPaper';
import EditorBar from './components/EditorBar';
import ContractSideBar from './components/ContractSidebar';
import { DAppProvider, useConnect } from './dapp.js';
import { ZCBProvider, useZCBStateContext } from './ZCBState';
import { useIndexer } from './indexer';

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
  var prefersDarkMode = false;
  const connect = useConnect();
  const [open, setOpen] = React.useState(false);
  const { zcbState } = useZCBStateContext();
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
  const openSnack = () => { setOpen(true); };
  const closeSnack = () => { setOpen(false); };
  useIndexer(zcbState.contractAddress);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderBar appTitle={appTitle} handleConnect={handleConnect} theme={theme}></HeaderBar>
      <main className={classes.content}>
        <Toolbar />
        <Grid container style={{ padding: 0 }} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Toolbar style={{ position: 'fixed', width: '100%', padding: 0, height: '65px', zIndex: 1000 }}>
              <Paper style={{ width: '100%', height: '65px' }} square variant='outlined' elevation={0}>
                <EditorBar openSnack={openSnack} closeSnack={closeSnack}></EditorBar>
              </Paper>
            </Toolbar>
          </Grid>

          <Grid item> <Typography style={{ width: '320px' }}></Typography></Grid>
          <Grid item xs={6} style={{ paddingTop: '120px' }}>
            <ContractPaper></ContractPaper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <Toolbar></Toolbar>
            <Toolbar></Toolbar>
        </Grid>
      </main>
      <SnackMsg open={open} theme={theme}></SnackMsg>
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
