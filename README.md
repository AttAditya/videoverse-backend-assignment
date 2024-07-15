# Videoverse Backend Assignment

## Video Files REST API

This project provides REST APIs for handling video files, including uploading, trimming, merging, and link sharing with time-based expiry.

## Requirements

- All API calls are authenticated using static API tokens.
- Users can upload videos with configurable limits on size and duration.
  - Maximum size: `5 MB`, `25 MB`.
  - Minimum and maximum duration: `5 secs`, `25 secs`.
- Allows trimming a video.
  - Shorten a previously uploaded video clip from the start or end.
- Allows merging video clips.
  - Stitch a given list of previously uploaded video clips into a single video file.
- Allows link sharing with time-based expiry.
- Includes unit and end-to-end tests.
- Uses SQLite as the database (committed to the repo).
- Provides API documentation as a Swagger endpoint or a Postman Collection JSON.

## Documentation

### Assumptions and Choices

1. **Authentication**: Used JWT for authentication.
2. **Video Handling**: Used FFMPEG-Fluent for video processing (trimming and merging).

## Setup

### Prerequisites

- Node.js (version 20.12.2)
- npm (version 10.5.0)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/videofiles-api.git
    cd videofiles-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the environment variables(Create a `.env` file in the root directory):

    ```properties
    PORT=3000
    JWT_TOKEN_SECRET=your_secret
    MAX_UPLOAD_SIZE=size_in_bytes
    MIN_UPLOAD_DURATION=time_in_milliseconds
    MAX_UPLOAD_DURATION=time_in_milliseconds
    ```

### Running the Server

To start the API server, run:

```bash
npm run dev
```

## API Documentation

API documentation is available via Swagger. Once the server is running, you can access it at:

```
http://localhost:PORT/swagger
```

## Directory Structure

```
videofiles-api/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── index.js
├── package.json
├── package-lock.json
└── swagger.json
```

