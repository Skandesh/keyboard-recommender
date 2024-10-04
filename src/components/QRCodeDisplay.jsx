import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeDisplay({ requestUrl }) {
  return (
    <div className="qr-container">
      <h2>Scan this QR code to start the verification process:</h2>
      <div className="qr-code">
        <QRCode value={requestUrl} />
      </div>
    </div>
  );
}

export default QRCodeDisplay;
