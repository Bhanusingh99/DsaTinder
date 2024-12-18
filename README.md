# Tinder-like App for Software Engineers

## Overview

This is a unique social networking platform specifically designed for software engineers. The app allows users to connect with like-minded professionals through features like swipe-based matching, personalized feeds, and real-time communication (chat and video calls). Whether you're looking to make friends, build your professional network, or collaborate on projects, this app is your go-to solution.

---

## Features

### 1. Swipe Functionality

- **Right Swipe**: Express interest in connecting with another software engineer.
- **Left Swipe**: Pass on a connection.
- **Match**: When both users swipe right, a connection is established.

### 2. User Profiles

- Comprehensive profiles showcasing:
  - Skills
  - Current roles
  - Open-source contributions
  - Interests
  - Social media links (GitHub, LinkedIn, etc.)

### 3. Personalized Feed

- Stay updated with:
  - Industry news
  - Trending technologies
  - User-shared posts (blogs, projects, achievements).

### 4. Real-Time Chat and Video Calls

- Instant messaging with markdown support for code snippets.
- High-quality video calls for live collaboration and networking.

### 5. Notifications

- Stay informed with updates on matches, messages, and feed activities.

### 6. Privacy and Security

- Secure authentication with JWT.
- End-to-end encryption for chats and video calls.

---

## Technology Stack

### Frontend

- **Framework**: [Vite](https://vitejs.dev/) (React-based)
- **UI Styling**: Tailwind CSS, Framer Motion for animations
- **State Management**: Zustand
- **Routing**: React Router

### Backend

- **Framework**: Express.js
- **Database**: MongoDb with Mongoose
- **Real-Time Features**: Socket.IO, WebRtc
- **Authentication**: JWT & OAuth (GitHub, Google)

### DevOps

- **Deployment**: Docker
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus

## How to Run the Project

### Prerequisites

- Node.js (v18+)
- Docker (for containerized deployment)

### Steps to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Bhanusingh99/DsaTinder.git
   cd DsaTinder
   ```

2. **Install Dependencies**:

   - Frontend:
     ```bash
     npm install
     ```
   - Backend:
     ```bash
     npm install
     ```

3. **Set Up Environment Variables**:

4. **Run the Development Servers**:

   - Frontend:
     ```bash
     npm run dev
     ```
   - Backend:
     ```bash
     npm run dev
     ```

5. **Access the App**:
   Open `http://localhost:5173` in your browser.

---

## Testing

- **Frontend**: Using Jest
- **Backend**: Using Mocha
- **E2E Testing**: Cypress

Run all tests:

```bash
npm test
```

---

## Deployment

1. **Docker Build**:

   ```bash
   docker-compose up --build
   ```

2. **Production Build**:
   - Frontend:
     ```bash
     npm run build
     ```
   - Backend:
     ```bash
     npm run build
     ```

---

## Contribution Guidelines

1. Fork the repository and create a new branch.
2. Follow the established code style and naming conventions.
3. Write tests for new features or fixes.
4. Submit a pull request with a detailed description.

---

## Roadmap

- Add AI-powered matching based on skills.
- Implement group chat and forums for discussions.
- Introduce gamification (e.g., badges for contributions).
- Support for open-source project collaboration.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For inquiries or support, contact us at [bhanusngh12345@gmail.com](bhanusngh12345@gmail.com).
