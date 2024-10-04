import React from 'react';
import useReclaimVerification from '../hooks/useReclaimVerification';
import VerificationButton from './VerificationButton';
import QRCodeDisplay from './QRCodeDisplay';
import TypingResults from './TypingResults';
import KeyboardRecommendations from './KeyboardRecommendations';

function KeyboardRecommender() {
  const {
    requestUrl,
    isVerificationComplete,
    accuracy,
    wpm,
    keyboardRecommendations,
    handleCreateClaim,
  } = useReclaimVerification();

  return (
    <>
      {!isVerificationComplete && (
        <>
          <VerificationButton onClick={handleCreateClaim} />
          <p>
            Scan the QR code below to verify your typing accuracy and receive
            keyboard recommendations.
          </p>
        </>
      )}
      {requestUrl && !isVerificationComplete && (
        <QRCodeDisplay requestUrl={requestUrl} />
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
