# HackHardware

The official website for **HackHardware**, a student organization at Boston University focused on hardware, electronics, and hands-on engineering.

The site provides information about the organization, upcoming events, executive board members, frequently asked questions, and ways to get involved. It also includes a contact system that allows visitors to send messages directly to the organization.

**Live Site:** https://hack-hardware.vercel.app/

## Features

- Responsive multi-page interface built with React and TypeScript
- Information about HackHardware and its activities
- Event listings and event information
- Executive board profiles
- FAQ page
- Contact form with server-side email delivery
- Google OAuth and Gmail API integration
- Animated UI elements using Framer Motion
- Client-side routing with React Router
- Responsive styling with styled-components
- Serverless API endpoints deployed alongside the frontend

## Tech Stack

### Frontend

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **styled-components**
- **Framer Motion**
- **Lucide React**

### Backend / APIs

- **Node.js**
- **Google OAuth 2.0**
- **Gmail API**
- **Vercel Serverless Functions**

### Deployment

- **Vercel**

## Project Structure

```text
HackHardware/
├── api/
│   ├── auth-google.js
│   ├── oauth2callback.js
│   └── send-email.js
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contact.tsx
│   │   ├── Events.tsx
│   │   ├── ExecBoard.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── LoginWithGoogleButton.tsx
│   │   ├── Nav.tsx
│   │   └── PhotoSlide.tsx
│   │
│   ├── App.tsx
│   ├── GlobalStyle.ts
│   └── main.tsx
│
└── package.json
```

## Contact Form Architecture

The contact form uses a serverless API endpoint rather than exposing email credentials or Google API credentials in the browser.

```text
Contact Form
     │
     │ POST request
     ▼
Vercel Serverless Function
     │
     ▼
Google OAuth 2.0
     │
     ▼
Gmail API
     │
     ▼
HackHardware Email
```

Form submissions are validated by the API before an email is constructed and sent through the Gmail API. OAuth credentials and tokens are stored as environment variables so sensitive authentication information remains on the server.

## Running Locally

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/brendanmcoyne/HackHardware.git
cd HackHardware
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will start the application locally and display the development URL in the terminal.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Runs the TypeScript compiler and creates a production build.

### Linting

```bash
npm run lint
```

Runs ESLint across the project.

### Preview

```bash
npm run preview
```

Locally previews the production build.
