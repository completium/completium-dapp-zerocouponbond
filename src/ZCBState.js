import { useState } from 'react';
import constate from "constate";

export function useZCBState() {
  const [zcbState, setZcbState] = useState({
    contractInfo : {
      issuer        : '',
      issueraccount : '',
      subscriber    : '',
      subscriberaccount: '',
      faceprice : 0,
      discount  : 0,
      duration  : 0,
      period    : 0,
    },
    contractState   : 'notcreated',
    contractAddress : '',
    signers         : [],
    timeline        : []
  });
  const isCreated = () => {
    if (zcbState.contractState === 'notcreated') {
      return false;
    }
    return true;
  }
  const setContractInfo = (ci) => { setZcbState(zcb => { return {
    contractInfo     : ci,
    constractState   : zcb.constractState,
    constractAddress : zcb.contractAddress,
    signers          : zcb.signers,
    timeline         : zcb.timeline
  }; })}
  return { zcbState, setZcbState, isCreated, setContractInfo };
}

export const [ZCBProvider, useZCBStateContext] = constate(useZCBState);