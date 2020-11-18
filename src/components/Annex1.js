import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/github';
/* import dracula from 'prism-react-renderer/themes/vsDark';
 */import styled from "styled-components";

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 1;
`;

const LineContent = styled.span`
  display: table-cell;
  font-size: 13px;
`;

const Annex1 = () => {
  const SignCode = "entry sign () { \n\
    if caller = issuer then \n\
      issuersigned := true \n\
    else if caller = subscriber then begin \n\
      subscribersigned := true; \n\
      var presentvalue = discount * facevalue; \n\
      dorequire(transferred >= presentvalue, \"SUBSCRIBER_INVALID_TRANSFER\"); \n\
      transfer presentvalue to issuer; \n\
    end \
    else fail(\"CALLER_NOT_A_SIGNER\"); \n\
    if issuersigned and subscribersigned then \n\
      transfer 0tz to entry self.toSigned(); \n\
}";
  const toSignedCode = "transition toSigned() { \n\
    called by selfaddress\n\
    from Created to Signed with effect {\n\
      signaturedate := some(now)\n\
    }\n\
}";
  return (
    <Paper square>
      <Grid container direction='row'>
        <Grid item xs={12} style={{ paddingTop: '40px', paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>Annex 1</Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography paragraph>
            The present value is computed as the multiplication of the discount rate by the face value (see line 6 below).
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>Annex 2</Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography paragraph>
            The present value is transfered to the issuer during subscriber signature (see line 8 below).
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Highlight {...defaultProps} theme={dracula} code={SignCode} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, paddingLeft: '35px'}}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })} style={{ backgroundColor: (i===5 || i===7)?'#7a7aeacf':'#f6f8fa' }}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
           </Pre>
          )}
        </Highlight>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>Annex 3</Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography paragraph>
            When issuer and subscriber have signed, the entry toSigned is called (see lines 10 and 11 below).
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Highlight {...defaultProps} theme={dracula} code={SignCode} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, paddingLeft: '35px'}}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })} style={{ backgroundColor: (i===9 || i===10)?'#7a7aeacf':'#f6f8fa' }}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
           </Pre>
          )}
        </Highlight>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography paragraph>
            The toSigned entry point sets the contract signature date.
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Highlight {...defaultProps} theme={dracula} code={toSignedCode} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, paddingLeft: '35px'}}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })} style={{ backgroundColor: (i===3)?'#7a7aeacf':'#f6f8fa' }}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
           </Pre>
          )}
        </Highlight>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Annex1;