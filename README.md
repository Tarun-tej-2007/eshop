# E-Commerce Application - Milestone Breakdown

# Milestone 1: Project Initialization

## Project Overview
This milestone marks the beginning of building a full-fledged E-Commerce Application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project aims to provide hands-on experience in full-stack web development.

## Key Achievements
- **MERN Stack Overview**: Gained an understanding of the MERN stack and its components.
- **Project Setup**: Initialized the project repository and set up the foundational structure.
- **REST API Planning**: Learned about REST API structure and endpoint design.
- **Database Schema Design**: Explored the basics of structuring data models in MongoDB.
- **Authentication Concepts**: Understood the role of authentication in web applications.

## Future Enhancements
- Implement secure user authentication and authorization.
- Develop API endpoints for product management and order handling.
- Enhance database schema with relational structures for efficient data retrieval.
- Set up a development environment with proper dependencies and configurations.

This milestone sets the foundation for building the complete e-commerce application by providing insights into server-client interaction and database management.


# Milestone 2: Setting Up Development Environment

## Project Overview
In this milestone, we structured the project, set up the frontend and backend, and built the login page for the application. This step ensures a well-organized development environment for the upcoming features.

## Key Achievements
- **Project Folder Structure**: Organized the project into separate frontend and backend directories.
- **React Frontend Setup**: Initialized a React application to build the user interface.
- **Node.js Backend Setup**: Created a simple Node.js server to support API integration.
- **Tailwind CSS Configuration**: Configured Tailwind CSS for efficient styling.
- **Login Page Development**: Implemented a functional and styled login page.

## Future Enhancements
- Implement authentication and authorization mechanisms.
- Develop API endpoints for user management and authentication.
- Enhance UI/UX with additional styling and components.
- Set up state management for better data handling.

This milestone establishes the foundation for frontend and backend integration, setting the stage for upcoming features and functionalities.


## Milestone 3: Backend Setup

### Project Overview

Set up the backend infrastructure, including folder structuring, server configuration, database integration, and error handling.

### Key Achievements

#### Backend Folder Structure

```
backend/
├── controllers/   # Handles API logic  
├── models/        # Defines database schemas  
├── routes/        # Manages API endpoints  
├── middleware/    # Custom middlewares (error handling, authentication, etc.)  
├── config/        # Database connection setup  
├── server.js      # Main server file  
```

#### Server Setup

- Implemented Express.js for backend API handling.
- Used dotenv to manage environment variables.
- Configured server to run on PORT 5000 (or from .env).

#### Database Integration

- Connected backend to MongoDB Atlas using Mongoose.
- Created models for Products, Users, and Orders.

#### Error Handling

- Implemented middleware for structured error responses.
- Improved debugging with meaningful error messages.

### Technologies Used

- **Node.js & Express.js** - Backend framework
- **MongoDB Atlas & Mongoose** - Database management
- **dotenv** - Environment variable management
- **CORS & Body-Parser** - Middleware for API requests


## Milestone 4: User Model, Controller & File Uploads

### Project Overview

- Defined User Model for MongoDB.
- Implemented User Controller for API logic.
- Integrated Multer for image/file uploads.

### Key Achievements

#### User Model (User.js)

Defined user schema with fields:

- Name, Email, Password (bcrypt-encrypted), Role (Admin/User), ProfileImage

#### User Controller

- Created API endpoints for user-related operations.

#### File Upload (Multer)

- Configured file upload support for user profile images and product images.


## Milestone 5: Sign-Up Page & Form Validation

### Project Overview

Developed a Sign-Up Page with form validation to ensure correct data entry.

### Key Achievements

#### Form Fields

- **Name:** Required
- **Email:** Valid email format check
- **Password:** Minimum 8 characters, one uppercase letter, one number
- Real-time validation feedback

### Technologies Used

- **React.js** - Frontend development
- **CSS** - Form styling
- **JavaScript (ES6)** - Form validation logic


## Milestone 6: Secure User Signup & Password Encryption

### Project Overview

Implemented secure user signup with encrypted password storage.

### Key Achievements

#### Signup API Endpoint (/api/auth/signup)

- Accepts Name, Email, Encrypted Password, User Role (Default: User)
- Validates user input before storing.

#### Password Encryption

- Used bcryptjs for hashing passwords.

#### Database Storage

- Stored user data securely in MongoDB.

#### API Testing

- Verified user signup via Postman.

### Technologies Used

- **Node.js & Express.js**
- **MongoDB Atlas & Mongoose**
- **bcryptjs** - Secure password hashing
- **dotenv** - Environment variables
- **Postman** - API testing


## Milestone 7: Backend Endpoint for User Login

### Project Overview

Implemented backend authentication for user login.

### Process

1. User submits email & password.
2. Backend retrieves user details.
3. Password verification using bcrypt.
4. Successful login or error message.

### Security Measures

- Password encryption using bcrypt.
- Prevents password theft & enhances privacy.
- Meets security compliance (GDPR, PCI-DSS).


## Milestone 8: Product Card Components

### Project Overview

Developed a reusable product card component for displaying products.

### Key Achievements

- **Reusable Card Component:** Displays name, price, image, and description.
- **Dynamic Rendering:** Used .map() to iterate over product data.
- **Consistent Layout:** Ensured uniform styling across all cards.

### Technologies Used

- **React.js**
- **CSS**


## Milestone 9: Product Input Form & Image Upload

### Project Overview

Developed a product input form with multiple image upload functionality.

### Features

- **Form Validation**
- **Multiple Image Uploads**
- **Real-time Image Previews**


## Milestone 10: Product Schema & API Endpoint

### Project Overview

Defined Product Schema using Mongoose and implemented a POST API endpoint.

### Key Achievements

#### Product Schema (Mongoose)

```javascript
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
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  }
}, { timestamps: true });
```

#### API Endpoint (/api/products)

- Validates and stores product details in MongoDB.
- Ensures data integrity & validation.

### Technologies Used

- **Node.js & Express.js**
- **MongoDB Atlas & Mongoose**
- **Multer** (for file uploads)


## Milestone 11: Fetching Product Data from Backend

### Project Overview

Created an API endpoint to retrieve product data from MongoDB and display it dynamically on the frontend using the Product Card Component.

### Key Achievements

- **API Endpoint:** Fetches all product data from MongoDB.
- **Frontend Integration:** Implemented a function to retrieve and display product data.
- **Dynamic Rendering:** Used Product Card Component for real-time product updates.

### Technologies Used

- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **React.js**


## Milestone 12: Filtering Products by User Email

### Project Overview

Created an API endpoint to retrieve product data filtered by user email, ensuring users see only their uploaded products.

### Key Achievements

- **Filtered API Endpoint:** Retrieves products associated with a specific user.
- **Frontend Integration:** Dynamically displays filtered products.
- **Improved User Experience:** Personalized product display.

### Future Enhancements

- Implement authentication to auto-fetch the logged-in user's products.
- Add pagination for large product lists.
- Introduce sorting and filtering options (e.g., price, category).


## Milestone 13: Filtering Products by User Email

### Project Overview

Created an API endpoint to retrieve product data filtered by user email, ensuring users see only their uploaded products.

### Key Achievements

- **Filtered API Endpoint:** Retrieves products associated with a specific user.
- **Frontend Integration:** Dynamically displays filtered products.
- **Improved User Experience:** Personalized product display.

### Future Enhancements

- Implement authentication to auto-fetch the logged-in user's products.
- Add pagination for large product lists.
- Introduce sorting and filtering options (e.g., price, category).


## Milestone 14: Deleting Products by ID

### Project Overview

This milestone focuses on implementing a **delete functionality** for uploaded products. Users can now remove a product from the database by clicking a **Delete** button, which sends the product ID to the backend for deletion.

### Key Achievements

- **Delete API Endpoint:** Allows products to be deleted using their unique ID.
- **Frontend Integration:** Added a Delete button to product cards.
- **Improved User Experience:** Users can remove unwanted products easily.

### Future Enhancements

- Implement a confirmation prompt before deletion.
- Add authentication to ensure only the product owner can delete.
- Introduce a soft delete feature to allow recovery of deleted products.


## Milestone 15: Creating a Navbar Component

### Project Overview

This milestone focuses on creating a **Navbar component** and integrating it into all pages to ensure smooth navigation across the application.

### Key Achievements

- **Reusable Navbar Component:** A single component used across multiple pages.
- **Navigation Links:** Added links to Home, My Products, Add Product, and Cart.
- **Responsive Design:** Ensured the Navbar adapts to different screen sizes.
- **Improved User Experience:** Simplified navigation across the application.

### Future Enhancements

- Implement authentication-based navigation (e.g., hide/show links based on login status).
- Add dropdown menus for better organization.
- Enhance styling for a more user-friendly experience.


## Milestone 16: Creating a Product Info Page

### Project Overview

This milestone focuses on creating a **Product Info Page** that displays all product details and allows users to select a quantity and add the item to their cart.

### Key Achievements

- **Detailed Product Page:** Displays all relevant product information.
- **Quantity Selector:** Users can choose the quantity of the product they want to purchase.
- **Add to Cart Button:** Enables users to add selected products to their cart.
- **Improved Shopping Experience:** Provides a seamless way to view and purchase products.

### Future Enhancements

- Implement a dynamic cart system with real-time updates.
- Add product image carousel for better visualization.
- Introduce customer reviews and ratings on the product page.


## Milestone 17: Adding Cart Functionality

### Project Overview

This milestone focuses on implementing **cart functionality** by creating an endpoint to add products to the cart and store them in the database.

### Key Achievements

- **Updated User Schema:** Modified schema to store cart products.
- **Cart API Endpoint:** Created an endpoint to receive and store product details in the cart.
- **Database Integration:** Successfully saved cart data in MongoDB.
- **Enhanced Shopping Experience:** Allowed users to add items to their cart for later purchase.

### Future Enhancements

- Implement cart quantity updates and item removal.
- Add authentication to associate carts with specific users.
- Introduce a checkout process with payment integration.


## Milestone 18: Fetching Cart Data

### Project Overview

This milestone focuses on implementing a **backend endpoint** to fetch all products stored in a user's cart and display them on the cart page.

### Key Achievements

- **Cart API Endpoint:** Created an endpoint to retrieve all products inside a user's cart.
- **User-Based Filtering:** Implemented logic to fetch cart items based on user email.
- **Database Integration:** Successfully retrieved cart data from MongoDB.
- **Improved User Experience:** Allowed users to view their saved cart items.

### Future Enhancements

- Implement real-time cart updates with WebSockets.
- Add authentication to secure user-specific cart data.
- Enhance cart UI to allow quantity updates and removals directly from the cart page.


## Milestone 19: Cart Page UI & Quantity Management

### Project Overview

This milestone focuses on building the *cart page UI* and implementing functionality to increase or decrease product quantity within the cart.

### Key Achievements

- *Cart Page UI:* Designed and developed a frontend page to display cart products.
- *Quantity Control:* Added + and - buttons to adjust product quantity.
- *Backend Integration:* Created an API endpoint to update product quantity in the cart.
- *Improved User Experience:* Enabled users to manage their cart directly from the UI.

### Future Enhancements

- Implement a persistent cart across user sessions.
- Add a "Remove from Cart" button for individual products.
- Introduce stock validation to prevent over-purchasing.


## Milestone 20: Profile Page Implementation

### Project Overview

This milestone focuses on building the *profile page UI* and implementing a backend endpoint to fetch and display user data.

### Key Achievements

- *Profile Page UI:* Designed and developed a frontend profile page to display user details.
- *User Data Fetching:* Created an API endpoint to retrieve user data using email.
- *Displayed User Information:* Shown profile photo, name, and email in a dedicated section.
- *Address Management:* Displayed user addresses with an option to add a new address.
- *Improved User Experience:* Provided a structured view of user information and an intuitive way to manage addresses.

### Future Enhancements

- Implement authentication to secure user data.
- Allow users to edit their profile information.
- Enable multiple address management with default selection.


# Milestone 21: Address Form Implementation

## Project Overview
This milestone focuses on building the address form UI and managing user address inputs effectively.

## Key Achievements
- **Address Form UI**: Designed and developed a frontend page for users to input their address details.
- **State Management**: Implemented React state to handle form inputs dynamically.
- **Navigation Integration**: Enabled navigation from the profile section to the address form page.
- **Form Validation**: Applied basic validation to ensure required fields are filled correctly.

## Future Enhancements
- Implement backend integration for storing and retrieving addresses.
- Add form validation messages for better user experience.
- Enhance UI styling for a more polished look.


# Milestone 22: Address Storage Backend Implementation

## Project Overview
This milestone focuses on building a backend endpoint to store user addresses in the database.

## Key Achievements
- **Backend Endpoint**: Created an API endpoint to receive and store user address data.
- **Database Integration**: Added the received address to the user's profile in the database.
- **Data Handling**: Ensured address data is securely saved and retrievable.
- **Frontend Connection**: Linked the address form with the backend to enable seamless data storage.

## Future Enhancements
- Implement authentication to ensure only logged-in users can add addresses.
- Enable users to update or delete saved addresses.
- Add error handling and validation for address input before storing it in the database.


# Milestone 23: Place Order Functionality & Order Schema

## Project Overview
This milestone focuses on implementing the 'Place Order' functionality, allowing users to select a delivery address and defining the order schema in the backend.

## Key Achievements
- **Place Order Button**: Added a 'Place Order' button inside the cart page that navigates to the address selection page.
- **Select Address Page**: Created a frontend page that displays all saved addresses and allows users to choose a delivery address.
- **Backend Address Retrieval**: Developed an API endpoint to fetch all saved addresses of the user.
- **Order Schema**: Designed a Mongoose schema for storing order details in the database.

## Future Enhancements
- Implement authentication to ensure only logged-in users can place orders.
- Add order confirmation and summary before finalizing the purchase.
- Enhance UI for better user experience while selecting addresses.


# Milestone 24: Order Confirmation Page

## Project Overview
This milestone focuses on creating an order confirmation page that displays the products being ordered, the selected delivery address, and the total price details.

## Key Achievements
- **Order Confirmation Page**: Designed and developed a page to summarize the order before finalizing the purchase.
- **Product Display**: Listed all the products included in the order.
- **Address Display**: Showcased the selected delivery address for the order.
- **Total Price Calculation**: Displayed the total order value based on the cart contents.
- **Final Place Order Button**: Added a button to confirm and place the order.

## Future Enhancements
- Implement order tracking functionality after placing the order.
- Allow users to edit or change the selected address before confirming.
- Enhance UI with better visuals and user feedback upon order placement.


# Milestone 25: Place Order Backend Endpoint

## Project Overview
This milestone focuses on creating a backend endpoint to process and store order details in the database.

## Key Achievements
- **Place Order Endpoint**: Developed an API endpoint to handle order placement requests.
- **User Identification**: Retrieved the user's `_id` using their email to associate orders correctly.
- **Order Creation**: Stored order details for each product separately while maintaining the same delivery address.
- **MongoDB Integration**: Used the previously defined order schema to save order details in the MongoDB order collection.

## Future Enhancements
- Implement order tracking functionality for users.
- Send email confirmations to users upon order placement.
- Improve error handling and validation to ensure reliable order processing.


# Milestone 26: Retrieve User Orders Endpoint

## Project Overview
This milestone focuses on creating a backend endpoint to fetch all orders associated with a specific user.

## Key Achievements
- **Retrieve Orders Endpoint**: Developed an API endpoint to fetch all orders for a user.
- **User Identification**: Retrieved the user's `_id` using their email to fetch relevant orders.
- **Order Retrieval**: Fetched all orders linked to the user from the database.
- **Response Handling**: Sent the retrieved orders as a response to the frontend.

## Future Enhancements
- Implement pagination for large order histories.
- Add authentication and authorization to ensure only authorized users can view orders.
- Enhance response formatting to include additional details like order status and estimated delivery time.

Absolutely! Here's a `README.md` for **Milestone 27** that matches the style of your Milestone 26:

---

# Milestone 27: My Orders Frontend Page

## Project Overview  
This milestone focuses on creating a **frontend page** that displays all orders associated with a specific user, using the backend endpoint developed in the previous milestone.

## Key Achievements  
- **My Orders Page**: Designed and implemented a new `my-orders` page in the frontend.
- **API Integration**: Sent a GET request to the `/my-orders` endpoint using the user’s email.
- **Order Display**: Dynamically displayed all the retrieved user orders on the page.
- **Navigation Update**: Added the `My Orders` page link to the navigation bar for seamless access.

## Future Enhancements  
- Improve UI with better styling and responsiveness.
- Add loading states and error handling for better UX.
- Implement search and filtering options for easier order tracking.
- Integrate authentication to show orders only when the user is logged in.

---
# Milestone 28: Cancel Order Functionality

## Project Overview  
This milestone focuses on enabling users to **cancel their orders** from the frontend and updating the order status on the backend using a new API endpoint.

## Key Achievements  
- **Cancel Button Integration**: Added a **Cancel Order** button for each active order on the `my-orders` page.
- **Conditional Rendering**: Ensured the cancel button is **not displayed** for orders that are already canceled.
- **Cancel Order Endpoint**: Created a **backend endpoint** to handle order cancellation requests.
- **Order Status Update**: Used the `order-id` to fetch the corresponding order and update its status to **"Canceled"** in the database.

## Future Enhancements  
- Display a confirmation prompt before canceling an order.
- Show toast/alert messages for success or failure of the cancel action.
- Allow admin users to manage canceled orders and restore if needed.
- Log canceled orders for analytics and reporting.

---
Here's a clean and consistent `README.md` for **Milestone 30**, continuing from your Milestone 29 setup:

---

# Milestone 30: Online Payment Integration Using PayPal API

## Project Overview  
This milestone completes the PayPal payment integration process by using the **`react-paypal-js`** library to display actual PayPal payment options (like debit/credit cards) in the React application.

## Key Achievements  
- **PayPal SDK Integration**:  
  - Installed and used the **`@paypal/react-paypal-js`** NPM package.
  - Wrapped payment components with `PayPalScriptProvider` to initialize PayPal with the sandbox **Client ID**.

- **PayPal Button Display**:  
  - Conditionally rendered the **PayPal payment buttons** when "Online Payment" was selected on the order confirmation page.

- **Smooth Payment Flow**:  
  - Enabled users to proceed with PayPal payments using sandbox credentials.
  - Set up initial configuration for transaction and payment handling.

## NPM Package Used  
```
npm install @paypal/react-paypal-js
```

## Sample Code Snippet
```jsx
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

<PayPalScriptProvider options={{ "client-id": "YOUR_SANDBOX_CLIENT_ID" }}>
  <PayPalButtons style={{ layout: "vertical" }} />
</PayPalScriptProvider>
```

## Future Enhancements  
- Handle payment success and failure callbacks.
- Store payment transaction details in the database.
- Display order summary after successful payment.
- Add loader and user feedback during transaction.

---

# Milestone 31: Global State Management with Redux

## Project Overview  
This milestone introduces **Redux** to manage global state in the application. Specifically, it focuses on storing the **user's email** in the Redux store so it can be accessed across all components easily.

## Key Achievements  
- **Redux Setup**:  
  - Installed and configured **`react-redux`**.
  - Created a `store/` folder containing:
    - `store.js` – Redux store configuration.
    - `userActions.js` – Contains action creator `setEmail()` for updating global email state.

- **User Email as Global State**:  
  - Implemented a simple `userReducer` to manage the user’s email.
  - Configured the reducer in the store and exported it for use across the app.

- **Provider Integration**:  
  - Wrapped the `App` component inside the `Provider` component from `react-redux`.
  - Passed the Redux `store` as a prop to ensure the entire app can access the global state.

## Folder Structure  
```
src/
│
├── store/
│   ├── store.js
│   └── userActions.js
├── index.js
├── App.js
└── ...
```

## NPM Packages Used  
```
npm install react-redux
```

## Future Enhancements  
- Add more actions to manage other user details (e.g., name, login status).
- Integrate Redux DevTools for easier debugging.
- Implement **Redux Toolkit** for more efficient Redux code.
- Use global state to improve route protection and conditional rendering.

---
