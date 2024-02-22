**Payment Gateway API Using Node.js**
This project implements a payment gateway API using Node.js, Express, and the Stripe API for processing payments. It allows clients to securely make payments and receive payment intents for processing payments.

**Features**
**Payment Processing**: Accept payments securely through the Stripe API.
**API Endpoints**: Provides API endpoints for processing payments and retrieving Stripe API keys.
**Error Handling**: Handles errors gracefully using async error handling middleware.

**Installation**
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/payment-gateway-api.git

**Install dependencies:**
bash
Copy code
cd payment-gateway-api
npm install

**Set up environment variables:**
Create a .env file in the backend/config directory and define the following variables:
dotenv
Copy code
PORT=5000
STRIPE_API_KEY=your_stripe_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
Replace your_stripe_api_key and your_stripe_secret_key with your actual Stripe API key and secret key.

**Start the server:**
bash
Copy code
npm start
The server should now be running at http://localhost:5000.

**API Endpoints**
POST /api/v1/payment/process: Endpoint for processing payments. Requires a valid payment amount in the request body.

**Usage**
To make a payment, send a POST request to the /api/v1/payment/process endpoint with the payment amount in the request body.

**Example request:**
http
Copy code
POST /api/v1/payment/process HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "amount": 1000
}
**Dependencies**
Express: Fast, unopinionated, minimalist web framework for Node.js.
dotenv: Loads environment variables from a .env file into process.env.
stripe: Official Stripe API client for Node.js.
nodemon: Utility that monitors for changes and automatically restarts the server.
Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or features.



