const { Kafka } = require("kafkajs");

// kafka client
const kafka = new Kafka({
  clientId: "producer-consumer-demo",
  brokers: ["localhost:9092"],
});

const producerRun = async () => {
  // kafka producer
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: "demo-topic",
    messages: [
      {
        value: "Baby princess x",
      },
    ],
  });

  await producer.disconnect();
};

const startConsumer = async () => {
  const consumer = kafka.consumer({ groupId: "group-one" });
  await consumer.connect();
  await consumer.subscribe({ topic: "demo-topic", fromBeginning: true });
};
