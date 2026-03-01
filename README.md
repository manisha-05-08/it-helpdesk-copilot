# IT Helpdesk Copilot Agent

An AI-powered IT helpdesk assistant built with **Microsoft Copilot Studio** and a custom **Node.js/Express** backend API. The agent collects issue details through a conversational interface and automatically creates support tickets via REST API integration.

## Project Overview

This project demonstrates a full-stack integration between a low-code AI agent (Microsoft Copilot Studio) and a real backend API, following enterprise-style architecture patterns.

### How It Works

```
User → Copilot Studio Agent → REST API (Express.js) → Ticket Created → Response to User
```

1. User starts a conversation with the Copilot agent (e.g., "create ticket")
2. The agent asks for ticket details: title, description, and priority
3. Agent sends the data to the backend API via HTTP POST request
4. Backend creates the ticket and returns a ticket ID
5. Agent displays the confirmation to the user

## Tech Stack

| Layer | Technology |
|-------|-----------|
| AI Agent | Microsoft Copilot Studio |
| Backend API | Node.js, Express.js |
| API Specification | OpenAPI 3.0 |
| API Testing | Postman |
| Tunneling | ngrok |
| Protocol | REST (JSON) |

## Project Structure

```
helpdesk-backend/
├── index.js              # Express server with ticket API endpoints
├── package.json          # Node.js dependencies
└── openapi-spec.json     # OpenAPI specification for Copilot Studio integration
```

## API Endpoints

### POST /api/tickets
Creates a new support ticket.

**Request Body:**
```json
{
  "title": "Login not working",
  "description": "Cannot log into my email account",
  "priority": "High"
}
```

**Response:**
```json
{
  "ticketId": "T1000",
  "status": "OPEN"
}
```

### GET /api/tickets
Returns all tickets created in the current session.

**Response:**
```json
[
  {
    "id": "T1000",
    "title": "Login not working",
    "description": "Cannot log into my email account",
    "priority": "High",
    "status": "OPEN",
    "createdAt": "2026-03-01T15:30:00.000Z"
  }
]
```

## Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/your-username/it-helpdesk-copilot.git
cd it-helpdesk-copilot
npm install
```

### 2. Run the Server

```bash
node index.js
```
Server starts on `http://localhost:3000`

### 3. Test with Postman

- Method: POST
- URL: `http://localhost:3000/api/tickets`
- Body (JSON): `{ "title": "Test", "description": "Test issue", "priority": "High" }`

### 4. Expose with ngrok (for Copilot Studio)

```bash
ngrok http 3000
```
Copy the generated `https://_____.ngrok-free.app` URL.

### 5. Connect to Copilot Studio

1. Open [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)
2. Create a new agent named "IT Helpdesk Copilot"
3. Create a topic "Create Support Ticket" with trigger phrases
4. Add question nodes for title, description, and priority
5. Upload the `openapi-spec.json` as a REST API tool (update the server URL with your ngrok URL)
6. Map the input variables and add a response message
7. Test the full flow

## Copilot Studio Agent Flow

```
Trigger ("create ticket", "IT issue", "raise support request")
    ↓
Ask: "What is the title of your issue?"  →  ticketTitle
    ↓
Ask: "Please describe the issue"  →  ticketDescription
    ↓
Ask: "What is the priority? (High, Medium, Low)"  →  ticketPriority
    ↓
Call API: POST /api/tickets (with variables)
    ↓
Message: "Your ticket {ticketId} has been created! Status: {status}"
```

## Key Learnings

- Building REST APIs with Express.js
- API testing and debugging with Postman
- Creating conversational AI agents with Microsoft Copilot Studio
- Connecting low-code platforms to custom code via OpenAPI specifications
- Using ngrok for local development tunneling
- End-to-end enterprise integration architecture

## Author

**Manisha Parmar**
