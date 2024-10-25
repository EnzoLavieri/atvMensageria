// producer.js
const amqp = require("amqplib");
const express = require("express");
const app = express();
const PORT = 3000;

async function sendMessageToQueue(message) {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "task_queue";

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
  console.log(`Message sent: ${message}`);

  setTimeout(() => {
    connection.close();
  }, 500);
}

app.use(express.json());

app.post("/send", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).send("Message is required");
  await sendMessageToQueue(message);
  res.send("Message sent to queue!");
});

app.listen(PORT, () => {
  console.log(`Producer running on http://localhost:${PORT}`);
});
