const express = require("express");
const client = require("prom-client");

const app = express();
const register = new client.Registry();

// Default Node.js metrics
client.collectDefaultMetrics({ register });

// Custom metric
const customCounter = new client.Counter({
  name: "app_requests_total",
  help: "Total number of requests handled by the custom app",
});
register.registerMetric(customCounter);

// Normal endpoint
app.get("/", (req, res) => {
  customCounter.inc();
  res.send("Hello! Monitoring system is running.");
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.send(await register.metrics());
});

app.listen(3000, () => {
  console.log("Custom metrics app running on port 3000");
});
