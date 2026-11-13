# Playwright MCP Server Setup in VS Code

A local login demo for practicing browser testing with Playwright and the Playwright MCP server.

## Run the demo

```powershell
npm install
npm run dev
```

Open http://127.0.0.1:4173 in a browser.

## Run the Playwright test

Install Microsoft Edge and run:

```powershell
npm run install:browsers
npm test
```

The test checks both an unsuccessful login and the demo account:

- Email: `demo@example.com`
- Password: `Playwright123!`

## Configure the Playwright MCP server in VS Code

The workspace MCP configuration is in `.vscode/mcp.json`. It launches the Playwright MCP server with Microsoft Edge.
