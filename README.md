🧩 Project Insights
🎯 Objective

This project was built as part of my journey to strengthen MERN stack fundamentals — focusing on backend development, authentication, and server-side rendering using EJS.
It demonstrates how a full-stack web application connects frontend, backend, and database layers to create a complete workflow.

🧱 Core Concepts Implemented

Authentication & Authorization using JWT stored in cookies

Session Handling with express-session and connect-flash

File Uploads & Storage using Multer (memory storage)

RESTful API Design for clean and modular route management

MVC Architecture ensuring separation of concerns

Dynamic Rendering using EJS templates

Database Modeling using Mongoose schemas and validations

🧮 How It Works
🧑‍💼 Admin Flow:

Admin logs into the /owners/admin dashboard

Can create a new product by uploading an image, entering price, discount, and colors

Product gets stored in MongoDB along with image buffer data

Flash message confirms successful creation

🧑‍💻 User Flow:

User registers and logs in securely via JWT

Can browse products listed by the admin

Can add products to cart

Cart auto-calculates discount and platform fee before checkout

🛠️ Key Files & Roles
File	Role
app.js	Entry point – sets up middleware, routes, and session management
mongoose-connection.js	Connects MongoDB using config for environment flexibility
multer-config.js	Handles product image upload via memory storage
authController.js	Manages user registration & login using bcrypt + JWT
product-model.js	Defines schema for product management
views/shop.ejs	Renders all products dynamically
views/createproducts.ejs	Admin UI for creating products
🧩 What I Learned

Handling user authentication and token-based security

Structuring routes and controllers efficiently

Managing sessions, cookies, and flash messages in Express

Working with form data and file uploads

Applying EJS for server-side templating with reusable components

Building an extendable architecture for future scalability

💡 Future improvement

Add admin authentication

Add sort, filter, and search options for better user experience

Introduce product categories & pagination

Create a user dashboard for order history and profile management

Integrate payment gateway (Stripe/Razorpay) for checkout
