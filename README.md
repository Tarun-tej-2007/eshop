# E-Commerce Application - Milestone Breakdown

## **Milestone 1: Project Overview**
This project involves the development of a full-stack e-commerce application with a structured **frontend** and **backend**:
- **Frontend:** Handles user interface and experience.
- **Backend:** Manages business logic, database operations, and API integrations.

---

## **Milestone 2: Login Page (React & CSS)**
### **Overview**
Developed a modern, responsive login page using **React.js** and **CSS** with the following features:
- **Email and Password fields**
- **"Remember Me" checkbox**
- **"Forgot Password?" link**
- **Submit button & Sign-up option**
- **Icons for email input and password visibility toggle**

### **Technologies Used**
- **React.js** - Component-based UI development
- **CSS** - Styling for layout and responsiveness
- **React Icons** - Used for email input and password visibility toggle

---

## **Milestone 3: Backend Setup**
### **Overview**
Set up the backend infrastructure, including folder structuring, server configuration, database integration, and error handling.

### **Key Achievements**
1. **Backend Folder Structure:**
   ```
   backend/
   ├── controllers/   # Handles API logic  
   ├── models/        # Defines database schemas  
   ├── routes/        # Manages API endpoints  
   ├── middleware/    # Custom middlewares (error handling, authentication, etc.)  
   ├── config/        # Database connection setup  
   ├── server.js      # Main server file  
   ```
2. **Server Setup:**
   - Implemented **Express.js** for backend API handling.
   - Used **dotenv** to manage environment variables.
   - Configured server to run on **PORT 5000** (or from `.env`).
3. **Database Integration:**
   - Connected backend to **MongoDB Atlas** using **Mongoose**.
   - Created models for **Products, Users, and Orders**.
4. **Error Handling:**
   - Implemented middleware for structured error responses.
   - Improved debugging with meaningful error messages.

### **Technologies Used**
- **Node.js & Express.js** - Backend framework
- **MongoDB Atlas & Mongoose** - Database management
- **dotenv** - Environment variable management
- **CORS & Body-Parser** - Middleware for API requests

---

## **Milestone 4: User Model, Controller & File Uploads**
### **Overview**
- Defined **User Model** for MongoDB.
- Implemented **User Controller** for API logic.
- Integrated **Multer** for image/file uploads.

### **Key Achievements**
1. **User Model (User.js):**
   - Defined user schema with fields:
     ```js
     name, email, password (bcrypt-encrypted), role (Admin/User), profileImage
     ```
2. **User Controller:**
   - Created API endpoints for user-related operations.
3. **File Upload (Multer):**
   - Configured file upload support for user profile images and product images.

---

## **Milestone 5: Sign-Up Page & Form Validation**
### **Overview**
Developed a **Sign-Up Page** with form validation to ensure correct data entry.

### **Key Achievements**
1. **Form Fields:**
   - Name: Required
   - Email: Valid email format check
   - Password: Minimum 8 characters, one uppercase letter, one number
   - Real-time validation feedback

### **Technologies Used**
- **React.js** - Frontend development
- **CSS** - Form styling
- **JavaScript (ES6)** - Form validation logic

---

## **Milestone 6: Secure User Signup & Password Encryption**
### **Overview**
Implemented **secure user signup** with encrypted password storage.

### **Key Achievements**
1. **Signup API Endpoint (`/api/auth/signup`)**
   - Accepts **Name, Email, Encrypted Password, User Role (Default: User)**
   - Validates user input before storing.
2. **Password Encryption:**
   - Used **bcryptjs** for hashing passwords.
3. **Database Storage:**
   - Stored user data securely in MongoDB.
4. **API Testing:**
   - Verified user signup via **Postman**.

### **Technologies Used**
- **Node.js & Express.js**
- **MongoDB Atlas & Mongoose**
- **bcryptjs** - Secure password hashing
- **dotenv** - Environment variables
- **Postman** - API testing

---

## **Milestone 7: Backend Endpoint for User Login**
### **Overview**
Implemented backend authentication for **user login**.

### **Process**
1. **User submits email & password**
2. **Backend retrieves user details**
3. **Password verification using bcrypt**
4. **Successful login or error message**

### **Security Measures**
- **Password encryption using bcrypt**
- **Prevents password theft & enhances privacy**
- **Meets security compliance (GDPR, PCI-DSS)**

---

## **Milestone 8: Product Card Components**
### **Overview**
- Developed a **reusable product card component** for displaying products.

### **Key Achievements**
1. **Reusable Card Component:**
   - Displays **name, price, image, and description**.
2. **Dynamic Rendering:**
   - Used `.map()` to iterate over product data.
3. **Consistent Layout:**
   - Ensured uniform styling across all cards.

### **Technologies Used**
- **React.js**
- **CSS**

---

## **Milestone 9: Product Input Form & Image Upload**
### **Overview**
Developed a **product input form** with multiple image upload functionality.

### **Features**
- **Form Validation**
- **Multiple Image Uploads**
- **Real-time Image Previews**


---

## **Milestone 10: Product Schema & API Endpoint**
### **Overview**
Defined **Product Schema** using Mongoose and implemented a **POST API endpoint**.

### **Key Achievements**
1. **Product Schema (Mongoose):**
   ```js
  const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    images: { type: [String], required: true },
    email: { 
        type: String, 
        required: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'] 
    }
}, { timestamps: true });

   ```
2. **API Endpoint (`/api/products`)**
   - Validates and stores product details in **MongoDB**.
   - Ensures **data integrity & validation**.

### **Technologies Used**
- **Node.js & Express.js**
- **MongoDB Atlas & Mongoose**
- **Multer (for file uploads)**

---

## **Conclusion**
This e-commerce project follows a structured milestone-based approach, ensuring a **scalable, secure, and fully functional** web application.

