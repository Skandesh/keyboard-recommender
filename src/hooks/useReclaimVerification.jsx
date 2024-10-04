import { useState, useContext, useEffect } from 'react';
import { ReclaimContext } from '../contexts/ReclaimContext';
import { getKeyboardRecommendations } from '../utils/keyboardRecommendations';

function useReclaimVerification() {
  const { reclaimProofRequest } = useContext(ReclaimContext);
  const [requestUrl, setRequestUrl] = useState('');
  const [statusUrl, setStatusUrl] = useState('');
  const [proofs, setProofs] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [keyboardRecommendations, setKeyboardRecommendations] = useState([]);
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);

  useEffect(() => {
    if (accuracy > 0 || wpm > 0) {
      const recommendations = getKeyboardRecommendations(accuracy, wpm);
      setKeyboardRecommendations(recommendations);
    }
  }, [accuracy, wpm]);

  async function handleCreateClaim() {
    if (!reclaimProofRequest) {
      console.error('Reclaim Proof Request not initialized');
      return;
    }

    const url = await reclaimProofRequest.getRequestUrl();
    setRequestUrl(url);

    const status = reclaimProofRequest.getStatusUrl();
    setStatusUrl(status);

    await reclaimProofRequest.startSession({
      onSuccess: (proofs) => {
        setProofs(proofs);
        const parameters = JSON.parse(proofs.claimData.parameters);
        setAccuracy(parameters.paramValues.accuracy);
        setWpm(parameters.paramValues.wpm);
        setIsVerificationComplete(true);
      },
      onFailure: (error) => {
        console.error('Verification failed', error);
      },
    });
  }

  return {
    requestUrl,
    statusUrl,
    proofs,
    accuracy,
    wpm,
    keyboardRecommendations,
    isVerificationComplete,
    handleCreateClaim,
  };
}

export default useReclaimVerification;
