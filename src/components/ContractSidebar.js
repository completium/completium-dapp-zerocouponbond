import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';

import { makeStyles } from '@material-ui/core/styles';

import { useZCBStateContext } from '../ZCBState';

const useStyles = makeStyles((theme) => ({
  textfield: {
    fontSize        : '10px'
  },
  input: {
    fontFamily      : 'Courier Prime, monospace',
    fontSize        : '14px'
  }
}));

const ContractSideBar = (props) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const  { zcbState, setContractInfo } = useZCBStateContext();
  const handleChange = (event, newValue) => {
      setValue(newValue);
  }
  const handletextfield = (event) => {
    var info = zcbState.contractInfo;
    switch (event.target.id) {
      case 'issuer-name'       : info.issuer = event.target.value; break;
      case 'issuer-account'    : info.issueraccount = event.target.value; break;
      case 'subscriber-name'   : info.subscriber = event.target.value; break;
      case 'subscriber-account': info.subscriberaccount = event.target.value; break;
      case 'face-value'        : info.faceprice = event.target.value; break;
      case 'discount-rate'     : info.discount = event.target.value; break;
      case 'duration'          : info.duration = event.target.value; break;
      case 'transfer-period'    : info.period = event.target.value; break;
      default : {}
    }
    setContractInfo(info);
  };
  return (
    <Grid container direction='row'>
      <Grid item xs={12} style={{ position: 'relative', top: '-6px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" color='primary' indicatorColor="primary">
          <Tab label="Data"  icon={<InfoOutlinedIcon />}/>
          <Tab label="Interact" icon={<SwapHorizOutlinedIcon />}/>
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction='row' style={{ padding: 24 }} spacing={2}>
          <Grid item xs={12}>
            <TextField size='small' onChange={handletextfield} id="issuer-name" label="Issuer name" fullWidth className={classes.textfield} InputProps={{
            classes: {
              input: classes.input,
            },
          }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField size='small' onChange={handletextfield} id="issuer-account" label="Issuer account" fullWidth InputProps={{
            classes: {
              input: classes.input,
            },
          }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField size='small' onChange={handletextfield} id="subscriber-name" label="Subscriber name" fullWidth InputProps={{
            classes: {
              input: classes.input,
            },
          }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField size='small' onChange={handletextfield} id="subscriber-account" label="Subscriber account" fullWidth InputProps={{
            classes: {
              input: classes.input,
            },
          }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField size='small' onChange={handletextfield} id="face-value" label="Face value" fullWidth InputProps={{
            classes: {
              input: classes.input,
            },
          }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField size='small' onChange={handletextfield} id="discount-rate" label="Discount rate (in %)" type="number" fullWidth InputProps={{
            classes: {
              input: classes.input,
            },
          }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField size='small' onChange={handletextfield} id="duration" label="Duration (in minutes)" type="number" fullWidth InputProps={{
            classes: {
              input: classes.input,
            },
          }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField size='small' onChange={handletextfield} id="transfer-period" label="Payback period (in minutes)" type="number" fullWidth InputProps={{
            classes: {
              input: classes.input,
            },
          }}/>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default ContractSideBar;