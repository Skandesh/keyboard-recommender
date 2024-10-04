# Keyboard Recommender

Keyboard Recommender is a React-based web application that provides personalized keyboard recommendations based on a user's typing speed and accuracy data from Monkeytype.

## Key Features

- **Zero-Knowledge Proofs**: Utilizes zero-knowledge proofs to verify the authenticity of data from Monkeytype, ensuring user privacy and data integrity.
- **Reclaim Protocol Integration**: Leverages the Reclaim Protocol to securely retrieve and verify user data from Monkeytype without compromising user privacy.

## Additional Features

- Retrieves user's typing data (WPM and accuracy) from Monkeytype
- Generates a QR code for secure data verification
- Provides personalized keyboard recommendations based on typing performance
- Displays Amazon affiliate links for easy purchase of recommended keyboards
- Styled to match Monkeytype's color scheme

## How It Works

1. The app uses the Reclaim Protocol to initiate a secure data retrieval process from Monkeytype.
2. Zero-knowledge proofs are employed to verify the authenticity of the retrieved data without exposing the actual data.
3. Once verified, the app uses the typing statistics to generate personalized keyboard recommendations.
4. Users can view their verified typing stats and explore recommended keyboards with affiliate links.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/keyboard-recommender.git
   cd keyboard-recommender
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `src/config/index.js` file with your Reclaim Protocol and Amazon Affiliate credentials:

   ```javascript
   export const RECLAIM_CONFIG = {
     APP_ID: 'YOUR_APP_ID',
     APP_SECRET: 'YOUR_APP_SECRET',
     PROVIDER_ID: 'YOUR_PROVIDER_ID',
   };

   export const AFFILIATE_ID = 'YOUR_AMAZON_AFFILIATE_ID';
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the app in your web browser.
2. Click the "Get Monkeytype Data" button.
3. Scan the generated QR code with your mobile device to initiate the zero-knowledge proof verification process.
4. Once verified, view your typing statistics and personalized keyboard recommendations.
5. Click on the "View on Amazon" buttons to check out the recommended keyboards.

## Technologies Used

- React
- Reclaim Protocol
- react-qr-code
- CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
