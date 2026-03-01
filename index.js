const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

let tickets = [];
let ticketCounter = 1000;

app.post("/api/tickets", (req, res) => {
  const { title, description, priority } = req.body;

  if (!title || !description || !priority) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const ticket = {
    id: `T${ticketCounter++}`,
    title,
    description,
    priority,
    status: "OPEN",
    createdAt: new Date()
  };

  tickets.push(ticket);

  res.json({
    ticketId: ticket.id,
    status: ticket.status
  });
});
app.get("/api/tickets", (req, res) => {
  res.json(tickets);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});