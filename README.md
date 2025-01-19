# Email Sender with Brevo API

A simple Node.js application demonstrating transactional email sending using the Brevo (formerly Sendinblue) API.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Marshal-Emanuel/mailsender.git
    cd mailsender
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure environment:
    Create a .env file in the project root:
    ```
    BREVO_API_KEY=your-api-key
    TO_EMAIL=recipient@example.com
    TO_NAME=Recipient Name
    FROM_EMAIL=sender@example.com
    FROM_NAME=Sender Name
    ```

## Usage

### Setting Up Brevo Account
1. Log in to Brevo
2. Go to SMTP & API in Settings
3. Generate or copy your API key

### Sending a Test Email
```bash
npm run start
```
Check the terminal output for success or errors.

## Troubleshooting
- Ensure BREVO_API_KEY is valid.
- Make sure FROM_EMAIL is verified in Brevo.
- Run npm install if any module errors appear.
