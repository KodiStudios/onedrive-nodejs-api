# OneDrive Node.js API

Minimal example showing how to use the OneDrive API via Microsoft Graph in TypeScript, running directly on Node.js 24.

## Prerequisites

- [Node.js 24+](https://nodejs.org/) (runs TypeScript natively)
- A Microsoft account

## Get an Access Token

1. Go to [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
2. Sign in with your Microsoft account
3. Copy the access token from the **Access token** tab

## Run

```bash
npm install
node index.ts --token YOUR_TOKEN
```

This will print your profile display name and the contents of your OneDrive root folder.
