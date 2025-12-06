# 🛍️ MERN Stack E-Commerce Application (EJS + Node.js + MongoDB)

A full-stack MERN-style project focused on backend development, authentication, and server-side rendering using **EJS**.  
This application demonstrates complete workflow integration between **frontend, backend, and database layers**.

---

## 🎯 Objective

This project was built as part of my journey to strengthen **MERN stack fundamentals**, focusing mainly on:

- Backend architecture  
- Authentication  
- Session handling  
- Server-side rendering (SSR)  
- Database modeling  

It represents how a real-world application connects **UI → Backend → Database** in a seamless workflow.

---

## ⚙️ Functionality

### 🧑‍💼 **Admin Features**

- Login to the `/owners/admin` dashboard  
- Add new products with:
  - Image upload  
  - Price  
  - Discount  
  - Color options  
- Products stored in MongoDB (includes **image buffer data**)  
- Flash message confirms successful product creation  

---

### 🧑‍💻 **User Features**

- Secure Register, Login, Logout using **JWT**
- Browse products added by the admin
- Add items to cart
- Cart automatically calculates:
  - Discount  
  - Platform fee  
- Checkout-ready cart system  

---

## 🧱 Core Concepts Implemented

| Concept | Description |
|---------|-------------|
| 🔐 **JWT Authentication** | Token-based login stored in HTTP-only cookies |
| 🧩 **Sessions & Flash Messages** | Using `express-session` + `connect-flash` |
| 🖼️ **Multer Uploads** | Memory storage for product images |
| 🧭 **RESTful Routing** | Clean and modular route structure |
| 🧠 **MVC Architecture** | Proper separation of controllers, models, views |
| 🎨 **EJS Server-Side Rendering** | Dynamic templates and partials |
| 🗃️ **Mongoose Modeling** | Schema validation & MongoDB integration |

---

## 🛠️ Key Files & Their Roles

| File | Description |
|------|-------------|
| `app.js` | Entry point — sets up middleware, sessions, cookies, and routes |
| `config/mongoose-connection.js` | Connects MongoDB with environment support |
| `config/multer-config.js` | Handles image uploads using Multer memory storage |
| `controllers/authController.js` | Manages user register/login with bcrypt + JWT |
| `models/product-model.js` | Product schema, validation & DB structure |
| `views/shop.ejs` | Renders all products to users dynamically |
| `views/createproducts.ejs` | Admin form for adding new products |

---

## 🧩 What I Learned

- Implemented secure user authentication using **JWT**
- Built scalable **routes + controllers** using MVC
- Managed sessions, cookies, and flash messaging in Express
- Processed forms and image uploads using **Multer**
- Rendered dynamic pages using **EJS partials & templates**
- Designed a backend system ready for future enhancements

---

## 💡 Future Improvements

- 🔑 Add dedicated **admin authentication**
- 🔍 Add **sort, filter, and search** functionality
- 🧾 Product categories + **pagination**
- 👤 User dashboard for **order history + profile**
- 💳 Integrate Payment Gateways (Razorpay/Stripe)

---

## 📌 Summary

This project helped strengthen:

- Backend fundamentals  
- Authentication logic  
- Data modeling with MongoDB  
- Server-side rendering  
- File handling  
- Real-world app structuring  

---

