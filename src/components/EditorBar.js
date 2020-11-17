import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import CodeIcon from '@material-ui/icons/Code';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';

import LinkIcon from '@material-ui/icons/Link';
import ImageIcon from '@material-ui/icons/Image';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const EditorBar = (props) => {
  return (
    <Grid container direction='row' justify="flex-start" alignItems="center" style={{ height: '100%' }} spacing={3}>
      <Grid item>
        <Typography variant='h6' style={{ fontWeight: 'bold', marginLeft:'24px' }}>Zero-coupon bond</Typography>
      </Grid>
      <Grid item style={{ width: '320px' }}></Grid>
      <Grid item><Divider orientation="vertical" flexItem style={{ height: '64px' }}/></Grid>
      <Grid item><FormatBoldIcon color='disabled'/></Grid>
      <Grid item><FormatItalicIcon color='disabled'/></Grid>
      <Grid item ><CodeIcon color='disabled'/></Grid>
      <Grid item><Divider orientation="vertical" flexItem style={{ height: '64px' }}/></Grid>
      <Grid item><FormatQuoteIcon color='disabled'/></Grid>
      <Grid item><FormatListNumberedIcon color='disabled'/></Grid>
      <Grid item><FormatListBulletedIcon color='disabled'/></Grid>
      <Grid item><Divider orientation="vertical" flexItem style={{ height: '64px' }}/></Grid>
      <Grid item><UndoIcon color='disabled'/></Grid>
      <Grid item><RedoIcon color='disabled'/></Grid>
      <Grid item><Divider orientation="vertical" flexItem style={{ height: '64px' }}/></Grid>
      <Grid item><LinkIcon color='disabled'/></Grid>
      <Grid item><ImageIcon color='disabled'/></Grid>
      <Grid item><Divider orientation="vertical" flexItem style={{ height: '64px' }}/></Grid>
      <Grid item>
        <Button disabled variant='contained' elevation={0}>issue contract</Button>
      </Grid>
    </Grid>
  );
}

export default EditorBar;