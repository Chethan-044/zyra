🎯 Objective

This project was built as part of my journey to strengthen MERN stack fundamentals, focusing on backend development, authentication, and server-side rendering using EJS.
It demonstrates how a full-stack web application connects the frontend, backend, and database layers to create a complete workflow.

⚙️ Functionality
🧑‍💼 Admin

Login to the /owners/admin dashboard

Add new products with image upload, price, discount, and color

Products are stored in MongoDB (including image buffer data)

Flash message confirms successful creation

🧑‍💻 User

Register, login, and logout securely using JWT

Browse products listed by the admin

Add products to the cart

Cart automatically calculates discount and platform fee before checkout


🧱 Core Concepts Implemented

🔐 Authentication & Authorization using JWT stored in cookies

🧩 Session Handling with express-session and connect-flash

🖼️ File Uploads via Multer (memory storage)

🧭 RESTful API Design for modular route management

🧠 MVC Architecture ensuring separation of concerns

🎨 Dynamic Server-Side Rendering with EJS

🗃️ Database Modeling using Mongoose schemas & validations


🛠️ Key Files & Roles
File	Description
app.js	Entry point – sets up middleware, routes, and session management
config/mongoose-connection.js	Connects MongoDB using config for flexible environments
config/multer-config.js	Handles image uploads using Multer memory storage
controllers/authController.js	Manages user registration & login using bcrypt + JWT
models/product-model.js	Defines schema and validation for product management
views/shop.ejs	Renders products dynamically for users
views/createproducts.ejs	Admin interface for adding new products


🧩 What I Learned

Implemented user authentication and token-based security

Structured routes and controllers for scalability

Managed sessions, cookies, and flash messages in Express

Processed form data and file uploads with Multer

Applied EJS for modular, reusable UI components

Built a scalable backend ready for feature expansion



💡 Future improvement

🔑 Add admin authentication

🔍 Implement sort, filter, and search options

🧾 Introduce product categories & pagination

👤 Build user dashboard for order history and profile management

💳 Integrate payment gateway (Stripe/Razorpay) for checkout
