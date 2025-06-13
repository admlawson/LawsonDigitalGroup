# Lawson Digital Group Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Web3Forms Configuration
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### Getting Your Web3Forms Access Key

1. Go to [Web3Forms.com](https://web3forms.com/)
2. Sign up for a free account
3. Create a new form
4. Copy your access key
5. Add it to your `.env.local` file

## Contact Form Features

- ✅ **Web3Forms Integration** - Serverless form handling
- ✅ **Multiple Form Types** - Strategy calls, quotes, audits, consultations
- ✅ **Spam Protection** - Built-in honeypot and validation
- ✅ **Mobile Responsive** - Works perfectly on all devices
- ✅ **Auto Calendar Booking** - Redirects to Cal.com after submission
- ✅ **Professional Design** - Matches your blue brand theme

## Development

```bash
npm install
npm run dev
```

## Deployment

The site is optimized for deployment on Vercel, Netlify, or any static hosting provider.

Make sure to add your environment variables to your hosting provider's settings.