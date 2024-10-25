// consumer.js
const amqp = require("amqplib");

async function consumeMessages() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "task_queue";

  await channel.assertQueue(queue, { durable: true });
  console.log(`Waiting for messages in ${queue}. To exit, press CTRL+C`);

  channel.consume(
    queue,
    (msg) => {
      const message = msg.content.toString();
      console.log(`Received message: ${message}`);

      // Simula o processamento da tarefa
      setTimeout(() => {
        console.log(`Processed message: ${message}`);
        channel.ack(msg);
      }, 1000);
    },
    { noAck: false }
  );
}

consumeMessages().catch(console.error);
