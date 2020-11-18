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

const Annex = () => {
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
  const terminateCode = "transition terminate () {\n\
    called by issuer\n\
    from Signed to Terminated when {\n\
      match_option signaturedate with\n\
      | some(d) ->\n\
        d + maturityduration <= now and \n\
        now <= d + maturityduration + paybackduration and\n\
        transferred >= facevalue\n\
      | none -> false\n\
      end\n\
    } with effect {\n\
      transfer facevalue to subscriber\n\
    }\n\
}";
  const disputeCode = "transition dispute () {\n\
    called by subscriber\n\
    from Signed to Disputed when {\n\
      match_option signaturedate with\n\
      | some(d) ->\n\
        d + maturityduration + paybackduration <=  now\n\
      | none -> false\n\
      end\n\
    }\n\
}";
  const storageCode = "variable issuer     : role = @tz1bfVgcJC4ukaQSHUe1EbrUd5SekXeP9CWk\n\
  \n\
  variable subscriber : role = @tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg\n\
  \n\
  variable facevalue : tez = 10tz\n\
  \n\
  variable discount : rational = 14%\n\
  \n\
  variable maturityduration : duration = 1m\n\
  \n\
  variable paybackduration  : duration = 1m\n\
  \n\
  variable issuersigned     : bool = false\n\
  variable subscribersigned : bool = false\n\
  variable signaturedate    : option<date> = none\n\
  ";
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
            The present value is transfered to the issuer during signature by subscriber (see line 8 below).
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Highlight {...defaultProps} theme={dracula} code={SignCode} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, paddingLeft: '35px'}}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })} style={{ backgroundColor: (i===5 || i===7)?'#3f51b52e':'#f6f8fa' }}>
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
            When issuer and subscriber have signed, the <span style={{ fontFamily: 'Courier Prime, monospace' }}>toSigned</span> entry point is called (see lines 10 and 11 below).
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Highlight {...defaultProps} theme={dracula} code={SignCode} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, paddingLeft: '35px'}}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })} style={{ backgroundColor: (i===9 || i===10)?'#3f51b52e':'#f6f8fa' }}>
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
            The <span style={{ fontFamily: 'Courier Prime, monospace' }}>toSigned</span> entry point sets the contract signature date to current time (see line 4 below), and sets contract's state to <span style={{ fontFamily: 'Courier Prime, monospace' }}>Signed</span>.
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Highlight {...defaultProps} theme={dracula} code={toSignedCode} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, paddingLeft: '35px'}}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })} style={{ backgroundColor: (i===3)?'#3f51b52e':'#f6f8fa' }}>
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
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>Annex 4</Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography paragraph>
            The face value must be transfered to the subscriber (see line 12 below) during the payback period after the maturity date (see lines 6 and 7 below).
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Highlight {...defaultProps} theme={dracula} code={terminateCode} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, paddingLeft: '35px'}}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })} style={{ backgroundColor: (i===5 || i===6 || i === 11)?'#3f51b52e':'#f6f8fa' }}>
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
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>Annex 5</Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:'70px', paddingRight: '60px', minWidth: '680px' }}>
          <Typography paragraph>
            Subscriber may open a dispute (see line 3 below) when the contract is still in <span style={{ fontFamily: 'Courier Prime, monospace' }}>Signed</span> state after payback period (see line 6 below).
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Highlight {...defaultProps} theme={dracula} code={disputeCode} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, paddingLeft: '35px'}}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })} style={{ backgroundColor: (i===2 || i===5)?'#3f51b52e':'#f6f8fa' }}>
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

export default Annex;