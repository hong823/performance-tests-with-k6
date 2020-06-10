# Installation
## Mac
    brew install k6

## Docker
    docker pull loadimpact/k6

# Testing on Local
## Basic
### CLI
    k6 run src/01_basic.js

### Setup Grafana & InfluxDB
    docker-compose up -d

### Export results to InfluxDB
    k6 run src/01_basic.js --out influxdb=http://localhost:8086/loadtestk6

## Stage
    k6 run src/02_stage.js --out influxdb=http://localhost:8086/loadtestk6

## Thresholds
    k6 run src/03_thresholds.js --out influxdb=http://localhost:8086/loadtestk6

## Functional Tests
    k6 run src/04_functional_tests.js

# Testing on Kubernetes
## Basic
    sh test.sh

## Modify resource
    sh deploy.sh