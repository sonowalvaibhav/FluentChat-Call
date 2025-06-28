# 💬 FluentChat-Call

A real-time chat and video calling web application built using **Node.js**, **Express**, **MongoDB**, **Tailwind CSS** and **React** primarily. This project enables users to chat, initiate video calls, and manage real-time communication with seamless performance.

## 🚀 Features

- ⚡ Real-time Messaging 
- 📞 Video Calls
- 🔐 User Authentication 
- ⚛️ React-based frontend with TanStack Query for efficient data fetching and caching  
- ⚙️ Fully environment-configurable using `.env` variables  

## 🛠️ Tech Stack

- **Frontend**: React, TanStack Query, Axios, Tailwind CSS  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Stream API 
- **Video Calling and Messaging**: GetStream.io

## ⚙️ Environment Variables

Create a `.env` file in the `frontend/` and `backend/` directories as needed.

### Example `.env` variables for the backend (`/backend/.env`):

```env
PORT=5001
MONGO_URL=your_mongodb_uri_here
CHAT_API_KEY=your_stream_api_key
CHAT_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret_key 

### Example `.env` variables for the frontend (`/frontend/.env`):
```env
VITE_CHAT_API_KEY=your_stream_api_key
## 🧪 Run Locally

### 📥 Clone the project

```bash
git clone https://github.com/sonowalvaibhav/FluentChat-Call.git
cd FluentChat-Call

## 📦 Install Dependencies for frontend and backend

```bash
cd backend
npm install

cd frontend
npm install


## 📦Start frontend and backend

```bash
cd backend
npm run dev

cd frontend
npm run dev

## 🔐 Security Note

Make sure to **never commit your `.env` files**. They contain sensitive information such as API keys, database URLs, and secret tokens.  
Always use `.gitignore` to keep them out of version control.

## 🙋‍♂️ FAQ

### ❓ When someone clones the project, do they need to replace the environment variables (e.g., Mongo URL, CHAT API Key)?

**Yes**, they must replace them with their own credentials:

- **MongoDB URL**: Points to your personal database instance. Others should use their own MongoDB Atlas or local MongoDB setup.
- **CHAT API Key and Secret**: Linked to your Stream Chat project/account. Others need to create their own key from [getstream.io](https://getstream.io).
- **JWT Secret and other keys**: Used for secure token operations. Each developer should define their own secrets for security purposes.
