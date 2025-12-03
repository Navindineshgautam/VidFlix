# 🎬 VidFlix – Next-Gen OTT Streaming Platform

VidFlix is a full-fledged OTT (Over-The-Top) video streaming platform inspired by Netflix, built using **Angular 20**, **NgRx**, **Tailwind CSS**, **WebRTC**, and **Socket.IO**.  
It provides on-demand streaming, adaptive video playback, and live broadcasting capabilities — all in a modern, scalable architecture suitable for real-world production use.

---

## 🚀 Features

### 🎥 Core Streaming
- **Custom Video Player** using `HTML5 Video API` + `hls.js`
- **Adaptive Bitrate Streaming (HLS)** – automatically adjusts video quality based on network speed
- Manual quality switching (144p → 1080p)
- Subtitles, PiP mode, full-screen, playback speed control
- Resume playback from last watched timestamp

### 🧭 OTT Experience
- Netflix-style **Home Screen** with carousels
- Trending, Continue Watching, and Recommendations
- Multiple User Profiles (Kids/Adults)
- Search, Filters, Categories, and Watchlist
- Responsive and dynamic UI with Tailwind

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin / User)
- Profile management and personalization

### 🧵 State Management
- **NgRx Store** for global state
- **NgRx Effects** for API orchestration
- Fully reactive streaming UI

### 🛠 Admin Panel
- Upload videos
- Thumbnail generator
- Categorize and tag content
- Publish/unpublish content

### 🔴 Live Streaming Module (WebRTC)
- Host live streams using WebRTC
- Real-time communication over Socket.IO
- Live chat + reaction badges
- Live viewer count
- Switch between live and VoD modes

### ⚡ Performance & DX
- Lazy-loaded modules and route-level code splitting
- Smart caching, debounced searches
- Lighthouse-optimized streaming UI
- Preloading strategies for seamless UX

---

## 🏗️ Tech Stack

### **Frontend**
| Tech | Purpose |
|------|---------|
| **Angular 20** | SPA framework, standalone components |
| **NgRx** | State management (Store + Effects + Entity) |
| **Tailwind CSS** | UI styling |
| **RxJS** | Reactive programming |
| **hls.js** | Adaptive video streaming |
| **WebRTC** | Live streaming capability |
| **Socket.IO Client** | Real-time chat & stream events |
| **Angular Material / Radix Components** | UI components (optional) |
| **FFmpeg.wasm (optional)** | Client-side video processing |

### **Backend (Flexible)**
- **Node.js + Express**
- **Socket.IO Server**
- **Firebase / Supabase** (Authentication, storage, analytics)
- **Cloudflare R2 or AWS S3** (video storage)
- **CDN support** (Cloudflare/Akamai) for real streaming optimization

