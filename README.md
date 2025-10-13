# Full-Stack Video Streaming Platform 🎬

![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge\&logo=amazon-aws)
![Kafka](https://img.shields.io/badge/Kafka-231F20?style=for-the-badge\&logo=apachekafka)
![FFmpeg](https://img.shields.io/badge/FFmpeg-232323?style=for-the-badge\&logo=ffmpeg)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=nextdotjs)

## 🚀 About the Project

**Full-Stack Video Streaming Platform** is a scalable, self-hosted system for video upload, processing, and adaptive streaming.

**Upload. Transcode. Stream.** — Self-hosted modular video streaming platform.

The platform supports chunked uploads to AWS S3, Kafka-driven FFmpeg transcoding, and HLS adaptive streaming for smooth playback.

---

## ✨ Features

* 🎥 **Chunked Video Uploads** — Reliable multipart uploads to AWS S3.
* ⚡ **Kafka** — Message queue for transcoding & HLS processing pipeline.
*  🎞 **FFmpeg** — Converts raw uploads into adaptive bitrate `.m3u8 / .ts` streams
* ☁️ **S3 Storage** — Store raw and processed video assets.
* 📡 **Adaptive Streaming (HLS)** — Smooth playback with `.m3u8` and `.ts` segments.
*  🔎 **OpenSearch** — Video metadata indexing & fast full-text search
* 🔍 **Real-Time Search** — Lambda + API Gateway for querying video metadata.
* 🧩 **Microservice Architecture** — Decoupled upload, transcoder, and watch services.
* 📈 **Scalable** — Handles thousands of concurrent uploads and streams.

---

## 🏗 Tech Stack

### 🎨 Frontend

* **Next.js** — React dashboard and video player
* **Tailwind CSS** — Styling framework

### ⚙ Backend

* **Node.js / Express** — Core API services
* **Kafka / Aiven** — Event-driven video processing
* **PostgreSQL (Neon.tech or local)** — Video metadata

### 🛠 Infrastructure

* **AWS S3** — Video file storage
 **OpenSearch** — Video metadata indexing & fast full-text search
* **AWS Lambda + API Gateway** — Serverless search handler that queries OpenSearch

---

## 🔧 Installation & Setup

> 🔐 **AWS Account Required** for S3, Lambda, API Gateway. Kafka can be local or via Aiven. PostgreSQL via Neon.tech or local.

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Krishh20/Youtube
```

### 2️⃣ Backend Services

This repo contains **three backend services**:

* `/uploadService` — Upload videos and produce Kafka messages for transcoding
* `/transcoder_service` — Consume messages, transcode videos, push results back
* `/watch_service` — Fetch video metadata and deliver to frontend

#### Setup Each Service

```bash
cd uploadService
cp .env.example .env
# Fill: AWS S3, Kafka, PostgreSQL credentials
npm install
npm run dev
```

Repeat for `transcoder_service` and `watch_service`.

### 3️⃣ Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

### 4️⃣ Optional: Local PostgreSQL

If not using Neon.tech, update `DATABASE_URL` in `.env`:

```
DATABASE_URL=postgresql://user:password@localhost:5432/video_streaming_db
```

### 5️⃣ Trigger Your First Upload

* Open frontend dashboard
* Upload a video
* Watch Kafka-driven transcoding pipeline
* Stream processed video locally via HLS

---

## ⚠ Disclaimer

This project is a custom-built platform for learning, experimentation, and scaling full-stack video streaming systems. **Not affiliated with YouTube or any third party**.
