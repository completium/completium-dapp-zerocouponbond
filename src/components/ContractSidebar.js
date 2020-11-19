import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';

import { makeStyles } from '@material-ui/core/styles';

import { useZCBStateContext } from '../ZCBState';

import Timeline          from '@material-ui/lab/Timeline';
import TimelineItem      from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent   from '@material-ui/lab/TimelineContent';
import TimelineDot       from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import { network } from '../settings';

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
    var value = event.target.value;
    switch (event.target.id) {
      case 'issuer-name'       : info.issuer            = value; break;
      case 'issuer-account'    : info.issueraccount     = value; break;
      case 'subscriber-name'   : info.subscriber        = value; break;
      case 'subscriber-account': info.subscriberaccount = value; break;
      case 'face-value'        : info.faceprice         = (parseInt(value) >= 0)?parseInt(value).toString():'0'; break;
      case 'discount-rate'     : info.discount          = (parseInt(value) >= 0)?value:'0'; break;
      case 'duration'          : info.duration          = (parseInt(value) >= 0)?value:'0'; break;
      case 'transfer-period'   : info.period            = (parseInt(value) >= 0)?value:'0'; break;
      default : {}
    }
    setContractInfo(info);
  };
  const timelineItems =
    zcbState.timeline.map(element => {
      return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ flex: 200 }}>
          <Typography color='textSecondary'>{element.date}</Typography>
          {(element.ophash !== undefined)?(
            <a style={{ textDecoration: 'none' }} href={"https://better-call.dev/"+network+"/opg/"+element.ophash+"/contents"} target="_blank">
              <Typography style={{ color: 'black' }}>{element.label} <OpenInNewIcon style={{ position: 'relative', top: '4px'}}fontSize='small'/></Typography>
            </a>
          ) : (
            <Typography>{element.label}</Typography>
          )}
        </TimelineContent>
      </TimelineItem>);
    });
  const disabled = zcbState.contractAddress !== '';
  return (
    <Grid container direction='row'>
      <Grid item xs={12} style={{ position: 'relative', top: '-6px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" color='primary' indicatorColor="primary">
          <Tab label="Data"  icon={<InfoOutlinedIcon />}/>
          <Tab label="Timeline" icon={<TimelineOutlinedIcon />}/>
        </Tabs>
      </Grid>
      {
        (value === 0)? (
          <Grid item xs={12}>
            <Grid container direction='row' style={{ padding: 24 }} spacing={2}>
              <Grid item xs={12}>
                <TextField disabled={disabled} size='small' onChange={handletextfield} id="issuer-name" label="Issuer name" fullWidth
                value={zcbState.contractInfo.issuer}
                className={classes.textfield} InputProps={{
                classes: {
                  input: classes.input,
                },
              }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField disabled={disabled} size='small' onChange={handletextfield} id="issuer-account" label="Issuer account" fullWidth
                value={zcbState.contractInfo.issueraccount}
                InputProps={{
                classes: {
                  input: classes.input,
                },
              }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField disabled={disabled} size='small' onChange={handletextfield} id="subscriber-name" label="Subscriber name" fullWidth
                value={zcbState.contractInfo.subscriber}
                InputProps={{
                classes: {
                  input: classes.input,
                },
              }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField disabled={disabled} size='small' onChange={handletextfield} id="subscriber-account" label="Subscriber account" fullWidth
                value={zcbState.contractInfo.subscriberaccount}
                InputProps={{
                classes: {
                  input: classes.input,
                },
              }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField disabled={disabled} size='small' onChange={handletextfield} id="face-value" label="Face value" fullWidth
                value={zcbState.contractInfo.faceprice}
                InputProps={{
                classes: {
                  input: classes.input,
                },
              }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField disabled={disabled} size='small' onChange={handletextfield} id="discount-rate" label="Discount rate (in %)" type="number"
                value={zcbState.contractInfo.discount}
                fullWidth InputProps={{
                classes: {
                  input: classes.input,
                },
              }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField disabled={disabled} size='small' onChange={handletextfield} id="duration" label="Duration (in minutes)" type="number" fullWidth
                value={zcbState.contractInfo.duration}
                InputProps={{
                classes: {
                  input: classes.input,
                },
              }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField disabled={disabled} size='small' onChange={handletextfield} id="transfer-period" label="Payback period (in minutes)" type="number" fullWidth
                value={zcbState.contractInfo.period}
                InputProps={{
                classes: {
                  input: classes.input,
                },
              }}/>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Timeline>
            { timelineItems }
          </Timeline>
        )
      }
    </Grid>
  );
};

export default ContractSideBar;