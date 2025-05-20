
# Identity Data Integration API

A simple REST API built with TypeScript and Express to accept identity data, validate, transform, and return standardized data.

---

## Features

- Accepts identity JSON payloads with user info
- Validates required fields
- Transforms data into a standardized format for data warehouse
- Proper error handling
- Unit tests for transformation logic using Mocha + Chai

---

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

---

## Setup & Installation

1. Clone the repository:

   ```
   git clone <repo-url>
   cd identity-api
```

2. Install dependencies:

   ```
   npm install
   ```

---

## Scripts

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `npm run dev`   | Run the server with `ts-node` (no build) for development |
| `npm run build` | Compile TypeScript source to JavaScript (in `/dist`)     |
| `npm start`     | Run the compiled JavaScript server from `/dist`          |
| `npm test`      | Run unit tests with Mocha and Chai                       |

---

## Running the server

### Development mode (no build, faster feedback):

```
npm run dev
```

Server will start on [http://localhost:3000](http://localhost:3000)

---

### Production mode (compiled):

```
npm run build
npm start
```

---

## API Endpoint

`POST /identity`

**Request body (JSON):**

```
{
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "systemSource": "string",
  "additionalData": { }
}
```

* All fields except `additionalData` are required.

---

**Response body (JSON):**

```
{
  "id": "generated-uuid",
  "userId": "normalized-user-id",
  "fullName": "combined first and last name",
  "contactEmail": "email",
  "sourceSystem": "system source",
  "sourceData": { },
  "processingTimestamp": "current timestamp"
}
```

---

## Testing

Tests are written in TypeScript using Mocha and Chai.

Run tests with:

```
npm test
```

---

## Project Structure

```
src/
  routes/
    identity.ts         # Express route for /identity
  transformers/
    identityTransformer.ts
    identityTransformer.test.ts
  validators/
    identityValidator.ts
package.json
tsconfig.json
```

---

## Notes

* Make sure to run `npm run build` before `npm start`.
* Use `npm run dev` for local development to skip build step.
* Tests are located next to their corresponding source files for easier maintenance.
```
