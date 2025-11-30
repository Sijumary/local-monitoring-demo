A simple local monitoring setup using Node.js, Prometheus, and Node Exporter.

This project demonstrates how to expose custom application metrics and system metrics, scrape them using Prometheus, and visualize them later in Grafana.
Project Structure
local-monitoring-demo/
│
├── docker-compose.yml
├── prometheus.yml
│
└── app/
    ├── server.js
    ├── package.json
    └── Dockerfile

🧰 Prerequisites

Make sure you have the following installed:

Docker Desktop → https://www.docker.com/products/docker-desktop

Node.js + npm → https://nodejs.org

A code editor (VS Code recommended)

Setup Instructions
1. Clone the Repository
git clone https://github.com/Sijumary/local-monitoring-demo.git
cd local-monitoring-demo

2. Build and Start All Services
docker compose up --build


This will start:

Service	Port	Description
Node App	3000	Custom metrics endpoint /metrics
Prometheus	9090	Prometheus UI
Node Exporter	9100	System metrics
Architecture Diagram: 
            ┌─────────────────────┐
            │      Node App       │
            │  (Custom Metrics)   │
            │   http://localhost:3000/metrics
            └───────────┬─────────┘
                        │
                        ▼
            ┌─────────────────────┐
            │     Prometheus      │
            │ Scrapes metrics from│
            │ App + Node Exporter │
            └───────────┬─────────┘
                        │
                        ▼
            ┌─────────────────────┐
            │    Node Exporter    │
            │ System Metrics 9100 │
            └─────────────────────┘




