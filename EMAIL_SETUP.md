# Email Configuration Setup Guide

## EmailJS Setup Instructions

To make the contact form functional and receive emails directly to your inbox, follow these steps:

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID** (you'll need this)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down the **Template ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

### 5. Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test the Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your email inbox for the message

## Security Notes
- EmailJS free plan allows 200 emails per month
- The `.env.local` file is already in `.gitignore` so your credentials won't be committed to Git
- For production, make sure to set these environment variables in your hosting platform

## Troubleshooting
- If emails aren't being received, check your spam folder
- Verify all IDs are correct in the `.env.local` file
- Check the EmailJS dashboard for any error logs
- Make sure your email service is properly connected in EmailJS

## Alternative Solution
If you prefer a different email service, you can also use:
- Formspree (https://formspree.io/)
- Netlify Forms (if hosting on Netlify)
- SendGrid
- Or any other form handling service

The current implementation will fall back to opening the user's email client if EmailJS fails.
