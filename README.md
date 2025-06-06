# How to run

## Install dependencies

```bash
cd backend
npm install
```

```bash
cd frontend
npm install
```

## Run application

In one terminal:

```bash
cd backend

npm run start
```

In second terminal:

```bash
cd frontend

npm run start
```
and then press the corresponding key to launch simulator/emulator

*For android you would need to reverse localhost:3000*

```bash
adb reverse 3000:3000
```

# Description

## Backend

Minimal implementation of API build on Nest.js. No DBs - json mocks as data source. Capability to upload and host files (images) locally - when upload an image it will be tracked by VCS.

## Frontend

Minimal integration of API build on Expo. Custom-build UI library and domain-driven structure.
