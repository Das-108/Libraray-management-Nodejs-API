📚 MERN Stack Library Management System (LMS)

A full-stack Library Management System built with the MERN stack (MongoDB, Express, React, Node.js) to manage books, users, and circulation flow (issue & return).

✨ Features
📘 Book Management

Add, view, edit, and delete books

Automatic status updates (e.g., Available, Borrowed)

🔄 Circulation Control

Issue Book: Assign a book to a user with a due date

Return Book: Mark a borrowed book as available

Tracks borrower and due dates

🔐 User Authentication

Secure Login & Signup pages

JWT-based authentication

🛂 Role Management (Conceptual)

System designed for future role-based access (Admin vs. User)

💻 Technologies Used
Category	Technology	Purpose
Frontend	React (Vite)	UI components and rendering
Routing	React Router DOM	Navigation and dynamic routes
Styling	Tailwind CSS	Utility-first styling
Backend	Node.js + Express	Server logic and REST APIs
Database	MongoDB + Mongoose	NoSQL database & ODM
API Client	Axios	HTTP requests from frontend
⚙️ Setup and Installation
📌 Prerequisites

Node.js (LTS recommended)

MongoDB (local or Atlas)

🛠 Backend Setup
1. Clone the Repository
git clone [Your-Repo-URL]
cd your-repo-name

2. Navigate to Backend Directory
cd backend   # or server

3. Install Dependencies
npm install

4. Configure Environment Variables

Create a .env file in the backend root:

PORT=5000
MONGO_URI="mongodb://localhost:27017/lms_db"
JWT_SECRET="yourStrongJWTSecret"

5. Start the Server
npm start


The backend should run at:
👉 http://localhost:5000

🎨 Frontend Setup
1. Navigate to Frontend Directory
cd ../frontend   # or client

2. Install Dependencies
npm install

3. Configure Axios Base URL

Ensure src/api/axiosInstance.js contains:

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
});

4. Start the Frontend
npm run dev


Open the app at:
👉 http://localhost:5173

🚀 API Endpoints

🔐 Authentication
Method	Endpoint	Description
POST	/api/v1/auth/signup	Register new user
POST	/api/v1/auth/login	Login user + token

📘 Books
Method	Endpoint	Description
GET	/api/v1/book	Get all books
GET	/api/v1/book/:id	Get a single book
POST	/api/v1/book/add	Add a new book
PUT	/api/v1/book/:id	Update book details
DELETE	/api/v1/book/:id	Delete a book

🔄 Circulation
Method	Endpoint	Description
POST	/api/v1/book/issue/:id	Issue a book to a user
POST	/api/v1/book/return/:id	Return a borrowed book

📄 Important File Structure
🔹 Frontend
File	Purpose
src/Pages/IndividualBookPage.jsx	Handles book details + return logic (handleReturnedBook)
src/Pages/IssueBook.jsx	Issue form + API call (handleIssueSubmit)
src/App.jsx	All routing (e.g., /issue-book/:id)
🔹 Backend
File	Purpose
server/controllers/book.js	Contains issueBook and returnBook logic