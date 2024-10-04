import React, { useState, useEffect } from 'react';
import useReclaimVerification from '../hooks/useReclaimVerification';
import VerificationButton from './VerificationButton';
import QRCodeDisplay from './QRCodeDisplay';
import TypingResults from './TypingResults';
import KeyboardRecommendations from './KeyboardRecommendations';
import LoadingFacts from './LoadingFacts';

function KeyboardRecommender() {
  const {
    requestUrl,
    isVerificationComplete,
    accuracy,
    wpm,
    keyboardRecommendations,
    handleCreateClaim,
  } = useReclaimVerification();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (requestUrl && !isVerificationComplete) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [requestUrl, isVerificationComplete]);

  return (
    <>
      {!isVerificationComplete && (
        <>
          <VerificationButton onClick={handleCreateClaim} />
          <p>
            Scan the QR code to verify your typing accuracy and receive keyboard
            recommendations.
          </p>
        </>
      )}
      {requestUrl && !isVerificationComplete && (
        <>
          <QRCodeDisplay requestUrl={requestUrl} />
          {isLoading && <LoadingFacts />}
        </>
      )}
      {isVerificationComplete && (
        <>
          <TypingResults accuracy={accuracy} wpm={wpm} />
          <KeyboardRecommendations recommendations={keyboardRecommendations} />
        </>
      )}
    </>
  );
}

export default KeyboardRecommender;
