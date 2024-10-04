import React, { createContext, useState, useEffect } from 'react';
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';
import { RECLAIM_CONFIG } from '../config';

export const ReclaimContext = createContext();

export const ReclaimProvider = ({ children }) => {
  const [reclaimProofRequest, setReclaimProofRequest] = useState(null);

  useEffect(() => {
    async function initializeReclaim() {
      const { APP_ID, APP_SECRET, PROVIDER_ID } = RECLAIM_CONFIG;
      const proofRequest = await ReclaimProofRequest.init(
        APP_ID,
        APP_SECRET,
        PROVIDER_ID
      );
      setReclaimProofRequest(proofRequest);
    }

    initializeReclaim();
  }, []);

  return (
    <ReclaimContext.Provider value={{ reclaimProofRequest }}>
      {children}
    </ReclaimContext.Provider>
  );
};
