import dotenv from 'dotenv';
import SibApiV3Sdk from 'sib-api-v3-sdk';


dotenv.config();


const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;
defaultClient.defaultHeaders = {
    'api-key': process.env.BREVO_API_KEY,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

const sendTransactionalEmail = async () => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.to = [{ 
        email: process.env.TO_EMAIL, 
        name: process.env.TO_NAME 
    }];
    
    sendSmtpEmail.sender = { 
        email: process.env.FROM_EMAIL, 
        name: process.env.FROM_NAME 
    };
    
    sendSmtpEmail.subject = 'Test Email via Brevo API';
    sendSmtpEmail.htmlContent = '<html><body><h1>Hello!</h1><p>This is a test email.</p></body></html>';

    try {
        console.log('Sending email...');
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent:', data);
    } catch (error) {
        console.error(' Error:', error.response?.body || error.message);
    }
};


sendTransactionalEmail().catch(console.error);